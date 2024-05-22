'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const DatosMedicos = sequelize.define('DatosMedicos', {
    peso: DataTypes.FLOAT,
    talla: DataTypes.FLOAT
  });

  DatosMedicos.associate = function(models) {
    DatosMedicos.belongsTo(models.RegistroMedico, { as: 'registroMedico', foreignKey: 'registroMedicoId' });
  };

  return DatosMedicos;
};