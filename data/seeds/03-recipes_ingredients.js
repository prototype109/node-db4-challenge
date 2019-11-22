exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes_ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes_ingredients").insert([
        { recipeId: 1, ingredientId: 1, quantity: 1 },
        { recipeId: 1, ingredientId: 2, quantity: 6 },
        { recipeId: 1, ingredientId: 3, quantity: 6 },
        { recipeId: 1, ingredientId: 4, quantity: 2 },
        { recipeId: 1, ingredientId: 5, quantity: 0.33 },
        { recipeId: 1, ingredientId: 6, quantity: 2 },
        { recipeId: 1, ingredientId: 7, quantity: 3 },
        { recipeId: 1, ingredientId: 8, quantity: 0.5 },
        { recipeId: 1, ingredientId: 9, quantity: 1 },
        { recipeId: 1, ingredientId: 10, quantity: 1 }
      ]);
    });
};
