import { z } from 'zod';
export const userSignup = z.object({
    email: z.email(),
    password: z.string().min(6),
    name: z.string()
});
export const userSignin = z.object({
    email: z.email(),
    password: z.string().min(6)
});
export const blogCreate = z.object({
    title: z.string(),
    description: z.string(),
    check: z.boolean()
});
export const blogUpdate = z.object({
    title: z.string(),
    description: z.string(),
    check: z.boolean(),
    id: z.number()
});
//# sourceMappingURL=index.js.map