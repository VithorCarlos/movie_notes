import knex from "../../../database/knex";
import { IMoviesRepository } from "../IMoviesRepository";
import { IMovieDTO } from "../../dtos/movie.dto";
import { Movie } from "../../model/Movie";
import { Tag } from "../../model/Tags";

export class MoviesRepository implements IMoviesRepository {
  private static INSTANCE: MoviesRepository;

  public static getInstance(): MoviesRepository {
    if (!MoviesRepository.INSTANCE) {
      MoviesRepository.INSTANCE = new MoviesRepository();
    }

    return MoviesRepository.INSTANCE;
  }

  async create({
    title,
    rating,
    description,
    user_id,
    tagName,
  }: IMovieDTO): Promise<Movie> {
    const movieToCreate = new Movie({ title, rating, description, user_id });

    await knex("movies").insert(movieToCreate);

    const [movieInserted] = await knex("movies").where({
      id: movieToCreate.id,
      user_id,
    });

    return movieInserted;
  }

  async findById(movie_id: string): Promise<Movie> {
    const [findById] = await knex("movies").where({ id: movie_id });

    return findById;
  }

  async list(): Promise<Movie[]> {
    const movies = await knex("movies");
    return movies;
  }
}
