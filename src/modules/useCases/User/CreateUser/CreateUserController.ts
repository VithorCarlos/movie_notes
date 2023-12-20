import { Request, Response } from "express";
import { IUserDTO } from "../../../repositories/iUsersRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const { name, email, password, avatar } = request.body as IUserDTO;
        
      const user = await this.createUserUseCase.execute({
        name,
        email,
        password,
        ...(avatar && { avatar }),
      });
      
      return response.status(201).json(user);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}
