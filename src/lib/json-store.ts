import "server-only";

import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";

/** Server-side data files (catalog, orders, uploads). Persisted on the host's disk. */
export const DATA_DIR = path.join(process.cwd(), "data");

/**
 * A JSON file on disk with atomic writes (temp file + rename) and a write queue,
 * so concurrent mutations never interleave or leave a half-written file.
 */
export function jsonStore<T>(fileName: string, initial: () => T) {
  const file = path.join(DATA_DIR, fileName);
  let queue: Promise<unknown> = Promise.resolve();

  async function write(data: T) {
    await mkdir(DATA_DIR, { recursive: true });
    const tmp = `${file}.${process.pid}.${Date.now()}.tmp`;
    await writeFile(tmp, `${JSON.stringify(data, null, 2)}\n`, "utf8");
    await rename(tmp, file);
  }

  async function read(): Promise<T> {
    try {
      return JSON.parse(await readFile(file, "utf8")) as T;
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code !== "ENOENT") throw error;
      const data = initial();
      await write(data);
      return data;
    }
  }

  /** Read-modify-write, one mutation at a time. */
  function mutate<R>(change: (data: T) => Promise<{ data: T; result: R }>): Promise<R> {
    const run = queue.then(async () => {
      const { data, result } = await change(await read());
      await write(data);
      return result;
    });
    queue = run.catch(() => undefined);
    return run;
  }

  return { read, mutate };
}
