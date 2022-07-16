'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Meseros', [{
      tipo_documento: 'CC',
      documento: '1053855581',
      nombre: 'Felipe Garcia',
      usuario_id: 2,
      sede_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Meseros', null, {});
  }
};
