// ============================================
// SISTEMA DE IDIOMAS — portado do app Flutter
// ============================================

const AppLanguage = {
  pt: { code: "pt", name: "Português", flag: "🇧🇷" },
  en: { code: "en", name: "English", flag: "🇺🇸" },
  es: { code: "es", name: "Español", flag: "🇪🇸" },
  fr: { code: "fr", name: "Français", flag: "🇫🇷" },
  it: { code: "it", name: "Italiano", flag: "🇮🇹" },
  tr: { code: "tr", name: "Türkçe", flag: "🇹🇷" },
  pl: { code: "pl", name: "Polski", flag: "🇵🇱" },
  hi: { code: "hi", name: "हिन्दी", flag: "🇮🇳" },
  he: { code: "he", name: "עברית", flag: "🇮🇱", rtl: true },
  ar: { code: "ar", name: "العربية", flag: "🇸🇦", rtl: true },
};

const AFB_LANG_KEY = "afb_language";
const AFB_LANG_SOURCE_KEY = "afb_language_source";

const AFB_COUNTRY_LANGUAGE = {
  BR: "pt", PT: "pt", AO: "pt", MZ: "pt", CV: "pt", GW: "pt", ST: "pt", TL: "pt",
  US: "en", GB: "en", CA: "en", AU: "en", NZ: "en", IE: "en",
  ES: "es", MX: "es", AR: "es", CO: "es", CL: "es", PE: "es", VE: "es",
  EC: "es", BO: "es", PY: "es", UY: "es", CR: "es", PA: "es", GT: "es",
  HN: "es", SV: "es", NI: "es", DO: "es", CU: "es",
  FR: "fr", MC: "fr", IT: "it", SM: "it", VA: "it", TR: "tr", PL: "pl",
  IL: "he", IN: "hi",
  SA: "ar", AE: "ar", QA: "ar", KW: "ar", BH: "ar", OM: "ar", YE: "ar",
  EG: "ar", JO: "ar", LB: "ar", IQ: "ar", SY: "ar", MA: "ar", DZ: "ar",
  TN: "ar", LY: "ar", SD: "ar"
};

