import { v4 as uuidV4 } from "uuid";

export class Tag {
  public readonly id: string;
  public name: string;
  public user_id: string;
  public movie_id: string;
  public created_at?: Date;

  constructor(props: Omit<Tag, "id">, id?: string) {
    if (!id) {
      this.id = uuidV4();
    }

    Object.assign(this, {
      ...props,
      created_at: new Date(),
    });
  }
}
