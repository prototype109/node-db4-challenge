exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("steps")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("steps").insert([
        { recipeId: 1, step: 1, instruction: "cup shredded" },
        { recipeId: 1, step: 2, instruction: "whisked" },
        { recipeId: 1, step: 3, instruction: "slices diced" },
        { recipeId: 1, step: 4, instruction: "slices cubed" },
        { recipeId: 1, step: 5, instruction: "diced" },
        { recipeId: 1, step: 6, instruction: "chopped" },
        { recipeId: 1, step: 7, instruction: "tablespoon" },
        { recipeId: 1, step: 8, instruction: "teaspoon minced or to taste" },
        { recipeId: 1, step: 9, instruction: "to taste" },
        { recipeId: 1, step: 10, instruction: "to taste" }
      ]);
    });
};
