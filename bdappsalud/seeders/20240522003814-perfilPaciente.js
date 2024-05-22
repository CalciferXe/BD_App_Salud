'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('PerfilPacientes', [
      { nombre: 'Paciente1', fechaNacimiento: new Date('2010-01-01'), dni: '11111111', genero: 'M', edadAnios: 14, edadMeses: 0, usuarioId: 1, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Paciente2', fechaNacimiento: new Date('2011-02-02'), dni: '22222222', genero: 'F', edadAnios: 13, edadMeses: 0, usuarioId: 2, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Paciente3', fechaNacimiento: new Date('2012-03-03'), dni: '33333333', genero: 'M', edadAnios: 12, edadMeses: 0, usuarioId: 3, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Paciente4', fechaNacimiento: new Date('2013-04-04'), dni: '44444444', genero: 'F', edadAnios: 11, edadMeses: 0, usuarioId: 4, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Paciente5', fechaNacimiento: new Date('2014-05-05'), dni: '55555555', genero: 'M', edadAnios: 10, edadMeses: 0, usuarioId: 5, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('PerfilPacientes', null, {});
  }
};
