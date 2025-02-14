"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Grade extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Grade.hasMany(models.Student, { foreignKey: "GradeId" });
      Grade.hasMany(models.Class, { foreignKey: "GradeId" });
    }
  }
  Grade.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Grade",
    }
  );
  return Grade;
};
