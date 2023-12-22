import knex from "../../../database/knex";
import { ITagDTO } from "../../dtos/tag.dto";
import { Tag } from "../../model/Tags";
import { ITagsRepository } from "../ITagsRepository";

export class TagsRepository implements ITagsRepository {
  private static INSTANCE: TagsRepository;

  public static getInstance(): TagsRepository {
    if (!TagsRepository.INSTANCE) {
      TagsRepository.INSTANCE = new TagsRepository();
    }

    return TagsRepository.INSTANCE;
  }

  async create({ name, movie_id, user_id }: ITagDTO): Promise<Tag> {
    const tagToCreate = new Tag({
      name,
      movie_id,
      user_id,
    });

    await knex("tags").insert(tagToCreate);

    const [tagsInserted] = await knex("tags").where({
      id: tagToCreate.id,
      user_id,
    });

    return tagsInserted;
  }

  async findById(tag_id: string): Promise<Tag> {
    const [findById] = await knex("movies").where({ id: tag_id });

    return findById;
  }

  async list(): Promise<Tag[]> {
    const tags = await knex("tags");
    return tags;
  }
}
