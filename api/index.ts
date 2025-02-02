import { handle } from 'hono/vercel'
import app from '../src/main'
import { serveStatic } from 'hono/serve-static.module'

export const config = {
  runtime: 'edge'
}

app.use("/static/*", serveStatic({ root: "./" }));

export default handle(app)
