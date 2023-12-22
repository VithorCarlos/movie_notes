export interface IMovieDTO {
  id?: string;
  title: string;
  description: string;
  rating: number;
  user_id: string;
  updated_at?: Date;
  tagName?: string;
}