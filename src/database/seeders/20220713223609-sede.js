'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Sedes', [{
      nombre: 'Sede Manizales',
      administrador: 'Victor Bar',
      n_mesas: 10,
      usuario_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Sedes', null, {});
  }
};
