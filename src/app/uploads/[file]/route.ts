import { readUpload } from "@/lib/uploads";

/** Serves admin-uploaded product images from data/uploads (public/ is fixed at build time). */
export async function GET(_request: Request, { params }: RouteContext<"/uploads/[file]">) {
  const { file } = await params;
  const upload = await readUpload(file);
  if (!upload) return new Response("Not found", { status: 404 });

  return new Response(new Uint8Array(upload.bytes), {
    headers: {
      "Content-Type": upload.type,
      // Names are unique per upload, so the file at a URL never changes.
      "Cache-Control": "public, max-age=31536000, immutable",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
