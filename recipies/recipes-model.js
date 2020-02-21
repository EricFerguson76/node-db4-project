const db = require('../data/db-config.js');

module.exports = {
  getRecipes,
  getRecipeById,
  getShoppingList,
  getInstructions,
  add,
  update,
  remove
};

function getRecipes() {
  return db('recipes');
}

function getRecipeById(id) {
  return db('recipes')
    .where({ id })
    .first();
}

function getShoppingList(recipe_id) {
  return db('recipe_ingredients as ri')
    .select(
      'i.ingredient_name',
      'ri.ingredient_quantity',
      'ri.measurement.units'
    )
    .join('ingredients as i', 'i.id', 'ri.ingredient.id')
    .where({ 'ri.recipe_id': recipe_id });
}

function getInstructions(recipe_id) {
  return db('instructions as i')
    .select('i.step_name', 'i.step_instructions')
    .join('instructions as i', 'recipes.id')
    .orderBy(i.step_number)
    .where({ 'i.recipe_id': recipe_id });
}
