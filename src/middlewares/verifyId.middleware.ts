import { NextFunction, Request, Response } from "express";
import AppError from "../errors/AppErrors";
import { movieRepo } from "../repositories";

export const verifyId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const movieId = Number(req.params.id);
  const movie = await movieRepo.findOneBy({ id: movieId });
  if (!movie) {
    throw new AppError("Movie not found", 404);
  }

  res.locals = { ...res.locals, movie };

  return next();
};
