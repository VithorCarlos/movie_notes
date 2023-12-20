import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("tags", (table) => {
    table.string("id").notNullable().unique().primary(),
      table.string("name").notNullable(),

      table.string("user_id").references("id").inTable("users"),
      table.string("movie_id").references("id").inTable("movies").onDelete("CASCADE"),
      
      table.timestamp("created_at").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("tags");
}
