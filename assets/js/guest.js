// ============================================================
// Modo visitante — sem login a pessoa navega pelas paginas reais
// vendo os primeiros AFB_FREE_LIMIT itens de cada categoria; o
// resto aparece BLOQUEADO (pra mostrar o tamanho do conteudo).
// Quando o auth do Supabase confirmar um usuario logado, o
// bloqueio some sozinho (Guest.check resolve false).
// ============================================================

var AFB_FREE_LIMIT = 20;

var Guest = {
  // Resolve true se a pessoa esta navegando sem conta
  check: function () {
    if (window.Auth && Auth._ready) {
      return Auth._ready().then(function () {
        return !Auth.currentUser();
      });
    }
    return Promise.resolve(true);
  },

  // Progress seguro: visitante nao tem progresso salvo
  safeProgress: function () {
    try {
      if (window.Progress && Progress.load) return Progress.load();
    } catch (e) {}
    return { xp: 0, completed: [], streak: 0 };
  },

  // Card bloqueado para grades (mantem titulo visivel = vende o volume)
  lockedCard: function (title, subtitle) {
    return '<a class="card card-sm locked-item" href="planos.html">' +
      '<div class="flex-between"><b>' + title + '</b><span class="lock-pill">🔒</span></div>' +
      (subtitle ? '<p class="muted" style="font-size:.82rem; margin:6px 0 0;">' + subtitle + '</p>' : '') +
      '</a>';
  },

  // Linha bloqueada para listas
  lockedRow: function (title, subtitle) {
    return '<a class="sentence-row locked-item" href="planos.html" style="text-decoration:none;">' +
      '<div><div class="sentence-de">' + title + '</div>' +
      (subtitle ? '<div class="sentence-pt">' + subtitle + '</div>' : '') + '</div>' +
      '<span class="lock-pill">🔒</span></a>';
  },

  // Banner de conversao no fim das listas
  banner: function (lockedCount, label) {
    return '<div class="sample-lock" style="margin-top:26px;">' +
      '<h3 style="margin:0 0 6px; font-weight:500;">🔒 Mais ' + Number(lockedCount).toLocaleString("pt-BR") + ' ' + label + ' esperando por você</h3>' +
      '<p class="muted" style="margin:0 0 18px; font-size:.88rem;">Assine o Premium e libere a biblioteca completa — mais de 63.000 itens do A1 ao C2.</p>' +
      '<div style="display:flex; gap:10px; justify-content:center; flex-wrap:wrap;">' +
      '<a class="btn btn-primary" href="planos.html">Ver planos</a>' +
      '<a class="btn btn-outline" href="cadastro.html">Criar conta grátis</a>' +
      '</div></div>';
  },
};
