import { Router } from "express";
import { usersRouter } from "./users.routes";
import { moviesRouter } from "./movies.routes";

const routes = Router();

routes.use("/users", usersRouter);

routes.use("/movies", moviesRouter);

export { routes };