const AFB_COMMUNITY_TRANSLATIONS = {
  en: {"Comunidade DeutschBloom":"DeutschBloom Community","Pratique alemão com outras pessoas":"Practice German with other learners","Entre no nosso grupo do WhatsApp para trocar dúvidas, compartilhar progresso e manter a constância nos estudos.":"Join our WhatsApp group to ask questions, share your progress, and stay consistent with your studies.","✓ Conversas respeitosas":"✓ Respectful conversations","✓ Ajuda entre estudantes":"✓ Help between learners","✓ Participação gratuita":"✓ Free to join","Entrar no grupo ↗":"Join the group ↗"},
  es: {"Comunidade DeutschBloom":"Comunidad DeutschBloom","Pratique alemão com outras pessoas":"Practica alemán con otras personas","Entre no nosso grupo do WhatsApp para trocar dúvidas, compartilhar progresso e manter a constância nos estudos.":"Únete a nuestro grupo de WhatsApp para resolver dudas, compartir tu progreso y mantener la constancia en tus estudios.","✓ Conversas respeitosas":"✓ Conversaciones respetuosas","✓ Ajuda entre estudantes":"✓ Ayuda entre estudiantes","✓ Participação gratuita":"✓ Participación gratuita","Entrar no grupo ↗":"Entrar al grupo ↗"},
  fr: {"Comunidade DeutschBloom":"Communauté DeutschBloom","Pratique alemão com outras pessoas":"Pratiquez l’allemand avec d’autres personnes","Entre no nosso grupo do WhatsApp para trocar dúvidas, compartilhar progresso e manter a constância nos estudos.":"Rejoignez notre groupe WhatsApp pour poser vos questions, partager vos progrès et étudier avec régularité.","✓ Conversas respeitosas":"✓ Échanges respectueux","✓ Ajuda entre estudantes":"✓ Entraide entre apprenants","✓ Participação gratuita":"✓ Participation gratuite","Entrar no grupo ↗":"Rejoindre le groupe ↗"},
  it: {"Comunidade DeutschBloom":"Community DeutschBloom","Pratique alemão com outras pessoas":"Pratica il tedesco con altre persone","Entre no nosso grupo do WhatsApp para trocar dúvidas, compartilhar progresso e manter a constância nos estudos.":"Entra nel nostro gruppo WhatsApp per fare domande, condividere i progressi e studiare con costanza.","✓ Conversas respeitosas":"✓ Conversazioni rispettose","✓ Ajuda entre estudantes":"✓ Aiuto tra studenti","✓ Participação gratuita":"✓ Partecipazione gratuita","Entrar no grupo ↗":"Entra nel gruppo ↗"},
  tr: {"Comunidade DeutschBloom":"DeutschBloom Topluluğu","Pratique alemão com outras pessoas":"Başkalarıyla Almanca pratik yapın","Entre no nosso grupo do WhatsApp para trocar dúvidas, compartilhar progresso e manter a constância nos estudos.":"Sorularınızı paylaşmak, ilerlemenizi göstermek ve düzenli çalışmak için WhatsApp grubumuza katılın.","✓ Conversas respeitosas":"✓ Saygılı sohbetler","✓ Ajuda entre estudantes":"✓ Öğrenciler arası yardım","✓ Participação gratuita":"✓ Ücretsiz katılım","Entrar no grupo ↗":"Gruba katıl ↗"},
  pl: {"Comunidade DeutschBloom":"Społeczność DeutschBloom","Pratique alemão com outras pessoas":"Ćwicz niemiecki z innymi osobami","Entre no nosso grupo do WhatsApp para trocar dúvidas, compartilhar progresso e manter a constância nos estudos.":"Dołącz do naszej grupy WhatsApp, aby zadawać pytania, dzielić się postępami i uczyć się regularnie.","✓ Conversas respeitosas":"✓ Kulturalne rozmowy","✓ Ajuda entre estudantes":"✓ Pomoc między uczniami","✓ Participação gratuita":"✓ Bezpłatny udział","Entrar no grupo ↗":"Dołącz do grupy ↗"},
  hi: {"Comunidade DeutschBloom":"DeutschBloom समुदाय","Pratique alemão com outras pessoas":"दूसरे लोगों के साथ जर्मन का अभ्यास करें","Entre no nosso grupo do WhatsApp para trocar dúvidas, compartilhar progresso e manter a constância nos estudos.":"सवाल पूछने, अपनी प्रगति साझा करने और नियमित पढ़ाई बनाए रखने के लिए हमारे WhatsApp समूह से जुड़ें।","✓ Conversas respeitosas":"✓ सम्मानजनक बातचीत","✓ Ajuda entre estudantes":"✓ विद्यार्थियों के बीच सहायता","✓ Participação gratuita":"✓ निःशुल्क भागीदारी","Entrar no grupo ↗":"समूह से जुड़ें ↗"},
  he: {"Comunidade DeutschBloom":"קהילת DeutschBloom","Pratique alemão com outras pessoas":"תרגלו גרמנית עם אנשים נוספים","Entre no nosso grupo do WhatsApp para trocar dúvidas, compartilhar progresso e manter a constância nos estudos.":"הצטרפו לקבוצת ה-WhatsApp שלנו כדי לשאול שאלות, לשתף התקדמות ולהתמיד בלימודים.","✓ Conversas respeitosas":"✓ שיחות מכבדות","✓ Ajuda entre estudantes":"✓ עזרה בין לומדים","✓ Participação gratuita":"✓ ההשתתפות בחינם","Entrar no grupo ↗":"הצטרפות לקבוצה ↗"},
  ar: {"Comunidade DeutschBloom":"مجتمع DeutschBloom","Pratique alemão com outras pessoas":"تدرّب على الألمانية مع الآخرين","Entre no nosso grupo do WhatsApp para trocar dúvidas, compartilhar progresso e manter a constância nos estudos.":"انضم إلى مجموعتنا على WhatsApp لطرح الأسئلة ومشاركة تقدمك والحفاظ على الانتظام في الدراسة.","✓ Conversas respeitosas":"✓ محادثات محترمة","✓ Ajuda entre estudantes":"✓ مساعدة بين المتعلمين","✓ Participação gratuita":"✓ مشاركة مجانية","Entrar no grupo ↗":"انضم إلى المجموعة ↗"}
};

