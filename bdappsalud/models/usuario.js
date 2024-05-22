'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    email: DataTypes.STRING,
    contraseña: DataTypes.STRING
  });

  Usuario.associate = function(models) {
    Usuario.belongsTo(models.Padre, { as: 'padre', foreignKey: 'padreId' });
    Usuario.hasMany(models.PerfilPaciente, { as: 'perfiles', foreignKey: 'usuarioId' });
  };

  return Usuario;
};