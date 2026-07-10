// ============================================================
// Autenticacao 100% local (localStorage do navegador).
// Isto e um estagio inicial: cada usuario fica salvo so no
// aparelho/navegador em que se cadastrou. Quando o site for
// para producao, este arquivo sera trocado por chamadas reais
// ao Supabase Auth (mesmo backend que o app Flutter ja usa) —
// as telas continuam iguais, so a implementacao interna muda.
// ============================================================

const AFB_USERS_KEY = "afb_users";
const AFB_SESSION_KEY = "afb_session";
const AFB_BASE = location.pathname.includes("/alemao-facil-brasil/") || location.pathname.startsWith("/alemao-facil-brasil") ? "/alemao-facil-brasil" : "";

async function afbHash(text) {
  const enc = new TextEncoder().encode(text);
  const buf = await crypto.subtle.digest("SHA-256", enc);
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function afbRandomSalt() {
  const arr = new Uint8Array(16);
  crypto.getRandomValues(arr);
  return Array.from(arr).map((b) => b.toString(16).padStart(2, "0")).join("");
}

function afbLoadUsers() {
  try {
    return JSON.parse(localStorage.getItem(AFB_USERS_KEY)) || {};
  } catch {
    return {};
  }
}

function afbSaveUsers(users) {
  localStorage.setItem(AFB_USERS_KEY, JSON.stringify(users));
}

const Auth = {
  async signup({ name, email, password }) {
    email = (email || "").trim().toLowerCase();
    name = (name || "").trim();
    if (!name || !email || !password) {
      return { ok: false, error: "Preencha todos os campos." };
    }
    if (password.length < 6) {
      return { ok: false, error: "A senha precisa ter pelo menos 6 caracteres." };
    }
    const users = afbLoadUsers();
    if (users[email]) {
      return { ok: false, error: "Já existe uma conta com esse e-mail." };
    }
    const salt = afbRandomSalt();
    const passwordHash = await afbHash(salt + password);
    users[email] = {
      name,
      email,
      passwordHash,
      salt,
      createdAt: new Date().toISOString(),
    };
    afbSaveUsers(users);
    localStorage.setItem(AFB_SESSION_KEY, email);
    return { ok: true };
  },

  async login({ email, password }) {
    email = (email || "").trim().toLowerCase();
    const users = afbLoadUsers();
    const user = users[email];
    if (!user) {
      return { ok: false, error: "E-mail ou senha inválidos." };
    }
    const hash = await afbHash(user.salt + password);
    if (hash !== user.passwordHash) {
      return { ok: false, error: "E-mail ou senha inválidos." };
    }
    localStorage.setItem(AFB_SESSION_KEY, email);
    return { ok: true };
  },

  logout() {
    localStorage.removeItem(AFB_SESSION_KEY);
    window.location.href = AFB_BASE + "/index.html";
  },

  currentUser() {
    const email = localStorage.getItem(AFB_SESSION_KEY);
    if (!email) return null;
    const users = afbLoadUsers();
    return users[email] || null;
  },

  updateCurrentUser(patch) {
    const email = localStorage.getItem(AFB_SESSION_KEY);
    if (!email) return;
    const users = afbLoadUsers();
    if (!users[email]) return;
    Object.assign(users[email], patch);
    afbSaveUsers(users);
  },

  requireLogin() {
    if (!Auth.currentUser()) {
      window.location.href = AFB_BASE + "/app/login.html";
    }
  },

  redirectIfLoggedIn() {
    if (Auth.currentUser()) {
      window.location.href = AFB_BASE + "/app/dashboard.html";
    }
  },
};
