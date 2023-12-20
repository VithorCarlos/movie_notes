import { User } from "../../../model/User";

import { compare, hash } from "bcrypt";
import { IUserDTO, IUsersRepository } from "../../../repositories/IUsersRepository";

export class UpdateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(user: IUserDTO): Promise<User> {
    const userData = await this.usersRepository.findById(user.id);

    if (!userData) {
      throw new Error("User not found");
    }

    if (userData.email === user.email) {
      throw new Error("Email already exists");
    }

    if (user.password && !user.old_password) {
      throw new Error("Old password is necessary");
    }

    if (userData.password && user.password) {
      const checkOldPassword = await compare(
        user.old_password,
        userData.password
      );

      if (!checkOldPassword) {
        throw new Error("The old password is not true");
      }

      if (checkOldPassword && user.password === user.old_password) {
        throw new Error("Enter a different password than the old password");
      }
      userData.password = await hash(user.password, 10);
    }


    const updatedUser = await this.usersRepository.update({
      ...user,
      password: userData.password ,
    });

    return updatedUser;
  }
}
