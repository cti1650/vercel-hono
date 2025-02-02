import { Hono } from 'hono'

export const app = new Hono()

app.get('/health', (c) => {
  return c.text('OK')
})

const api = new Hono()

api.get('/', (c) => {
  return c.json({ message: 'Hello Hono!' })
})

app.route('/api', api)