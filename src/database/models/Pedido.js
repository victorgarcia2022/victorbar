'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedido extends Model {
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
  Pedido.init({
    mesa: DataTypes.INTEGER,
    productos: DataTypes.JSON,
    total: DataTypes.STRING,
    usuario_id: {
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
    sede_id: {
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
    modelName: 'Pedido',
    tableName: 'Pedidos',
    timestamps: false,
    underscored: true
  });
  return Pedido;
};