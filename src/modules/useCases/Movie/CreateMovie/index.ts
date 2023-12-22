import { MoviesRepository } from "../../../repositories/implementations/MoviesRepository";
import { TagsRepository } from "../../../repositories/implementations/TagsRepository";
import { CreateMovieController } from "./CreateMovieController";
import { CreateMovieUseCase } from "./CreateMovieUseCase";

const moviesRepository = MoviesRepository.getInstance();
const tagsRepository = TagsRepository.getInstance();

const createMovieUseCase = new CreateMovieUseCase(moviesRepository, tagsRepository);

const createMovieController = new CreateMovieController(createMovieUseCase);

export { createMovieController };
