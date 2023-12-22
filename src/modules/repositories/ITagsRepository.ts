import { ITagDTO } from "../dtos/tag.dto";
import { Tag } from "../model/Tags";

interface ITagsRepository {
  create(tag: ITagDTO): Promise<Tag>;
  findById(movie_id: string): Promise<Tag | undefined>;
  list(): Promise<ITagDTO[]>;
  // update(movie: IMovieDTO): Promise<Movie>;
  // delete(movie_id: string): Promise<void>;
}

export { ITagsRepository };
