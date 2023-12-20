import { IUsersRepository } from "../../../repositories/IUsersRepository";

export class DeleteUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(user_id: string): Promise<void> {
    const userData = await this.usersRepository.findById(user_id);

    if (!userData) {
      throw new Error("User not found");
    }

    await this.usersRepository.delete(user_id);
  }
}
