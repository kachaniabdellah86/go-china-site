const encoder = new TextEncoder();
const sessionTtlSeconds = 60 * 60 * 24 * 7;

function getAdminSecret() {
  return process.env.ADMIN_SESSION_SECRET || process.env.ADMIN_PASSWORD || "";
}

function bytesToBase64Url(bytes: Uint8Array) {
  let binary = "";

  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }

  return btoa(binary)
    .replaceAll("+", "-")
    .replaceAll("/", "_")
    .replaceAll("=", "");
}

function constantTimeEqual(a: string, b: string) {
  if (a.length !== b.length) {
    return false;
  }

  let result = 0;

  for (let index = 0; index < a.length; index += 1) {
    result |= a.charCodeAt(index) ^ b.charCodeAt(index);
  }

  return result === 0;
}

async function sign(value: string) {
  const secret = getAdminSecret();

  if (!secret) {
    return "";
  }

  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(value));

  return bytesToBase64Url(new Uint8Array(signature));
}

async function sha256(value: string) {
  const digest = await crypto.subtle.digest("SHA-256", encoder.encode(value));
  return bytesToBase64Url(new Uint8Array(digest));
}

export async function verifyAdminPassword(password: string) {
  const expectedPassword = process.env.ADMIN_PASSWORD;

  if (!expectedPassword) {
    return false;
  }

  const [actualHash, expectedHash] = await Promise.all([
    sha256(password),
    sha256(expectedPassword),
  ]);

  return constantTimeEqual(actualHash, expectedHash);
}

export async function createAdminSessionToken() {
  const issuedAt = Math.floor(Date.now() / 1000).toString();
  const signature = await sign(issuedAt);

  if (!signature) {
    return "";
  }

  return `${issuedAt}.${signature}`;
}

export async function verifyAdminSessionToken(token?: string) {
  if (!token) {
    return false;
  }

  const [issuedAtRaw, signature] = token.split(".");
  const issuedAt = Number(issuedAtRaw);
  const now = Math.floor(Date.now() / 1000);

  if (!Number.isFinite(issuedAt) || !signature) {
    return false;
  }

  if (issuedAt > now + 60 || now - issuedAt > sessionTtlSeconds) {
    return false;
  }

  const expectedSignature = await sign(issuedAtRaw);

  return constantTimeEqual(signature, expectedSignature);
}
