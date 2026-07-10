# Alemão Fácil Brasil

Site (não precisa de Node.js, servidor, nem instalar nada além de um navegador
pra usar) do curso de alemão, com cadastro, login, XP/níveis, diálogos,
podcasts, verbos, músicas e um jogo de vocabulário — construído a partir do
conteúdo real do app Flutter (mesmo banco Supabase).

## Como está organizado

```
index.html          → página inicial (landing page)
app/                 → todas as telas depois do login (cursos, música, jogo, perfil...)
assets/              → CSS, JS e imagens
data/                → conteúdo do curso em JSON (gerado a partir do Supabase)
Cursoweb/            → scripts que geram o conteúdo em data/ (ver Cursoweb/README.md)
netlify.toml         → configuração de publicação no Netlify
```

## Cadastro e login (por enquanto)

Hoje o cadastro/login funciona **100% no navegador** (localStorage) — cada
pessoa que se cadastra fica salva só naquele navegador/aparelho. É um estágio
inicial, de propósito, pra já ter o site funcionando sem precisar configurar
nada. Quando você quiser deixar "de verdade" (conta acessível de qualquer
aparelho), trocamos para o Supabase Auth — o mesmo backend que o app já usa —
sem precisar mudar nada nas telas.

## Como ver o site rodando no seu computador

Você precisa só do Python (que você já tem instalado). Abra um terminal
dentro da pasta `alemaofacilbrasil` e rode:

```
python -m http.server 8090
```

Depois abra `http://localhost:8090` no navegador.

## Como publicar no Netlify (grátis)

1. Crie uma conta em [netlify.com](https://www.netlify.com) (pode ser com o
   e-mail ou GitHub).
2. Na área de "Sites", arraste a pasta `alemaofacilbrasil` inteira pro
   Netlify (opção "Deploy manually" / arrastar e soltar) — não precisa de
   comando nenhum.
3. Pronto, o Netlify te dá um link tipo `nome-aleatorio.netlify.app`. Depois
   dá pra configurar um domínio próprio (tipo alemaofacilbrasil.com.br) nas
   configurações do site lá no Netlify.

Sempre que quiser atualizar o conteúdo do curso (mais diálogos, verbos etc.),
é só repetir o passo 2 arrastando a pasta atualizada de novo.

## Próximos passos (quando quiser)

- **Assinatura/pagamento**: dá pra usar Stripe (mais código, mais controle)
  ou Yampi (checkout pronto, mais simples de configurar, comum no Brasil).
  Nenhum dos dois está plugado ainda — a página `/app/planos.html` já tem o
  layout pronto esperando isso.
- **Login "de verdade"**: trocar o `assets/js/auth.js` local por chamadas ao
  Supabase Auth, pra funcionar em qualquer aparelho.
