import { Router, response } from "express";
import { createUserController } from "../modules/useCases/User/CreateUser";
import { updateUserController } from "../modules/useCases/User/UpdateUser";

const usersRouter = Router();

usersRouter.post("/", (request, response) =>
  createUserController.handle(request, response)
);

usersRouter.put("/:user_id", (request, response) =>
  updateUserController.handle(request, response)
);

export { usersRouter };
