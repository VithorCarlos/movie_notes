import { v4 as uuidV4 } from "uuid";

export class Movie {
  public readonly id: string;
  public title: string;
  public description: string;
  public rating: number;
  public user_id: string;
  public created_at?: Date;
  public updated_at?: Date;

  constructor(props: Omit<Movie, "id">, id?: string) {
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
