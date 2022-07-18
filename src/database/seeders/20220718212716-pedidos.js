'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Pedidos', [{
      mesa: 1,
      productos: [{
        "id": 1,
        "id": 1,
        "nombre": "Ron 5 años",
        "valor": "90000",
        "imagen": "https:&#x2F;&#x2F;i0.wp.com&#x2F;www.licoresmedellin.com&#x2F;wp-content&#x2F;uploads&#x2F;2022&#x2F;06&#x2F;Mezcal-Union-Kit-VIEJO-700ml.jpg?fit=600%2C800&amp;ssl=1",
        "unidades": 2
      },
      {
        "id": 2,
        "nombre": "Ron 15 Años",
        "valor":110000,
        "imagen":"https://i0.wp.com/www.licoresmedellin.com/wp-content/uploads/2022/06/Mezcal-Union-Kit-VIEJO-700ml.jpg?fit=600%2C800&ssl=1",
        "unidades":2
      }],
      total: 290000,
      usuario_id: 2,
      sede_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Pedidos', null, {});
  }
};
