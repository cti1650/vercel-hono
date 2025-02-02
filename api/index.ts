import { Hono } from 'hono'
import { serve } from "@hono/node-server";
import { handle } from 'hono/vercel'

export const config = {
  runtime: 'edge'
}

const app = new Hono().basePath('/api')

app.get('/', (c) => {
  return c.json({ message: 'Hello Hono!' })
})

const port = process.env.PORT || 3000;

const main = async () => {
  console.log(`Server is running on port ${port}`);
  serve({
    fetch: app.fetch,
    port: Number(port),
  });
};

main().catch(console.error);

export default handle(app)
