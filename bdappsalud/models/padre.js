'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Padre = sequelize.define('Padre', {
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    dni: DataTypes.STRING,
    genero: DataTypes.STRING,
    fechaNacimiento: DataTypes.DATE
  });

  Padre.associate = function(models) {
    Padre.hasMany(models.Usuario, { as: 'usuarios', foreignKey: 'padreId' });
  };

  return Padre;
};