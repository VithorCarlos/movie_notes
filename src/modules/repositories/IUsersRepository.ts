import { User } from "../model/User";

interface IUserDTO {
  id?:string;
  name: string;
  email: string;
  password: string;
  old_password?: string;
  avatar?: string;
  updated_at?: Date;
}

interface IUsersRepository {
  create(user: IUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User | undefined>;
  findById(id: string): Promise<User | undefined>;
  list(): Promise<User[]>;
  update(user: IUserDTO): Promise<User>;
  delete(user_id: string): Promise<void>;
}

export { IUserDTO, IUsersRepository };
