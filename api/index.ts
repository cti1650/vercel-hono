import { handle } from 'hono/vercel'
import app from '../src/main'
import { serveStatic } from '@hono/node-server/serve-static';

export const config = {
  runtime: 'nodejs'
}

app.use("/static/*", serveStatic({ root: "./" }));
app.use("/", serveStatic({ path: "static/index.html" }));

export default handle(app)
