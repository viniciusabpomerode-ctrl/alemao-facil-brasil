export default async function geo(_request, context) {
  const country = context.geo?.country?.code?.toUpperCase() || null;

  return new Response(JSON.stringify({ country }), {
    status: 200,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store, max-age=0"
    }
  });
}

export const config = { path: "/api/geo" };
