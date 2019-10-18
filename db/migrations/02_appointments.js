
exports.up = function(knex) {
    return knex.schema.createTable('appointments', function (table) {
        table.increments();
        table.string('appointment title').notNullable;
        table.string('appointment description');
        table.date('date').notNullable;
        table.timestamps(true, true);
        table.integer('user_id').notNullable
  })
};

exports.down = function(knex) {
    return knex.schema.createTable('appointmenmts');
};
