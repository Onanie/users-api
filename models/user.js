'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    gender: DataTypes.STRING,
    nametitle: DataTypes.STRING,
    namefirst: DataTypes.STRING,
    namelast: DataTypes.STRING,
    locationstreetnumber: DataTypes.INTEGER,
    locationstreetname: DataTypes.STRING,
    locationcity: DataTypes.STRING,
    locationstate: DataTypes.STRING,
    locationcountry: DataTypes.STRING,
    locationpostcode: DataTypes.INTEGER,
    locationcoordinateslatitude: DataTypes.STRING,
    locationcoordinateslongitude: DataTypes.STRING,
    locationtimezoneoffset: DataTypes.STRING,
    locationtimezonedescription: DataTypes.STRING,
    email: DataTypes.STRING,
    loginuuid: DataTypes.STRING,
    loginusername: DataTypes.STRING,
    loginpassword: DataTypes.STRING,
    loginsalt: DataTypes.STRING,
    loginmd5: DataTypes.STRING,
    loginshal: DataTypes.STRING,
    loginsha256: DataTypes.STRING,
    dobdate: DataTypes.STRING,
    dobage: DataTypes.INTEGER,
    registereddate: DataTypes.STRING,
    registeredage: DataTypes.INTEGER,
    phone: DataTypes.STRING,
    cell: DataTypes.STRING,
    idname: DataTypes.STRING,
    idvalue: DataTypes.STRING,
    picturelarge: DataTypes.STRING,
    picturemedium: DataTypes.STRING,
    picturethumbnail: DataTypes.STRING,
    nat: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};