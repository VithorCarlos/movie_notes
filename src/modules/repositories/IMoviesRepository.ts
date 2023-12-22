import { IMovieDTO } from "../dtos/movie.dto";
import { Movie } from "../model/Movie";

interface IMoviesRepository {
  create(movie: IMovieDTO): Promise<Movie>;
  findById(movie_id: string): Promise<Movie | undefined>;
  list(): Promise<IMovieDTO[]>;
  // update(movie: IMovieDTO): Promise<Movie>;
  // delete(movie_id: string): Promise<void>;
}

export { IMoviesRepository };
