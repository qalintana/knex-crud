exports.up = function (knex) {
  return knex.schema.createTable('projects', (table) => {
    table.increments('id');
    table.text('title');

    //relacionamento com projectos
    table
      .integer('user_id')
      .references('users.id')
      .notNullable()
      .onDelete('CASCADE');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('projects');
};
