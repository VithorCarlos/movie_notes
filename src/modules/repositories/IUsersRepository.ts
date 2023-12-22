import { IUserDTO } from "../dtos/user.dto";
import { User } from "../model/User";

interface IUsersRepository {
  create(user: IUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User | undefined>;
  findById(id: string): Promise<User | undefined>;
  list(): Promise<User[]>;
  update(user: IUserDTO): Promise<User>;
  delete(user_id: string): Promise<void>;
}

export { IUsersRepository };
