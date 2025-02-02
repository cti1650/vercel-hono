import { serve } from "@hono/node-server";
import app from "./main";
import { serveStatic } from '@hono/node-server/serve-static'

const port = process.env.PORT || 3000;

const main = async () => {
  console.log(`Server is running on http://localhost:${port}`)
  app.use("/static/*", serveStatic({ root: "./" }));
  serve({
    fetch: app.fetch,
    port: Number(port),
  })
};

main().catch(console.error);