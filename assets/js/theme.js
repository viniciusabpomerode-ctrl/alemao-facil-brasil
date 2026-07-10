// Sistema de temas: Vikings (padrao) e Guardias — portado de theme_service.dart
const AFB_THEME_KEY = "afb_theme";

const Theme = {
  get() {
    return localStorage.getItem(AFB_THEME_KEY) || "vikings";
  },
  set(theme) {
    localStorage.setItem(AFB_THEME_KEY, theme);
    Theme.apply();
  },
  toggle() {
    Theme.set(Theme.get() === "vikings" ? "guardians" : "vikings");
  },
  apply() {
    document.documentElement.setAttribute("data-theme", Theme.get());
  },
  label() {
    return Theme.get() === "vikings" ? "🛡️ Vikings" : "🦋 Guardiãs";
  },
};

Theme.apply();
