'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    queryInterface.bulkInsert('Usuarios', [{
      email: 'admin@correo.com',
      password: 'Qaws12pj-22',
      created_at: new Date(),
      updated_at: new Date()
    }]);

    return queryInterface.bulkInsert('Usuarios', [{
      email: 'mesero@correo.com',
      password: 'Qaws12pj-22',
      created_at: new Date(),
      updated_at: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Usuarios', null, {});
  }
};
