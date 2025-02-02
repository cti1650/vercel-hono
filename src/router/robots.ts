import { Hono } from 'hono'

const app = new Hono()

app.get('/robots.txt', (c) => {
  c.header('Content-Type', 'text/plain')
  return c.text('User-agent: *\nDisallow: /')
})

export default app