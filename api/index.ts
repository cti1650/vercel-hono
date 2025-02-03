import { handle } from '@hono/node-server/vercel'
import app from '../src/main'

export default handle(app)
