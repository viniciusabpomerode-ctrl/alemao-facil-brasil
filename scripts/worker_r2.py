"""Proxy R2 para saved items (mesmo que o Worker, mas local)"""
import json, re, http.server, boto3, os
from urllib.parse import urlparse

R2_KEY = "68cad4a952bf7cd5294397af617b0972"
R2_SEC = "425fc72d75bc3f671b40590d6e8bd0055cef618347bdf786d6786c19df310a05"
R2_ID = "cfd7d83a35bf48e8b4b58c97952bac49"
BUCKET = "edicao"
PORT = 8787

s3 = boto3.client("s3", endpoint_url=f"https://{R2_ID}.r2.cloudflarestorage.com",
                   aws_access_key_id=R2_KEY, aws_secret_access_key=R2_SEC, region_name="auto")

class Handler(http.server.BaseHTTPRequestHandler):
    def cors(self):
        self.send_response(204)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, PUT, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def do_OPTIONS(self):
        self.cors()

    def reply(self, code, body, ct="application/json"):
        self.send_response(code)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Content-Type", ct)
        self.end_headers()
        self.wfile.write(body.encode() if isinstance(body, str) else body)

    def do_GET(self):
        m = re.match(r"^/saved/(.+)$", self.path)
        if not m:
            return self.reply(404, '{"error":"not found"}')
        uid = m.group(1)
        if not re.match(r"^[a-zA-Z0-9_\-@.]+$", uid):
            return self.reply(400, '{"error":"invalid"}')
        try:
            obj = s3.get_object(Bucket=BUCKET, Key=f"saved_items/{uid}.json")
            self.reply(200, obj["Body"].read())
        except s3.exceptions.NoSuchKey:
            self.reply(200, "[]")
        except Exception as e:
            self.reply(500, json.dumps({"error": str(e)}))

    def do_PUT(self):
        m = re.match(r"^/saved/(.+)$", self.path)
        if not m:
            return self.reply(404, '{"error":"not found"}')
        uid = m.group(1)
        if not re.match(r"^[a-zA-Z0-9_\-@.]+$", uid):
            return self.reply(400, '{"error":"invalid"}')
        try:
            length = int(self.headers.get("Content-Length", 0))
            body = self.rfile.read(length)
            json.loads(body)  # valida
            s3.put_object(Bucket=BUCKET, Key=f"saved_items/{uid}.json", Body=body, ContentType="application/json")
            self.reply(200, '{"ok":true}')
        except Exception as e:
            self.reply(500, json.dumps({"error": str(e)}))

    def log_message(self, *a): pass  # quiet

print(f"Worker R2 rodando em http://localhost:{PORT}/saved/...")
http.server.HTTPServer(("", PORT), Handler).serve_forever()
