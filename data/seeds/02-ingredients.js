exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { ingredientName: "Cheddar Cheese" },
        { ingredientName: "Egg" },
        { ingredientName: "Bacon" },
        { ingredientName: "Bread" },
        { ingredientName: "Red Bell Pepper" },
        { ingredientName: "Green Onion" },
        { ingredientName: "Milk" },
        { ingredientName: "Garlic" },
        { ingredientName: "Salt" },
        { ingredientName: "Ground Black Pepper" }
      ]);
    });
};
