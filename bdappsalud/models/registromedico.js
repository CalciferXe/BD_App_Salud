'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const RegistroMedico = sequelize.define('RegistroMedico', {
    fecha: DataTypes.DATE
  });

  RegistroMedico.associate = function(models) {
    RegistroMedico.belongsTo(models.PerfilPaciente, { as: 'perfilPaciente', foreignKey: 'perfilPacienteId' });
    RegistroMedico.hasOne(models.DatosMedicos, { as: 'datos', foreignKey: 'registroMedicoId' });
  };

  return RegistroMedico;
};