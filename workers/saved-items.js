// Cloudflare Worker — Proxy R2 para itens salvos (caderno)
// Usa o MESMO bucket "edicao", pasta saved_items/
//
// Rotas:
//   GET  /saved/:userId  → lê saved_items/:userId.json
//   PUT  /saved/:userId  → salva saved_items/:userId.json
//   CORS habilitado

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, PUT, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    const match = url.pathname.match(/^\/saved\/(.+)$/);
    if (!match) {
      return new Response(JSON.stringify({ error: "Not found" }), {
        status: 404,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const userId = match[1];
    if (!/^[a-zA-Z0-9_\-@.]+$/.test(userId)) {
      return new Response(JSON.stringify({ error: "Invalid user ID" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const key = `saved_items/${userId}.json`;
    const bucket = env.EDICAO; // mesmo bucket "edicao"

    if (request.method === "GET") {
      try {
        const obj = await bucket.get(key);
        if (!obj) {
          return new Response(JSON.stringify([]), {
            status: 200,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          });
        }
        const data = await obj.text();
        return new Response(data, {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json", "Cache-Control": "no-cache" },
        });
      } catch (err) {
        return new Response(JSON.stringify({ error: "Read failed" }), {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
    }

    if (request.method === "PUT") {
      try {
        const body = await request.text();
        JSON.parse(body); // valida
        await bucket.put(key, body, {
          httpMetadata: { contentType: "application/json" },
        });
        return new Response(JSON.stringify({ ok: true }), {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      } catch (err) {
        return new Response(JSON.stringify({ error: "Write failed" }), {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
    }

    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  },
};
