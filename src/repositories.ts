import { Repository } from "typeorm";
import { AppDataSource } from "./data-source";
import { Movie } from "./entities";

export const movieRepo: Repository<Movie> = AppDataSource.getRepository(Movie)