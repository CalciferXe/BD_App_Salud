'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Usuarios', [
      { email: 'usuario1@example.com', contraseña: 'password1', padreId: 1, createdAt: new Date(), updatedAt: new Date() },
      { email: 'usuario2@example.com', contraseña: 'password2', padreId: 2, createdAt: new Date(), updatedAt: new Date() },
      { email: 'usuario3@example.com', contraseña: 'password3', padreId: 3, createdAt: new Date(), updatedAt: new Date() },
      { email: 'usuario4@example.com', contraseña: 'password4', padreId: 4, createdAt: new Date(), updatedAt: new Date() },
      { email: 'usuario5@example.com', contraseña: 'password5', padreId: 5, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Usuarios', null, {});
  }
};
