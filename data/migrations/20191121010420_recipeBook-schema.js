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
    });
};

exports.down = function(knex) {};
