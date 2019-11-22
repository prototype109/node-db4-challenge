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
        .integer("recipeId")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("ingredientId")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl.float("quantity", 5, 2).notNullable();
      tbl.primary(["recipeId", "ingredientId"]);
    })
    .createTable("steps", tbl => {
      tbl
        .integer("recipeId")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl.integer("step").notNullable();
      tbl.string("instruction").notNullable();
      tbl.primary(["recipeId", "step"]);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("steps")
    .dropTableIfExists("recipes_ingredients")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
