import { z } from "zod";

export const createPlayerDtoSchema = z.object({
    name: z.string().min(1),
    birth: z.string().min(1).refine(val => !isNaN(Date.parse(val)), {
        message: 'Invalid date of birth.'
    }),
    gender: z.enum(['M', 'F']),
    height: z.number().positive({message: 'Invalid height.'}).min(1)
})

export type CreatePlayerDTO = z.infer<typeof createPlayerDtoSchema>