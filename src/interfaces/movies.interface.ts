import {
  movieReadSchema,
  movieRegisterSchema,
  movieSchema,
  movieUpdateSchema,
} from "../schemas/movies.schema";
import { z } from "zod";

export type IMovie = z.infer<typeof movieSchema>;

export type IMovieRegister = z.infer<typeof movieRegisterSchema>;

export type IMovieRead = z.infer<typeof movieReadSchema>;

export type IMovieUpdate = z.infer<typeof movieUpdateSchema>;
