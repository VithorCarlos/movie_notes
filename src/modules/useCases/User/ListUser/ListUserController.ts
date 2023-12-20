import { Request, Response } from "express";
import { ListUserUseCase } from "./ListUserUseCase";

export class ListUserController {
  constructor(private listUserUseCase: ListUserUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const users = await this.listUserUseCase.execute();

      return response.json(users);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}
