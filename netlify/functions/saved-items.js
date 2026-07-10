// Netlify Function — Proxy R2 para saved_items (igual ao worker Python local)
// Deploy automático com Netlify

const AWS = require("aws-sdk");

const s3 = new AWS.S3({
  endpoint: `https://${process.env.R2_ID}.r2.cloudflarestorage.com`,
  accessKeyId: process.env.R2_KEY,
  secretAccessKey: process.env.R2_SECRET,
  region: "auto",
  signatureVersion: "v4",
});

exports.handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, PUT, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers };
  }

  // Rota: /.netlify/functions/saved-items?user=email
  const userId = event.queryStringParameters?.user;
  if (!userId || !/^[a-zA-Z0-9_\-@.]+$/.test(userId)) {
    return { statusCode: 400, headers, body: '{"error":"invalid user"}' };
  }

  const key = `saved_items/${userId}.json`;

  if (event.httpMethod === "GET") {
    try {
      const obj = await s3.getObject({ Bucket: "edicao", Key: key }).promise();
      return { statusCode: 200, headers, body: obj.Body.toString() };
    } catch (e) {
      if (e.code === "NoSuchKey") return { statusCode: 200, headers, body: "[]" };
      return { statusCode: 500, headers, body: JSON.stringify({ error: e.message }) };
    }
  }

  if (event.httpMethod === "PUT") {
    try {
      JSON.parse(event.body);
      await s3.putObject({
        Bucket: "edicao",
        Key: key,
        Body: event.body,
        ContentType: "application/json",
      }).promise();
      return { statusCode: 200, headers, body: '{"ok":true}' };
    } catch (e) {
      return { statusCode: 500, headers, body: JSON.stringify({ error: e.message }) };
    }
  }

  return { statusCode: 405, headers, body: '{"error":"method not allowed"}' };
};
