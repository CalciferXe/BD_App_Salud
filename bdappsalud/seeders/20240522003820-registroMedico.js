'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('RegistroMedicos', [
      { fecha: new Date('2022-01-01'), perfilPacienteId: 1, createdAt: new Date(), updatedAt: new Date() },
      { fecha: new Date('2022-02-02'), perfilPacienteId: 2, createdAt: new Date(), updatedAt: new Date() },
      { fecha: new Date('2022-03-03'), perfilPacienteId: 3, createdAt: new Date(), updatedAt: new Date() },
      { fecha: new Date('2022-04-04'), perfilPacienteId: 4, createdAt: new Date(), updatedAt: new Date() },
      { fecha: new Date('2022-05-05'), perfilPacienteId: 5, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('RegistroMedicos', null, {});
  }
};
