import "server-only";

import { mkdir, readFile, unlink, writeFile } from "node:fs/promises";
import path from "node:path";

import { DATA_DIR } from "@/lib/catalog";

export const UPLOAD_DIR = path.join(DATA_DIR, "uploads");
export const UPLOAD_URL_PREFIX = "/uploads/";
export const MAX_UPLOAD_BYTES = 5 * 1024 * 1024;

/** Generated names only: slug, timestamp, known extension. */
export const UPLOAD_NAME = /^[a-z0-9-]+\.(png|jpg|webp)$/;

export const UPLOAD_TYPES = { png: "image/png", jpg: "image/jpeg", webp: "image/webp" } as const;
type Ext = keyof typeof UPLOAD_TYPES;

/** Detect the format from the file's magic bytes rather than trusting the browser. */
function sniff(bytes: Buffer): Ext | undefined {
  if (bytes.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) return "png";
  if (bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) return "jpg";
  if (bytes.subarray(0, 4).toString("ascii") === "RIFF" && bytes.subarray(8, 12).toString("ascii") === "WEBP") return "webp";
  return undefined;
}

export async function saveProductImage(slug: string, file: File): Promise<{ url: string } | { error: string }> {
  if (file.size > MAX_UPLOAD_BYTES) return { error: "Image must be 5 MB or smaller." };
  const bytes = Buffer.from(await file.arrayBuffer());
  const ext = sniff(bytes);
  if (!ext || file.type !== UPLOAD_TYPES[ext]) return { error: "Image must be a PNG, JPG or WebP file." };

  const name = `${slug}-${Date.now()}.${ext}`;
  await mkdir(UPLOAD_DIR, { recursive: true });
  await writeFile(path.join(UPLOAD_DIR, name), bytes);
  return { url: `${UPLOAD_URL_PREFIX}${name}` };
}

/** Removes a previously uploaded image. Bundled /images/... files are never touched. */
export async function deleteUploadedImage(url: string | undefined) {
  if (!url?.startsWith(UPLOAD_URL_PREFIX)) return;
  const name = url.slice(UPLOAD_URL_PREFIX.length);
  if (!UPLOAD_NAME.test(name)) return;
  await unlink(path.join(UPLOAD_DIR, name)).catch(() => undefined);
}

export async function readUpload(name: string) {
  if (!UPLOAD_NAME.test(name)) return undefined;
  try {
    const ext = name.slice(name.lastIndexOf(".") + 1) as Ext;
    return { bytes: await readFile(path.join(UPLOAD_DIR, name)), type: UPLOAD_TYPES[ext] };
  } catch {
    return undefined;
  }
}