const AFB_COMMUNITY_PAGE_TRANSLATIONS = {
  en: {"Comunidade WhatsApp":"WhatsApp Community","Ao entrar, seu número e nome do WhatsApp ficarão visíveis para os participantes do grupo.":"When you join, your WhatsApp name and phone number will be visible to group members."},
  es: {"Comunidade WhatsApp":"Comunidad de WhatsApp","Ao entrar, seu número e nome do WhatsApp ficarão visíveis para os participantes do grupo.":"Al unirte, tu nombre y número de WhatsApp serán visibles para los miembros del grupo."},
  fr: {"Comunidade WhatsApp":"Communauté WhatsApp","Ao entrar, seu número e nome do WhatsApp ficarão visíveis para os participantes do grupo.":"En rejoignant le groupe, votre nom et votre numéro WhatsApp seront visibles par ses membres."},
  it: {"Comunidade WhatsApp":"Community WhatsApp","Ao entrar, seu número e nome do WhatsApp ficarão visíveis para os participantes do grupo.":"Entrando, il tuo nome e numero WhatsApp saranno visibili ai membri del gruppo."},
  tr: {"Comunidade WhatsApp":"WhatsApp Topluluğu","Ao entrar, seu número e nome do WhatsApp ficarão visíveis para os participantes do grupo.":"Katıldığınızda WhatsApp adınız ve telefon numaranız grup üyeleri tarafından görülebilir."},
  pl: {"Comunidade WhatsApp":"Społeczność WhatsApp","Ao entrar, seu número e nome do WhatsApp ficarão visíveis para os participantes do grupo.":"Po dołączeniu Twoja nazwa i numer WhatsApp będą widoczne dla członków grupy."},
  hi: {"Comunidade WhatsApp":"WhatsApp समुदाय","Ao entrar, seu número e nome do WhatsApp ficarão visíveis para os participantes do grupo.":"जुड़ने पर आपका WhatsApp नाम और फ़ोन नंबर समूह के सदस्यों को दिखाई देगा।"},
  he: {"Comunidade WhatsApp":"קהילת WhatsApp","Ao entrar, seu número e nome do WhatsApp ficarão visíveis para os participantes do grupo.":"לאחר ההצטרפות, השם ומספר הטלפון שלך ב-WhatsApp יהיו גלויים לחברי הקבוצה."},
  ar: {"Comunidade WhatsApp":"مجتمع WhatsApp","Ao entrar, seu número e nome do WhatsApp ficarão visíveis para os participantes do grupo.":"عند الانضمام، سيظهر اسمك ورقم هاتفك على WhatsApp لأعضاء المجموعة."}
};

