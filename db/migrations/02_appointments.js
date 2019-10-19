
exports.up = function(knex) {
    return knex.schema.createTable('appointments', function (table) {
        table.increments();
        table.datetime('time').notNullable;
        table.string('location').notNullable
  })
};

exports.down = function(knex) {
    return knex.schema.createTable('appointmenmts');
};
