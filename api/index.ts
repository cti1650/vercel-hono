import { handle } from '@hono/node-server/vercel'
import app from '../src/main'

export const config = {
  runtime: 'nodejs'
}

export default handle(app)
