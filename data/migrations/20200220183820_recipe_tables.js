exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments();

      tbl
        .string('recipe_name', 255)
        .notNullable()
        .unique();
      tbl.string('recipe_description', 255);
    })

    .createTable('ingredients', tbl => {
      tbl.increments();
      tbl
        .string('ingredients', 255)
        .notNullable()
        .unique();
    })

    .createTable('instructions', tbl => {
      tbl.increments();
      tbl.integer('step_number').notNullable();
      tbl.string('step_instructions', 255).notNullable();
      tbl
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
    .createTable('recipe_ingredients', tbl => {
      tbl.primary(['recipe_id', 'ingredient_id']);

      tbl
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

      tbl
        .integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

      tbl.float('ingredient_quantity').notNullable();
      tbl.string('measurement_unit', 255).notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('instructions')
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes');
};
