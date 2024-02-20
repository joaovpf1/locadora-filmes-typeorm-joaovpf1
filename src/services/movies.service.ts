import { movieRepo } from "../repositories";
import {
  IMovie,
  IMovieRegister,
  IMovieUpdate,
} from "../interfaces/movies.interface";
import { iPaginationParams } from "../__tests__/interfaces";

export const registerMovieService = async (
  data: IMovieRegister
): Promise<IMovie> => {
  const dataMovie: IMovie = movieRepo.create(data);
  const newMovie: IMovie = await movieRepo.save(dataMovie);
  return newMovie;
};

export const readMoviesService = async ({
  nextPage,
  page,
  perPage,
  prevPage,
  order,
  sort,
}: iPaginationParams): Promise<any> => {
  const [movie, count] = await movieRepo.findAndCount({
    order: { [sort]: order },
    skip: page,
    take: perPage,
  });

  return {
    prevPage: page <= 1 ? null : prevPage,
    nextPage: count - page <= perPage ? null : nextPage,
    data: movie,
    count,
  };
};

export const updateMovieService = async (
  data: IMovieUpdate,
  movie: IMovie
): Promise<IMovie> => {
  const dataMovie: IMovieUpdate = movieRepo.create(data);
  return await movieRepo.save({ ...movie, ...dataMovie });
};

export const deleteMovieService = async (movie: IMovie): Promise<void> => {
  await movieRepo.remove(movie);
};
