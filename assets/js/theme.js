// Sistema de "Ambientes de Estudo": Moderno (padrão), Vikings e Aurora
const AFB_THEME_KEY = "afb_theme";
const AFB_THEMES = ["moderno", "vikings", "aurora"];
const AFB_THEME_META = {
  moderno: { icon: "◆", label: "Moderno", tag: "Elegante, minimalista e focado" },
  vikings: { icon: "🛡️", label: "Vikings", tag: "Força, história e conquista" },
  aurora: { icon: "🌌", label: "Aurora", tag: "Leveza, inspiração e equilíbrio" },
};

const Theme = {
  get() {
    const t = localStorage.getItem(AFB_THEME_KEY);
    return AFB_THEMES.includes(t) ? t : "moderno";
  },
  set(theme) {
    if (!AFB_THEMES.includes(theme)) theme = "moderno";
    localStorage.setItem(AFB_THEME_KEY, theme);
    Theme.apply();
  },
  cycle() {
    const i = AFB_THEMES.indexOf(Theme.get());
    Theme.set(AFB_THEMES[(i + 1) % AFB_THEMES.length]);
  },
  // Mantido por compatibilidade com telas antigas que so alternavam 2 temas
  toggle() {
    Theme.cycle();
  },
  apply() {
    document.documentElement.setAttribute("data-theme", Theme.get());
  },
  meta() {
    return AFB_THEME_META[Theme.get()];
  },
  label() {
    const m = Theme.meta();
    return `${m.icon} ${m.label}`;
  },
};

Theme.apply();
