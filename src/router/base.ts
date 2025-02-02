import { Hono } from 'hono'
import healthApp from './health'
import robotsApp from './robots'

const app = new Hono()

app.route('/', healthApp)
app.route('/', robotsApp)

export default app