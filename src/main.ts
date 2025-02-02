import { Hono } from 'hono'

export const config = {
  runtime: 'edge'
}

export const app = new Hono().basePath('/api')

app.get('/', (c) => {
  return c.json({ message: 'Hello Hono!' })
})