import { Hono } from 'hono'
import {PrismaClient} from '@prisma/client/edge'
import {withAccelerate} from '@prisma/extension-accelerate'
import {sign ,verify ,decode} from 'hono/jwt'
import { cors } from 'hono/cors'
import {userRouter} from './routers/user'
import {blogRouter} from './routers/blogs'

const app = new Hono<{
  Bindings:{
    ACCELERATE_URL:string,
    JWT_SECRET:string
  }
}>()

app.use('*', cors())

app.route('/api/v1/user',userRouter)
app.route('/api/v1/blog',blogRouter)

export default app;