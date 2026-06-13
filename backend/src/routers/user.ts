import {Hono} from 'hono'
import {PrismaClient} from '@prisma/client/edge'
import {withAccelerate} from '@prisma/extension-accelerate'
import {sign} from 'hono/jwt'
import {userSignup,userSignin} from 'medium-common-yesh'
export const userRouter=new Hono<{
    Bindings:{
        ACCELERATE_URL:string,
        JWT_SECRET:string
    }
}>()

userRouter.post('/signup',async(c)=>{
    const prisma=new PrismaClient({
        accelerateUrl:c.env.ACCELERATE_URL
    }).$extends(withAccelerate())
    const body=await c.req.json()
    const userData=userSignup.safeParse(body);
    if(!userData.success){
        return c.json({
            message:"invalid values has been entered"
        })
    }
    try{
        await prisma.user.create({
            data:{
                email:body.email,
                password:body.password,
                name:body.name
            }
        })
        return c.text('created successfully')
    }catch(e){
        return c.text('invalid values')
    }
})

userRouter.post('/signin', async (c) => {

    const prisma = new PrismaClient({
        accelerateUrl: c.env.ACCELERATE_URL
    }).$extends(withAccelerate())

    const body = await c.req.json()
    const userData=userSignin.safeParse(body)
    if(!userData.success){
        return c.json({
            message:"invalid values entered"
        })
    }

    const verify = await prisma.user.findFirst({

        where: {
            email: body.email,
            password: body.password
        }
    })

    if (!verify) {

        return c.json({
            message: "invalid credentials"
        }, 401)
    }

    const token = await sign(

        {
            id: verify.id,
            email: verify.email
        },

        c.env.JWT_SECRET
    )

    return c.json({

        message: "login successful",

        token
    })
})
