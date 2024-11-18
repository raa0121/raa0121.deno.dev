import { serveDir, serveFile } from "jsr:@std/http/file-server";

/**
 * https://docs.deno.com/examples/http-server-files/
 */
Deno.serve((req: Request) => serveDir(req, { fsRoot: "_site" }));
