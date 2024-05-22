'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('DatosMedicos', [
      { peso: 30.5, talla: 1.2, registroMedicoId: 1, createdAt: new Date(), updatedAt: new Date() },
      { peso: 25.3, talla: 1.1, registroMedicoId: 2, createdAt: new Date(), updatedAt: new Date() },
      { peso: 28.7, talla: 1.15, registroMedicoId: 3, createdAt: new Date(), updatedAt: new Date() },
      { peso: 32.0, talla: 1.22, registroMedicoId: 4, createdAt: new Date(), updatedAt: new Date() },
      { peso: 27.9, talla: 1.18, registroMedicoId: 5, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('DatosMedicos', null, {});
  }
};
