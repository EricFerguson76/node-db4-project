exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {
          recipe_id: 1,
          recipe_name: 'Mac and Cheese',
          ingredient_id: '1',
          ingredient_quantity: '5',
          measurement_unit: 'Cup/s',
          instruction_id: '1'
        },
        {
          recipe_id: 1,
          recipe_name: 'Mac and Cheese',
          ingredient_id: '2',
          ingredient_quantity: '1',
          measurement_unit: 'lb',
          instruction_id: '2'
        },
        {
          recipe_id: 1,
          recipe_name: 'Mac and Cheese',
          ingredient_id: '3',
          ingredient_quantity: '2',
          measurement_unit: 'Cup/s',
          instruction_id: '3'
        }
      ]);
    });
};
