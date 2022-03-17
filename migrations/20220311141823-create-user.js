'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      gender: {
        type: Sequelize.STRING
      },
      nametitle: {
        type: Sequelize.STRING
      },
      namefirst: {
        type: Sequelize.STRING
      },
      namelast: {
        type: Sequelize.STRING
      },
      locationstreetnumber: {
        type: Sequelize.INTEGER
      },
      locationstreetname: {
        type: Sequelize.STRING
      },
      locationcity: {
        type: Sequelize.STRING
      },
      locationstate: {
        type: Sequelize.STRING
      },
      locationcountry: {
        type: Sequelize.STRING
      },
      locationpostcode: {
        type: Sequelize.INTEGER
      },
      locationcoordinateslatitude: {
        type: Sequelize.STRING
      },
      locationcoordinateslongitude: {
        type: Sequelize.STRING
      },
      locationtimezoneoffset: {
        type: Sequelize.STRING
      },
      locationtimezonedescription: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      loginuuid: {
        type: Sequelize.STRING
      },
      loginusername: {
        type: Sequelize.STRING
      },
      loginpassword: {
        type: Sequelize.STRING
      },
      loginsalt: {
        type: Sequelize.STRING
      },
      loginmd5: {
        type: Sequelize.STRING
      },
      loginshal: {
        type: Sequelize.STRING
      },
      loginsha256: {
        type: Sequelize.STRING
      },
      dobdate: {
        type: Sequelize.STRING
      },
      dobage: {
        type: Sequelize.INTEGER
      },
      registereddate: {
        type: Sequelize.STRING
      },
      registeredage: {
        type: Sequelize.INTEGER
      },
      phone: {
        type: Sequelize.STRING
      },
      cell: {
        type: Sequelize.STRING
      },
      idname: {
        type: Sequelize.STRING
      },
      idvalue: {
        type: Sequelize.STRING
      },
      picturelarge: {
        type: Sequelize.STRING
      },
      picturemedium: {
        type: Sequelize.STRING
      },
      picturethumbnail: {
        type: Sequelize.STRING
      },
      nat: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};