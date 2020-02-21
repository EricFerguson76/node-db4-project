exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('instructions').insert([
        {
          step_number: 1,
          step_instructions: 'In a large pot, bring the milk to a boil.',
          recipe_id: '1'
        },
        {
          step_number: 2,
          step_instructions:
            'Add the pasta and stir constantly until the pasta is cooked, about 10 minutes.',
          recipe_id: '1'
        },
        {
          step_number: 3,
          step_instructions:
            'Turn off the heat, then add the cheddar. Stir until the cheese is melted and the pasta is evenly coated.',
          recipe_id: '1'
        }
      ]);
    });
};
