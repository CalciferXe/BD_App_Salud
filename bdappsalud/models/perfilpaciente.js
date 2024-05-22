'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const PerfilPaciente = sequelize.define('PerfilPaciente', {
    nombre: DataTypes.STRING,
    fechaNacimiento: DataTypes.DATE,
    dni: DataTypes.STRING,
    genero: DataTypes.STRING,
    edadAnios: DataTypes.INTEGER,
    edadMeses: DataTypes.INTEGER
  });

  PerfilPaciente.associate = function(models) {
    PerfilPaciente.belongsTo(models.Usuario, { as: 'usuario', foreignKey: 'usuarioId' });
    PerfilPaciente.hasMany(models.RegistroMedico, { as: 'registrosMedicos', foreignKey: 'perfilPacienteId' });
  };

  return PerfilPaciente;
};