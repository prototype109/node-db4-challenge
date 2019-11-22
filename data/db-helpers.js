const db = require("./dbConfig");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return db("recipes");
}

function getShoppingList(recipe_id) {
  return db
    .select("ingredientName as ingredients", "quantity as quantities")
    .from("recipes_ingredients as ri")
    .join("ingredients as i", "ri.ingredientId", "=", "i.id")
    .where("recipeId", recipe_id);
}

function getInstructions(recipe_id) {
  return db
    .select("step", "instruction")
    .from("steps")
    .where("recipeId", recipe_id);
}
