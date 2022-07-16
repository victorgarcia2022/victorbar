'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sede extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //this.belongsTo(models.Usuario);
    }
  }
  Sede.init({
    nombre: DataTypes.STRING,
    administrador: DataTypes.STRING,
    n_mesas: DataTypes.INTEGER,
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
    created_at: DataTypes.STRING,
    updated_at: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Sede',
    tableName: 'Sedes',
    timestamps: false,
    underscored: true,
  });
  return Sede;
};