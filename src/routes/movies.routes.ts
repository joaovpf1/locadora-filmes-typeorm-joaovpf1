import { Router } from "express";
import { verifyId } from "../middlewares/verifyId.middleware";
import {
  deleteMovieController,
  readMoviesController,
  registerMovieController,
  updateMovieController,
} from "../controllers/movies.controller";
import { pagination } from "../middlewares/pagination.middleware";
import { verifyName } from "../middlewares/verifyName.middleware";
import { validateBody } from "../middlewares/validadeBody.middleware";
import {
  movieRegisterSchema,
  movieUpdateSchema,
} from "../schemas/movies.schema";

export const moviesRouter: Router = Router();

moviesRouter.post(
  "/",
  validateBody(movieRegisterSchema),
  verifyName,
  registerMovieController
);

moviesRouter.get("/", pagination, readMoviesController);

moviesRouter.patch(
  "/:id",
  validateBody(movieUpdateSchema),
  verifyId,
  verifyName,
  updateMovieController
);

moviesRouter.delete("/:id", verifyId, deleteMovieController);
