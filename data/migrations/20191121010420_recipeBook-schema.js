exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments();
      tbl
        .text("recipeName")
        .notNullable()
        .unique();
    })
    .createTable("ingredients", tbl => {
      tbl.increments();
      tbl
        .text("ingredientName")
        .notNullable()
        .unique();
    })
    .createTable("recipes_ingredients", tbl => {
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl.float("quantity", 5, 2).notNullable();
      tbl.primary(["recipe_id", "ingredient_id"]);
    })
    .createTable("steps", tbl => {
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl.integer("step").notNullable();
      tbl.string("instruction").notNullable();
      tbl.primary(["recipe_id", "step"]);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("steps")
    .dropTableIfExists("recipes_ingredients")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
