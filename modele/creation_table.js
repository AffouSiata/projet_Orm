const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/connection');





const utilisateur = sequelize.define('utilisateur', {

    // Model attributes are defined here
    id: {
        type:Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    nom: {
        type: Sequelize.STRING,
        allowNull: false
    },
    prenom: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    }
    },{
        define: {
          freezeTableName: true
        }
      });
   
module.exports=utilisateur;
