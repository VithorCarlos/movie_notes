import { v4 as uuidV4 } from "uuid";

export class User {
  public readonly id?: string;
  public name: string;
  public email: string;
  public password: string;
  public avatar?: string;
  public created_at?: string;
  public updated_at?: string;

  constructor(props: Omit<User, "id">, id?: string) {
    if (!id) {
      this.id = uuidV4();
    }

    Object.assign(this, {
      ...props,
      created_at: new Date(),
      updated_at: new Date(),
    });
  }
}
