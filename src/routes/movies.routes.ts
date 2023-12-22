import { Router, response } from "express";
import { createMovieController } from "../modules/useCases/Movie/CreateMovie";

const moviesRouter = Router();

moviesRouter.post("/:user_id", (request, response) =>
  createMovieController.handle(request, response)
);

export { moviesRouter };
