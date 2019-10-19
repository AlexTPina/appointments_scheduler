
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users_appointments', function (table) {
        table.increments()
        table.integer('user_id').references('user_id')
        table.integer('appointment_id').references('appointments_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users_appointments')
};
