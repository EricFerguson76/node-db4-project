exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredient_name: 'milk' },
        { ingredient_name: 'elbow macaroni' },
        { ingredient_name: 'shredded cheddar cheese' },
        { ingredient_name: 'chicken breast' },
        { ingredient_name: 'seasoned bread crumbs' },
        { ingredient_name: 'bbq sauce' },
        { ingredient_name: 'white chocolate' },
        { ingredient_name: 'sweetened condensed milk' },
        { ingredient_name: 'sandwich cookies' }
      ]);
    });
};
