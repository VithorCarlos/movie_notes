import { Request, Response } from "express";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

export class DeleteUserController {
  constructor(private deleteUserUseCase: DeleteUserUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const { user_id } = request.params;

      await this.deleteUserUseCase.execute(user_id);

      return response.json();
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}
