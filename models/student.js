"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Student.belongsTo(models.Grade, { foreignKey: "GradeId" });
      Student.hasOne(models.MyStudent, { foreignKey: "StudentId" });
    }
  }
  Student.init(
    {
      name: DataTypes.STRING,
      birthDay: DataTypes.DATE,
      phoneNumber: DataTypes.STRING,
      school: DataTypes.STRING,
      GradeId: DataTypes.INTEGER,
      UserId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Student",
    }
  );
  return Student;
};
