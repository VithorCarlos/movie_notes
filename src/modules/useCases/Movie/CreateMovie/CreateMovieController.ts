import { Request, Response } from "express";
import { IMovieDTO } from "../../../dtos/movie.dto";
import { CreateMovieUseCase } from "./CreateMovieUseCase";

export class CreateMovieController {
  constructor(private createMovieUseCase: CreateMovieUseCase) {}

  async handle(request: Request, response: Response) {
    const { title, description, rating, tagName } = request.body as IMovieDTO;
    const { user_id } = request.params;

    try {
      const movie = await this.createMovieUseCase.execute({
        title,
        description,
        rating,
        user_id,
        ...(tagName && { tagName }),
      });

      return response.status(201).json(movie);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}
