import { NextFunction, Request, Response } from "express";
import { movieRepo } from "../repositories";
import AppError from "../errors/AppErrors";

export const verifyName = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const movieName = req.body.name;
  if (!movieName) {
    return next();
  }
  const findMovie = await movieRepo.findOneBy({ name: movieName });
  if (findMovie) {
    throw new AppError("Movie already exists.", 409);
  }

  return next();
};
