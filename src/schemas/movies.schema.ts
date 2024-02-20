import { z } from "zod";

export const movieSchema = z.object({
  id: z.number().positive().int(),
  name: z.string().max(50),
  description: z.string().optional().nullable(),
  duration: z.number().positive().int(),
  price: z.number().positive().int(),
});

export const movieRegisterSchema = movieSchema.omit({ id: true });

export const movieReadSchema = movieSchema.array();

export const movieUpdateSchema = movieRegisterSchema.partial();