const I18n = {
  _current: "pt",
  _listeners: [],
  _localeMap: null,
  _localeMapLanguage: null,
  _contentOverrides: {
    en: { "A) Eu tenho 20 anos": "A) I am 20 years old" },
    es: { "A) Eu tenho 20 anos": "A) Tengo 20 años" },
    fr: { "A) Eu tenho 20 anos": "A) J’ai 20 ans" },
    it: { "A) Eu tenho 20 anos": "A) Ho 20 anni" },
    tr: { "A) Eu tenho 20 anos": "A) 20 yaşındayım" },
    pl: { "A) Eu tenho 20 anos": "A) Mam 20 lat" },
    hi: { "A) Eu tenho 20 anos": "A) मेरी उम्र 20 साल है" },
    he: { "A) Eu tenho 20 anos": "A) אני בן/בת 20" },
    ar: { "A) Eu tenho 20 anos": "A) عمري 20 سنة" },
  },

  // ── Inicialização ──
  init() {
    const requested = new URLSearchParams(location.search).get("lang");
    const saved = localStorage.getItem(AFB_LANG_KEY);
    const source = localStorage.getItem(AFB_LANG_SOURCE_KEY);

    if (requested && AppLanguage[requested]) {
      this._current = requested;
      localStorage.setItem(AFB_LANG_KEY, requested);
      localStorage.setItem(AFB_LANG_SOURCE_KEY, "user");
      return;
    }
    if (saved && AppLanguage[saved]) {
      this._current = saved;
      if (!source) localStorage.setItem(AFB_LANG_SOURCE_KEY, "user");
      return;
    }

    this._current = this._browserLanguage();
    this._detectRegion();
  },

  _browserLanguage() {
    const candidates = Array.isArray(navigator.languages) && navigator.languages.length
      ? navigator.languages
      : [navigator.language || ""];
    for (const locale of candidates) {
      const code = String(locale).toLowerCase().split("-")[0];
      if (AppLanguage[code]) return code;
    }
    return "en";
  },

  async _detectRegion() {
    if (localStorage.getItem(AFB_LANG_SOURCE_KEY) === "user") return;
    let detected = this._browserLanguage();
    try {
      const response = await fetch("/api/geo", { cache: "no-store" });
      if (response.ok) {
        const payload = await response.json();
        const country = String(payload.country || "").toUpperCase();
        detected = AFB_COUNTRY_LANGUAGE[country] || detected;
        if (country) localStorage.setItem("afb_country", country);
      }
    } catch (_) {}

    if (localStorage.getItem(AFB_LANG_SOURCE_KEY) === "user") return;
    localStorage.setItem(AFB_LANG_KEY, detected);
    localStorage.setItem(AFB_LANG_SOURCE_KEY, "auto");
    if (detected !== this._current) location.reload();
  },

  getCurrent() {
    return this._current;
  },

  getCurrentLang() {
    return AppLanguage[this._current] || AppLanguage.pt;
  },

  getAvailable() {
    return Object.values(AppLanguage);
  },

  // ── Trocar idioma ──
  async setLanguage(code) {
    if (!AppLanguage[code]) return;
    this._current = code;
    localStorage.setItem(AFB_LANG_KEY, code);
    localStorage.setItem(AFB_LANG_SOURCE_KEY, "user");
    // Notifica listeners (para recarregar UI)
    this._listeners.forEach(fn => fn(code));
    // Recarrega a página para aplicar novo idioma
    location.reload();
  },

  onChange(fn) {
    this._listeners.push(fn);
  },

  async loadContentMap() {
    const lang = this._current;
    if (lang === "pt") return {};
    if (this._localeMap && this._localeMapLanguage === lang) return this._localeMap;
    const r2Base = typeof AFB_R2_PUBLIC_URL !== "undefined"
      ? AFB_R2_PUBLIC_URL
      : "https://pub-d856fe7eb96043c3a93a4d72cd8317cc.r2.dev";
    for (const url of [`${r2Base}/data/${lang}.json`, `../locale_maps/${lang}.json`, `/locale_maps/${lang}.json`]) {
      try {
        const response = await fetch(url, { cache: "no-cache" });
        if (!response.ok) continue;
        const payload = await response.json();
        this._localeMap = payload.translations || {};
        this._localeMapLanguage = lang;
        return this._localeMap;
      } catch (_) {}
    }
    this._localeMap = {};
    this._localeMapLanguage = lang;
    return this._localeMap;
  },

  content(text) {
    if (text === undefined || text === null || text === "" || this._current === "pt") return text || "";
    const overrides = this._contentOverrides[this._current] || {};
    const community = AFB_COMMUNITY_TRANSLATIONS[this._current] || {};
    const communityPage = AFB_COMMUNITY_PAGE_TRANSLATIONS[this._current] || {};
    return communityPage[text] || community[text] || overrides[text] || (this._localeMap && this._localeMap[text]) || text;
  },

  async applyPageTranslations(root = document.body) {
    const lang = this._current;
    document.documentElement.lang = {
      pt: "pt-BR", en: "en-US", es: "es-ES", fr: "fr-FR", it: "it-IT",
      tr: "tr-TR", pl: "pl-PL", hi: "hi-IN", he: "he-IL", ar: "ar-SA"
    }[lang] || lang;
    document.documentElement.dir = AppLanguage[lang]?.rtl ? "rtl" : "ltr";
    if (lang === "pt" || !root) return;

    await this.loadContentMap();
    const translate = value => {
      const compact = String(value || "").replace(/\s+/g, " ").trim();
      if (!compact) return value;
      const translated = this.content(compact);
      if (translated === compact) return value;
      const before = String(value).match(/^\s*/)?.[0] || "";
      const after = String(value).match(/\s*$/)?.[0] || "";
      return before + translated + after;
    };
    const apply = node => {
      if (node.nodeType === Node.TEXT_NODE) {
        const parent = node.parentElement;
        if (parent?.closest?.('[lang="de"],.sentence-de,.german,.phrase-de,.german-text,.german-word,[data-no-translate]')) return;
        const value = translate(node.nodeValue);
        if (value !== node.nodeValue) node.nodeValue = value;
        return;
      }
      if (node.nodeType !== Node.ELEMENT_NODE || ["SCRIPT", "STYLE", "CODE"].includes(node.tagName)) return;
      ["placeholder", "title", "aria-label"].forEach(attribute => {
        const value = node.getAttribute(attribute);
        if (!value) return;
        const translated = translate(value);
        if (translated !== value) node.setAttribute(attribute, translated);
      });
      if (node.tagName !== "TEXTAREA") node.childNodes.forEach(apply);
    };
    apply(root);
    document.title = translate(document.title);
    if (!this._translationObserver) {
      this._translationObserver = new MutationObserver(changes => {
        changes.forEach(change => change.addedNodes.forEach(apply));
      });
      this._translationObserver.observe(root, { childList: true, subtree: true });
    }
  },

  // ── Campo dinâmico com suporte a _{lang} ──
  // Ex: I18n.field(obj, 'portuguese_translation') retorna
  //     obj.portuguese_translation_en se lang=en, senão obj.portuguese_translation
  field(obj, baseField) {
    if (!obj) return '';
    const lang = this._current;
    if (lang === 'pt') return obj[baseField] || '';
    const translated = obj[baseField + '_' + lang];
    if (translated !== undefined && translated !== null && translated !== '') return translated;
    return obj[baseField] || ''; // fallback
  },

  // ── Traduções estáticas da UI (portado do AppTranslations) ──
  _strings: {
    pt: {
      // Geral
      cursos: "Cursos",
      music: "Música",
      game: "Jogo",
      profile: "Perfil",
      plans: "Planos",
      login: "Entrar",
      logout: "Sair",
      settings: "Configurações",
      language: "Idioma",
      theme: "Tema",
      about: "Sobre",
      save: "Salvar",
      cancel: "Cancelar",
      ok: "OK",
      error: "Erro",
      success: "Sucesso",
      loading: "Carregando...",
      close: "Fechar",
      back: "Voltar",
      // App
      app_title: "DeutschBloom",
      home: "Início",
      dialogs: "Diálogos",
      podcasts: "Podcasts",
      verbs: "Verbos",
      verb_conjugations: "Conjugações e exemplos",
      essential_verbs: "Verbos Essenciais",
      music_title: "Música",
      game_title: "Jogo",
      vocabulary_hunting: "Caçando Vocabulário",
      vocabulary_hunting_desc: "Controle um dragão e capture palavras em alemão!",
      // Perfil
      my_profile: "Meu perfil",
      statistics: "Estatísticas",
      total_xp: "XP total",
      current_level: "Nível",
      daily_streak: "Streak",
      completed: "Concluídos",
      edit_name: "Editar Nome",
      enter_name: "Digite seu nome",
      name: "Nome",
      email: "Email",
      password: "Senha",
      // Idioma
      select_language: "Selecionar Idioma",
      choose_app_language: "Selecione o idioma do aplicativo",
      language_changed: "🌍 Idioma alterado!",
      change_language: "Trocar Idioma",
      // Tema
      choose_theme: "Escolha seu Tema",
      vikings_theme: "🛡️ Vikings",
      guardians_theme: "🦋 Guardiãs",
      vikings_desc: "Aventure-se pelos caminhos dos guerreiros nórdicos",
      guardians_desc: "Explore a magia e sabedoria das guardiãs místicas",
      // Player
      speed: "Velocidade",
      very_slow: "Muito Lento",
      slow: "Lento",
      normal: "Normal",
      playing: "Tocando",
      sentences: "Frases",
      vocabulary_tab: "Vocabulário",
      grammar_tab: "Gramática",
      dialog_full: "Diálogo Completo",
      main_audio: "Áudio principal",
      listen_full: "Ouvir completo",
      // Cursos
      choose_level: "Escolha um nível",
      dialogues: "Conversações práticas por temas",
      podcast_stories: "Histórias por categorias",
      verbs_count: "verbos • 5 tempos • 6 pronomes",
      progress: "Progresso",
      xp_to_next_level: "Faltam {xp} XP para o próximo nível",
      continue_learning: "Continue aprendendo",
      level: "Nível",
      levels: "Níveis",
      // Ações
      create_account: "Criar conta",
      create_account_free: "Criar conta grátis",
      already_have_account: "Já tenho conta",
      no_account_yet: "Ainda não tem conta?",
      forgot_password: "Esqueceu a senha?",
      login_success: "Login realizado com sucesso!",
      // Progresso
      completed_lessons: "Lições completadas",
      lessons_completed: "Lições completadas",
      your_progress: "Seu Progresso",
      progress_saved: "Progresso salvo!",
      mark_complete: "Marcar como concluído",
      already_completed: "Já concluído",
      congratulations: "Parabéns!",
      leveled_up: "Você subiu para o nível {level}!",
      // Vocabulário
      vocabulary: "Vocabulário",
      pronunciation: "Pronúncia",
      translation: "Tradução",
      // Premium
      free_plan: "Grátis",
      premium_plan: "Premium",
      coming_soon: "Em breve",
      // Diálogo
      no_sentences: "Nenhuma frase disponível",
      no_vocabulary: "Nenhum vocabulário disponível",
      no_grammar_tips: "Nenhuma dica de gramática disponível",
      back_to_courses: "← Voltar para Cursos",
      back_to_music: "← Voltar para Música",
      complete_dialog: "Diálogo completo!",
      xp_bonus: "+{xp} XP bônus",
    },
    en: {
      cursos: "Courses",
      music: "Music",
      game: "Game",
      profile: "Profile",
      plans: "Plans",
      login: "Sign In",
      logout: "Logout",
      settings: "Settings",
      language: "Language",
      theme: "Theme",
      about: "About",
      save: "Save",
      cancel: "Cancel",
      ok: "OK",
      error: "Error",
      success: "Success",
      loading: "Loading...",
      close: "Close",
      back: "Back",
      app_title: "Easy German Brasil",
      home: "Home",
      dialogs: "Dialogs",
      podcasts: "Podcasts",
      verbs: "Verbs",
      verb_conjugations: "Conjugations and examples",
      essential_verbs: "Essential Verbs",
      music_title: "Music",
      game_title: "Game",
      vocabulary_hunting: "Vocabulary Hunter",
      vocabulary_hunting_desc: "Control a dragon and capture German words!",
      my_profile: "My profile",
      statistics: "Statistics",
      total_xp: "Total XP",
      current_level: "Level",
      daily_streak: "Streak",
      completed: "Completed",
      edit_name: "Edit Name",
      enter_name: "Enter your name",
      name: "Name",
      email: "Email",
      password: "Password",
      select_language: "Select Language",
      choose_app_language: "Choose the app language",
      language_changed: "🌍 Language changed!",
      change_language: "Change Language",
      choose_theme: "Choose your Theme",
      vikings_theme: "🛡️ Vikings",
      guardians_theme: "🦋 Guardians",
      vikings_desc: "Embark on the paths of Nordic warriors",
      guardians_desc: "Explore the magic and wisdom of mystical guardians",
      speed: "Speed",
      very_slow: "Very Slow",
      slow: "Slow",
      normal: "Normal",
      playing: "Playing",
      sentences: "Sentences",
      vocabulary_tab: "Vocabulary",
      grammar_tab: "Grammar",
      dialog_full: "Full Dialog",
      main_audio: "Main audio",
      listen_full: "Listen full",
      choose_level: "Choose a level",
      dialogues: "Practical conversations by themes",
      podcast_stories: "Stories by categories",
      verbs_count: "verbs • 5 tenses • 6 pronouns",
      progress: "Progress",
      xp_to_next_level: "{xp} XP to next level",
      continue_learning: "Keep learning",
      level: "Level",
      levels: "Levels",
      create_account: "Create account",
      create_account_free: "Create free account",
      already_have_account: "I already have an account",
      no_account_yet: "Don't have an account yet?",
      login_success: "Login successful!",
      completed_lessons: "Completed lessons",
      lessons_completed: "Lessons completed",
      your_progress: "Your Progress",
      progress_saved: "Progress saved!",
      mark_complete: "Mark as completed",
      already_completed: "Already completed",
      congratulations: "Congratulations!",
      leveled_up: "You leveled up to {level}!",
      vocabulary: "Vocabulary",
      pronunciation: "Pronunciation",
      translation: "Translation",
      free_plan: "Free",
      premium_plan: "Premium",
      coming_soon: "Coming soon",
      no_sentences: "No sentences available",
      no_vocabulary: "No vocabulary available",
      no_grammar_tips: "No grammar tips available",
      back_to_courses: "← Back to Courses",
      back_to_music: "← Back to Music",
      complete_dialog: "Dialog complete!",
      xp_bonus: "+{xp} XP bonus",
    },
    es: {
      cursos: "Cursos",
      music: "Música",
      game: "Juego",
      profile: "Perfil",
      plans: "Planes",
      login: "Iniciar sesión",
      logout: "Cerrar sesión",
      settings: "Ajustes",
      language: "Idioma",
      theme: "Tema",
      about: "Acerca de",
      save: "Guardar",
      cancel: "Cancelar",
      ok: "OK",
      error: "Error",
      success: "Éxito",
      loading: "Cargando...",
      close: "Cerrar",
      back: "Volver",
      app_title: "Alemán Fácil Brasil",
      home: "Inicio",
      dialogs: "Diálogos",
      podcasts: "Podcasts",
      verbs: "Verbos",
      verb_conjugations: "Conjugaciones y ejemplos",
      essential_verbs: "Verbos Esenciales",
      music_title: "Música",
      game_title: "Juego",
      vocabulary_hunting: "Cazando Vocabulario",
      my_profile: "Mi perfil",
      statistics: "Estadísticas",
      total_xp: "XP total",
      current_level: "Nivel",
      daily_streak: "Racha",
      completed: "Completados",
      select_language: "Seleccionar Idioma",
      language_changed: "🌍 ¡Idioma cambiado!",
      change_language: "Cambiar Idioma",
      speed: "Velocidad",
      very_slow: "Muy Lento",
      slow: "Lento",
      normal: "Normal",
      sentences: "Frases",
      vocabulary: "Vocabulario",
      no_sentences: "No hay frases disponibles",
      no_vocabulary: "No hay vocabulario disponible",
      back_to_courses: "← Volver a Cursos",
      create_account: "Crear cuenta",
      create_account_free: "Crear cuenta gratis",
      already_have_account: "Ya tengo cuenta",
      no_account_yet: "¿Aún no tienes cuenta?",
      congratulations: "¡Felicidades!",
      leveled_up: "¡Subiste al nivel {level}!",
      mark_complete: "Marcar como completado",
      already_completed: "Ya completado",
      progress: "Progreso",
      continue_learning: "Continúa aprendiendo",
      level: "Nivel",
    },
    fr: {
      cursos: "Cours",
      music: "Musique",
      game: "Jeu",
      profile: "Profil",
      plans: "Forfaits",
      login: "Connexion",
      logout: "Déconnexion",
      settings: "Paramètres",
      language: "Langue",
      theme: "Thème",
      about: "À propos",
      save: "Enregistrer",
      cancel: "Annuler",
      ok: "OK",
      error: "Erreur",
      success: "Succès",
      loading: "Chargement...",
      close: "Fermer",
      back: "Retour",
      app_title: "Allemand Facile Brésil",
      home: "Accueil",
      dialogs: "Dialogues",
      podcasts: "Podcasts",
      verbs: "Verbes",
      verb_conjugations: "Conjugaisons et exemples",
      essential_verbs: "Verbes Essentiels",
      music_title: "Musique",
      game_title: "Jeu",
      vocabulary_hunting: "Chasse au Vocabulaire",
      my_profile: "Mon profil",
      statistics: "Statistiques",
      total_xp: "XP total",
      current_level: "Niveau",
      daily_streak: "Série",
      completed: "Terminés",
      select_language: "Choisir la Langue",
      language_changed: "🌍 Langue changée !",
      change_language: "Changer de Langue",
      speed: "Vitesse",
      very_slow: "Très Lent",
      slow: "Lent",
      normal: "Normal",
      sentences: "Phrases",
      vocabulary: "Vocabulaire",
      no_sentences: "Aucune phrase disponible",
      no_vocabulary: "Aucun vocabulaire disponible",
      back_to_courses: "← Retour aux Cours",
      create_account: "Créer un compte",
      create_account_free: "Créer un compte gratuit",
      already_have_account: "J'ai déjà un compte",
      no_account_yet: "Vous n'avez pas encore de compte ?",
      congratulations: "Félicitations !",
      leveled_up: "Vous êtes passé au niveau {level} !",
      mark_complete: "Marquer comme terminé",
      already_completed: "Déjà terminé",
      progress: "Progrès",
      continue_learning: "Continuez à apprendre",
      level: "Niveau",
    },
    it: {
      cursos: "Corsi",
      music: "Musica",
      game: "Gioco",
      profile: "Profilo",
      plans: "Piani",
      login: "Accedi",
      logout: "Esci",
      settings: "Impostazioni",
      language: "Lingua",
      theme: "Tema",
      about: "Informazioni",
      save: "Salva",
      cancel: "Annulla",
      ok: "OK",
      error: "Errore",
      success: "Successo",
      loading: "Caricamento...",
      close: "Chiudi",
      back: "Indietro",
      app_title: "Tedesco Facile Brasile",
      home: "Home",
      dialogs: "Dialoghi",
      podcasts: "Podcast",
      verbs: "Verbi",
      verb_conjugations: "Coniugazioni ed esempi",
      essential_verbs: "Verbi Essenziali",
      music_title: "Musica",
      game_title: "Gioco",
      vocabulary_hunting: "Caccia al Vocabolario",
      my_profile: "Il mio profilo",
      statistics: "Statistiche",
      total_xp: "XP totale",
      current_level: "Livello",
      daily_streak: "Serie",
      completed: "Completati",
      select_language: "Seleziona Lingua",
      language_changed: "🌍 Lingua cambiata!",
      change_language: "Cambia Lingua",
      speed: "Velocità",
      very_slow: "Molto Lento",
      slow: "Lento",
      normal: "Normale",
      sentences: "Frasi",
      vocabulary: "Vocabolario",
      no_sentences: "Nessuna frase disponibile",
      no_vocabulary: "Nessun vocabolario disponibile",
      back_to_courses: "← Torna ai Corsi",
      create_account: "Crea account",
      create_account_free: "Crea account gratuito",
      already_have_account: "Ho già un account",
      no_account_yet: "Non hai ancora un account?",
      congratulations: "Congratulazioni!",
      leveled_up: "Sei salito al livello {level}!",
      mark_complete: "Segna come completato",
      already_completed: "Già completato",
      progress: "Progressi",
      continue_learning: "Continua a imparare",
      level: "Livello",
    },
  },

  // ── Obter tradução ──
  t(key, params = {}) {
    const lang = this._strings[this._current] || this._strings.pt;
    let text = lang[key];
    if (!text) {
      // Fallback para português
      text = this._strings.pt[key] || key;
    }
    // Substituir parâmetros {xp}, {level}, etc.
    Object.entries(params).forEach(([k, v]) => {
      text = text.replace(`{${k}}`, v);
    });
    return text;
  },

  // ── Atalho ──
  static(key) {
    return I18n.t(key);
  },
};

// Inicializa
I18n.init();
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => I18n.applyPageTranslations());
} else {
  I18n.applyPageTranslations();
}
