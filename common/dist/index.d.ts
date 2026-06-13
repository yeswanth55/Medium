import { z } from 'zod';
export declare const userSignup: z.ZodObject<{
    email: z.ZodEmail;
    password: z.ZodString;
    name: z.ZodString;
}, z.core.$strip>;
export declare const userSignin: z.ZodObject<{
    email: z.ZodEmail;
    password: z.ZodString;
}, z.core.$strip>;
export declare const blogCreate: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodString;
    check: z.ZodBoolean;
}, z.core.$strip>;
export declare const blogUpdate: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodString;
    check: z.ZodBoolean;
    id: z.ZodNumber;
}, z.core.$strip>;
export type UserSignup = z.infer<typeof userSignup>;
export type UserSingin = z.infer<typeof userSignin>;
export type BlogCreate = z.infer<typeof blogCreate>;
export type BlogUpdate = z.infer<typeof blogUpdate>;
//# sourceMappingURL=index.d.ts.map