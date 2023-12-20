import { User } from "../../../model/User";

import bcrypt from "bcrypt";
import { IUserDTO, IUsersRepository } from "../../../repositories/IUsersRepository";

export class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(user: IUserDTO): Promise<User> {
    const userAlreadyExists = await this.usersRepository.findByEmail(
      user.email
    );

    if (userAlreadyExists) {
      throw new Error("User Already Exists");
    }

    const criptedPassword = await bcrypt.hash(user.password, 10);

    const createdUser = await this.usersRepository.create({
      ...user,
      password: criptedPassword,
    });

    return createdUser;
  }
}
