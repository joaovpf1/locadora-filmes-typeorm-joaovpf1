import { Request, Response } from "express";
import {
  deleteMovieService,
  readMoviesService,
  registerMovieService,
  updateMovieService,
} from "../services/movies.service";
import { IMovie, IMovieRead } from "../interfaces/movies.interface";

export const registerMovieController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const movie: IMovie = await registerMovieService(req.body);
  return res.status(201).json(movie);
};

export const readMoviesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const movie: IMovieRead = await readMoviesService(res.locals.pagination);
  return res.status(200).json(movie);
};

export const updateMovieController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { movie } = res.locals;
  const updateMovie: IMovie = await updateMovieService(req.body, movie);
  return res.status(200).json(updateMovie);
};

export const deleteMovieController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  await deleteMovieService(res.locals.movie);

  return res.status(204).json();
};
