import { Router } from "express";
import { createUserController } from "../modules/useCases/User/CreateUser";
import { updateUserController } from "../modules/useCases/User/UpdateUser";
import { deleteUserController } from "../modules/useCases/User/DeleteUser";
import { listUserController } from "../modules/useCases/User/ListUser";

const usersRouter = Router();

usersRouter.get("/", (request, response) =>
  listUserController.handle(request, response)
);


usersRouter.post("/", (request, response) =>
  createUserController.handle(request, response)
);

usersRouter.put("/:user_id", (request, response) =>
  updateUserController.handle(request, response)
);

usersRouter.delete("/:user_id", (request, response) =>
  deleteUserController.handle(request, response)
);

export { usersRouter };
