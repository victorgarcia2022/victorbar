'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mesero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.belongsTo(models.Usuario);
      // this.belongsTo(models.Sede);
    }
  }
  Mesero.init({
    tipo_documento: DataTypes.STRING,
    documento: DataTypes.STRING,
    nombre: DataTypes.STRING,
    usuarioId: {
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'Usuario',
          schema: 'schema'
        },
        key: 'id'
      },
      allowNull: false
    },
    sedeId: {
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'Sede',
          schema: 'schema'
        },
        key: 'id'
      },
      allowNull: false
    },
    created_at: DataTypes.STRING,
    updated_at: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Mesero', 
    tableName: 'Meseros',
    timestamps: false,
    underscored: true
  });
  return Mesero;
};