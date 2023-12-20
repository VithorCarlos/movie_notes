import { Request, Response } from "express";
import { UpdateUserUseCase } from "./UpdateUserUseCase";
import { IUserDTO } from "../../../repositories/IUsersRepository";

export class UpdateUserController {
  constructor(private updateUserUseCase: UpdateUserUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const { user_id } = request.params;
      const { name, email, password, old_password, avatar } =
        request.body as IUserDTO;

      const user = await this.updateUserUseCase.execute({
        id: user_id,
        ...(name && { name }),
        ...(email && { email }),
        ...(password && { password }),
        ...(old_password && { old_password }),
        ...(avatar && { avatar }),
        updated_at: new Date(),
      });

      return response.status(201).json(user);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}
