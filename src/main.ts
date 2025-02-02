import { Hono } from 'hono'

export const app = new Hono().basePath('/api')

app.get('/', (c) => {
  return c.json({ message: 'Hello Hono!' })
})

app.get('/health', (ctx) => {
  return ctx.text('OK')
})