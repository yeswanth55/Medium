import {z} from 'zod';

export const userSignup=z.object({
    email:z.email(),
    password:z.string().min(6),
    name:z.string()
})

export const userSignin=z.object({
    email:z.email(),
    password:z.string().min(6)
})

export const blogCreate=z.object({
    title:z.string(),
    description:z.string(),
    check:z.boolean()
})

export const blogUpdate=z.object({
    title:z.string(),
    description:z.string(),
    check:z.boolean(),
    id:z.number()
})

export type UserSignup=z.infer<typeof userSignup>
export type UserSingin=z.infer<typeof userSignin>
export type BlogCreate=z.infer<typeof blogCreate>
export type BlogUpdate=z.infer<typeof blogUpdate>