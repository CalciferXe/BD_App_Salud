'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Padres', [
      { nombre: 'Juan', apellido: 'Pérez', dni: '12345678', genero: 'M', fechaNacimiento: new Date('1980-01-01'), createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'María', apellido: 'García', dni: '87654321', genero: 'F', fechaNacimiento: new Date('1985-02-02'), createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Carlos', apellido: 'López', dni: '11223344', genero: 'M', fechaNacimiento: new Date('1975-03-03'), createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Ana', apellido: 'Martínez', dni: '44332211', genero: 'F', fechaNacimiento: new Date('1990-04-04'), createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Pedro', apellido: 'Rodríguez', dni: '55667788', genero: 'M', fechaNacimiento: new Date('1988-05-05'), createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Padres', null, {});
  }
};
