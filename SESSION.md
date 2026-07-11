# Alemão Fácil Brasil — Sessão 2026-07-10

## ✅ Feito nesta sessão

### Infraestrutura
- [x] Git init + push GitHub (`viniciusabpomerode-ctrl/alemao-facil-brasil`)
- [x] GitHub Pages ativado
- [x] `package.json` criado
- [x] `.gitignore` configurado (exclui data/, audios/, .venv/)
- [x] Branch `v0/viniciusthereisalt-1538-fc1ee0d6` sincronizada

### Autenticação
- [x] Substituído localStorage fake por **Supabase Auth** (email/senha + Google OAuth)
- [x] `auth.js` reescrito com Supabase JS CDN
- [x] `login.html` atualizado com botão Google
- [x] `cadastro.html` atualizado
- [x] User ID do Supabase usado como chave para R2

### Cloud Sync
- [x] `saved_r2.js` — usa Supabase user ID (fallback localStorage)
- [x] `xp.js` — progresso/XP salva no localStorage + sincroniza R2 via Worker
- [x] Dados: local primeiro, fallback R2 automático (`fetcher()`)
- [x] Áudio: Supabase signed URL ∥ R2 público (paralelo, quem responder primeiro)

### Páginas Novas/Criadas
- [x] `app/profissoes.html` — 24 profissões, 4 categorias, 1.200 frases, filtros A1-C2
- [x] `app/pronuncia.html` — ouvir, gravar, salvar, revisar com filtros de tempo
- [x] `data/profissoes.json` — JSON com todas profissões e frases
- [x] `scripts/gerar_audio_profissoes.py` — gera 1.200 MP3s via InWorld, sobe R2

### Correções
- [x] `quiz.html` — dados do R2 (não local)
- [x] `simulado.html` — dados do R2
- [x] `escrita.html` — reescrito vanilla JS, R2 fallback, áudio paralelo
- [x] `pronuncia.html` — reescrito vanilla JS (sem async/await/quebras de sintaxe)
- [x] `auth.js` — corrigido caminhos absolutos para GitHub Pages (AFB_BASE)
- [x] `caderno.html` — filtros de tempo (Hoje/7d/30d/1ano) + date picker + tipos novos

### Dados
- [x] JSON `profissoes.json` no R2
- [x] 1.200 áudios MP3 de profissões no R2 (InWorld TTS)
- [x] Token InWorld atualizado em `gerar_audio_profissoes.py` e `gerar_audios_r2.py`
- [x] Dados `cursos/` copiados para ambiente de teste

---

## 📊 Status Atual

### Páginas Web (19)
| Página | Status |
|--------|--------|
| index.html | ✅ OK |
| dashboard.html | ✅ OK |
| cursos.html | ✅ OK |
| dialogo.html | ✅ OK |
| verbo.html | ✅ OK |
| musica.html | ✅ OK |
| musica-player.html | ✅ OK |
| escrita.html | ✅ Vanilla JS, R2 fallback |
| pronuncia.html | ✅ Gravação, save, revisão |
| jogo.html | ✅ OK |
| expressoes.html | ✅ OK |
| profissoes.html | ✅ NOVO |
| simulado.html | ✅ R2 |
| quiz.html | ✅ R2 |
| caderno.html | ✅ Filtros data |
| planos.html | ✅ OK |
| perfil.html | ✅ OK |
| login.html | ✅ Supabase + Google |
| cadastro.html | ✅ Supabase |

### Backend
| Serviço | Status |
|---------|--------|
| Supabase Auth | ✅ Ativo |
| R2 (dados JSON) | ✅ Público |
| R2 (áudios) | ✅ 1.200 prof + gírias |
| Supabase Storage (áudios) | ✅ Diálogos/Verbos |
| Worker (saved_items) | ⚠️ Local :8787 ok, Cloudflare não deployado |
| InWorld TTS | ⚠️ Sem créditos |

---

## 🚧 Pendente

### Alta prioridade
- [ ] Deploy Netlify (já tem `netlify.toml`, só conectar)
- [ ] Sistema de pagamento (Stripe/PIX)
- [ ] Corrigir InWorld TTS (sem créditos) ou migrar para Edge TTS gratuito
- [ ] Worker Cloudflare deploy (saved_items em produção)

### Média prioridade
- [ ] App Flutter — adaptar para usar R2 + Supabase Auth
- [ ] Progresso sincronizado web↔app (já está no R2)
- [ ] Página de planos/preços com Stripe
- [ ] Gravações da pronúncia sync com R2 (hoje só IndexedDB)

### Baixa prioridade
- [ ] Dark mode melhorado
- [ ] Notificações de streak/lembrete
- [ ] Mais músicas (A1-A2)
- [ ] Mais simulados Goethe
- [ ] Ampliar jogo vocabulário (150 → 1000+)

---

## 🔑 Acessos Rápidos

```
Local:        http://localhost:8081/app/dashboard.html
GitHub Pages: https://viniciusabpomerode-ctrl.github.io/alemao-facil-brasil/
GitHub Repo:  https://github.com/viniciusabpomerode-ctrl/alemao-facil-brasil
R2 Public:    https://pub-d856fe7eb96043c3a93a4d72cd8317cc.r2.dev
Supabase:     https://zqrdpmrwnprtelgloawb.supabase.co
```

### Comando para rodar local
```powershell
cd C:\Users\vini\Documents\alemao-facil-brasil-ambiente-de-estudo
python -m http.server 8081
```

### Comando para gerar áudios
```powershell
cd C:\Users\vini\Documents\Vinicin\alemaofacilbrasil
python scripts/gerar_audio_profissoes.py --workers 10
```

### Comando para commitar
```powershell
cd C:\Users\vini\Documents\Vinicin\alemaofacilbrasil
git add -A
git commit -m "mensagem"
git push origin main
git push origin main:v0/viniciusthereisalt-1538-fc1ee0d6
```

---

## 📝 Notas

- **JS Vanilla**: Escrita e Pronúncia foram reescritos em JS puro (var, function, .then()). 
  Não usar async/await, const/let, arrow functions nesses arquivos — quebram com erros de sintaxe.
- **Braces balanceados**: Sempre verificar `{` = `}` antes de commitar.
- **R2 403**: O R2 público às vezes retorna 403. O `fetcher()` tenta local primeiro.
- **Servidor**: O Python http.server faz cache agressivo (304). Sempre matar e reiniciar após editar arquivos.
- **Token InWorld**: Está no `gerar_audio_profissoes.py`. Se expirar, renovar.
