import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from 'hono/jwt'
import {blogCreate,blogUpdate} from "medium-common-yesh"

export const blogRouter = new Hono<{
  Bindings: {
    ACCELERATE_URL: string
    JWT_SECRET: string
  }

  Variables: {
    userId: string
  }
}>()


blogRouter.get('/bulk', async (c) => {

  const prisma = new PrismaClient({
    accelerateUrl: c.env.ACCELERATE_URL
  }).$extends(withAccelerate())

  try {

    const blogs = await prisma.posts.findMany({
      select:{
        title:true,
        description:true,
        id:true,
        author:{
          select:{
            name:true
          }
        }
      }
    })

    return c.json({
      blogs
    })

  } catch (e) {

    return c.json({
      message: "Something went wrong"
    }, 500)
  }
})

// =======================
// GET SINGLE BLOG
// =======================

blogRouter.get('/:id', async (c) => {

  const prisma = new PrismaClient({
    accelerateUrl: c.env.ACCELERATE_URL
  }).$extends(withAccelerate())

  const id = c.req.param('id')

  try {

    const blog = await prisma.posts.findFirst({

      where: {
        id: id
      },

      select: {
        id:true,
        title:true,
        description:true,
        author:{
           select:{
            name:true
           }
        }
      }

    })

    if (!blog) {

      return c.json({
        message: "Blog not found"
      }, 404)
    }

    return c.json({
      blog
    })

  } catch (e) {

    return c.json({
      message: "Invalid id"
    }, 400)
  }
})


// =======================
// MIDDLEWARE
// =======================

blogRouter.use('/*', async (c, next) => {

  try {

    const token = c.req.header('Authorization') || ""
    const jwt = token.split(" ")[1]

    if (!jwt) {

      return c.json({
        message: "token missing"
      }, 401)
    }
    const user = await verify(jwt, c.env.JWT_SECRET,"HS256")

    if (user) {
      c.set("userId", user.id + "")
      await next()
    }

  } catch (e) {
    return c.json({
      message: "Invalid token"
    }, 401)
  }
})

// =======================
// CREATE BLOG
// =======================

blogRouter.post('/', async (c) => {
  const prisma = new PrismaClient({
    accelerateUrl: c.env.ACCELERATE_URL
  }).$extends(withAccelerate())

  const body = await c.req.json()
  const blogData=blogCreate.safeParse(body)
  console.log(body);
  if(!blogData.success){
    return c.json({
      message:"invalid input"
    })
  }
  const authorId = c.get("userId")

  try {

    const blog = await prisma.posts.create({

      data: {
        title: body.title,
        description: body.description,
        check: body.check,
        authorId: authorId
      }

    })

    return c.json({
      message: "Blog created",
      id: blog.id
    })

  } catch (e) {

    return c.json({
      message: "Invalid inputs"
    }, 400)
  }
})

// =======================
// UPDATE BLOG
// =======================

blogRouter.put('/', async (c) => {

  const prisma = new PrismaClient({
    accelerateUrl: c.env.ACCELERATE_URL
  }).$extends(withAccelerate())

  const body = await c.req.json()
  const blogData=blogUpdate.safeParse(body);
  if(!blogData.success){
    return c.json({
      message:"invalid input"
    })
  }
  const userId = c.get("userId")

  try {

    const blog = await prisma.posts.update({

      where: {
        id: body.id
      },

      data: {
        title: body.title,
        description: body.description,
        check:body.check
      }

    })

    return c.json({
      message: "Blog updated",
      blog
    })

  } catch (e) {

    return c.json({
      message: "Update failed"
    }, 400)
  }
})

// =======================
// GET ALL BLOGS
// =======================


// =======================
// DELETE BLOG
// =======================

blogRouter.delete('/:id', async (c) => {

  const prisma = new PrismaClient({
    accelerateUrl: c.env.ACCELERATE_URL
  }).$extends(withAccelerate())

  const id = c.req.param('id')

  try {

    await prisma.posts.delete({

      where: {
        id: id
      }

    })

    return c.json({
      message: "Blog deleted"
    })

  } catch (e) {

    return c.json({
      message: "Delete failed"
    }, 400)
  }
})