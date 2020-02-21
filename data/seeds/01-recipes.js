exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('recipes').insert([
        { recipe_name: 'Mac and Cheese' },
        { recipe_name: 'BBQ Chicken Tenders' },
        { recipe_name: 'Cookies n Cream Fudge' }
      ]);
    });
};
