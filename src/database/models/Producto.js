'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Producto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.belongsTo(models.Sede);
    }
  }
  Producto.init({
    nombre: DataTypes.STRING,
    valor: DataTypes.STRING,
    imagen: DataTypes.STRING,
    stock: DataTypes.INTEGER,
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
    modelName: 'Producto',
    tableName: 'Productos',
    timestamps: false,
    underscored: true
  });
  return Producto;
};