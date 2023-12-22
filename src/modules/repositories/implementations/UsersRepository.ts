import { User } from "../../model/User";

import knex from "../../../database/knex";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IUserDTO } from "../../dtos/user.dto";

export class UsersRepository implements IUsersRepository {
  private static INSTANCE: UsersRepository;

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  async create({ name, email, password, avatar }: IUserDTO): Promise<User> {
    const userToCreate = new User({ name, email, password, avatar });

    await knex("users").insert(userToCreate);

    const [userInserted] = await knex("users").where({ id: userToCreate.id });

    return userInserted;
  }

  async findByEmail(email: string): Promise<User> {
    const [findByEmail] = await knex("users").where({ email });

    return findByEmail;
  }

  async findById(id: string): Promise<User> {
    if (id) {
      const [findById] = await knex("users").where({ id });

      return findById;
    }
  }

  async list(): Promise<User[]> {
    const users = await knex("users");
    return users;
  }

  async update(user: IUserDTO): Promise<User> {
    const { name, email, password, avatar, id, updated_at } = user;
    await knex("users")
      .update({ name, email, password, avatar, updated_at })
      .where({ id });
    const [userUpdated] = await knex("users").where({ id });
    return userUpdated;
  }

  async delete(user_id: string): Promise<void> {
    await knex("users").where({ id: user_id }).delete();
  }
}
