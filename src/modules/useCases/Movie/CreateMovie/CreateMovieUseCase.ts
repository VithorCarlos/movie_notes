import { IMovieDTO } from "../../../dtos/movie.dto";
import { ITagDTO } from "../../../dtos/tag.dto";
import { Movie } from "../../../model/Movie";
import { IMoviesRepository } from "../../../repositories/IMoviesRepository";
import { ITagsRepository } from "../../../repositories/ITagsRepository";

export class CreateMovieUseCase {
  constructor(
    private moviesRepository: IMoviesRepository,
    private tagsReposity: ITagsRepository
  ) {}

  async execute(movie: IMovieDTO): Promise<Movie> {
    if (movie.rating === undefined) {
      throw new Error("Rating note is required");
    }

    if (typeof movie.rating !== "number") {
      throw new Error("Rating needs to be a number!");
    }

    if (movie.rating < 1 || movie.rating > 5) {
      throw new Error("The rating must be from 1 to 5 stars.");
    }

    const movieCreated = await this.moviesRepository.create(movie);

    let tagCreated: ITagDTO;

    if (!!movie?.tagName) {
      tagCreated = await this.tagsReposity.create({
        name: movie.tagName,
        user_id: movie.user_id,
        movie_id: movieCreated.id,
      });
    }

    return {
      ...movieCreated,
      ...(tagCreated?.name && { tag: tagCreated?.name }),
    };
  }
}
