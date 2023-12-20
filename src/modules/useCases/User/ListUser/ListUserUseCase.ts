import { User } from "../../../model/User";
import { IUsersRepository } from "../../../repositories/IUsersRepository";

export class ListUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(): Promise<User[]> {
    return await this.usersRepository.list();
  }
}
