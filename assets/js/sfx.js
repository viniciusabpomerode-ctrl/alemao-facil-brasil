/**
 * SFX — Sons de ambiente sintetizados (Web Audio API)
 * Zero arquivos, zero upload. Tudo gerado em tempo real.
 * 
 * Uso:
 *   SFX.cardFlip()   — transicao entre cards (pop suave)
 *   SFX.correct()    — acerto (ding melodioso)
 *   SFX.wrong()      — erro (thud suave)
 *   SFX.xpUp()       — XP subindo (whoosh crescente)
 *   SFX.click()      — clique generico
 *   SFX.toggle()     — ativa/desativa todos os sons
 */

var SFX = (function() {
  var ctx = null;
  var muted = localStorage.getItem('afb_sfx_muted') === '1';

  function getCtx() {
    if (!ctx) {
      try { ctx = new (window.AudioContext || window.webkitAudioContext)(); }
      catch(e) { return null; }
    }
    if (ctx.state === 'suspended') ctx.resume();
    return muted ? null : ctx;
  }

  function tone(freq, type, duration, vol, ramp) {
    var c = getCtx();
    if (!c) return;
    var t = c.currentTime;
    var osc = c.createOscillator();
    var gain = c.createGain();
    osc.type = type || 'sine';
    osc.frequency.setValueAtTime(freq, t);
    gain.gain.setValueAtTime(vol || .08, t);
    if (ramp) gain.gain.exponentialRampToValueAtTime(.001, t + duration);
    else gain.gain.setValueAtTime(.001, t + duration);
    osc.connect(gain);
    gain.connect(c.destination);
    osc.start(t);
    osc.stop(t + duration);
  }

  return {
    /** Ativa/desativa som */
    toggle: function() {
      muted = !muted;
      localStorage.setItem('afb_sfx_muted', muted ? '1' : '0');
      return !muted;
    },
    isMuted: function() { return muted; },

    /** Pop suave ao trocar card */
    cardFlip: function() {
      tone(800, 'sine', .08, .06, true);
      setTimeout(function() { tone(1000, 'sine', .06, .04, true); }, 30);
    },

    /** Ding melodioso - acerto */
    correct: function() {
      tone(880, 'sine', .12, .07, true);
      setTimeout(function() { tone(1100, 'sine', .1, .06, true); }, 60);
      setTimeout(function() { tone(1320, 'sine', .15, .05, true); }, 120);
    },

    /** Thud suave - erro */
    wrong: function() {
      tone(200, 'triangle', .15, .08, true);
      setTimeout(function() { tone(160, 'triangle', .18, .06, true); }, 50);
    },

    /** Whoosh crescente - XP */
    xpUp: function() {
      var c = getCtx();
      if (!c) return;
      var t = c.currentTime;
      var osc = c.createOscillator();
      var gain = c.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(400, t);
      osc.frequency.exponentialRampToValueAtTime(1200, t + .25);
      gain.gain.setValueAtTime(.02, t);
      gain.gain.linearRampToValueAtTime(.06, t + .15);
      gain.gain.exponentialRampToValueAtTime(.001, t + .35);
      osc.connect(gain);
      gain.connect(c.destination);
      osc.start(t);
      osc.stop(t + .35);
    },

    /** Clique generico */
    click: function() {
      tone(600, 'sine', .04, .04, true);
    },

    /** Som ambiente de fundo (opcional, bem baixinho) - nota longa de ambiente */
    ambientChime: function() {
      var c = getCtx();
      if (!c) return;
      var t = c.currentTime;
      var osc = c.createOscillator();
      var gain = c.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(528, t);
      gain.gain.setValueAtTime(.005, t);
      gain.gain.exponentialRampToValueAtTime(.001, t + 3);
      osc.connect(gain);
      gain.connect(c.destination);
      osc.start(t);
      osc.stop(t + 3);
    }
  };
})();
