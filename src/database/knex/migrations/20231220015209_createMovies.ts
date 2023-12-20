import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("movies", (table) => {
    table.string("id").notNullable().unique().primary(),
      table.string("title").notNullable(),
      table.string("description").notNullable(),
      table.integer("rating").notNullable(),

      table.string("user_id").references("id").inTable("users"),
      
      table.timestamp("created_at").notNullable(),
      table.timestamp("updated_at");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("movies");
}
