import fs from "node:fs";
import path from "node:path";

// Lets server components/pages reference imagery in /public that may not be
// uploaded yet (e.g. photography still pending from the client) without ever
// rendering a broken <Image>. Pass a path relative to /public, e.g.
// "/images/hero-port.jpg". Server-only — do not import from "use client" files.
export function hasPublicImage(relPath: string | undefined | null): relPath is string {
  if (!relPath) return false;
  try {
    return fs.existsSync(path.join(process.cwd(), "public", relPath.replace(/^\//, "")));
  } catch {
    return false;
  }
}
