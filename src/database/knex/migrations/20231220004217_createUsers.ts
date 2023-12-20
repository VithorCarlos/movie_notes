import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("users", (table) => {
    table.string("id").notNullable().unique().primary(),
      table.string("email").notNullable().unique(),
      table.string("name").notNullable(),
      table.string("password").notNullable(),
      table.string("avatar").nullable(),
      table.timestamp("created_at").notNullable(),
      table.timestamp("updated_at")
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("users");
}
