const bcrypt = require('bcryptjs');

exports.seed = function(knex, Promise) {
  return knex('helpers').del()
    .then(function () {
      return knex('helpers').insert([
        {id: 1, username: 'helper1', password: bcrypt.hashSync('password', 10)},
        {id: 2, username: 'helper2', password: bcrypt.hashSync('password', 10)}
      ]);
    });
};
