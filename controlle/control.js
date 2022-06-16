const sequelize = require("../database/connection");
const utilisateur = require("../modele/creation_table");



const creation = class{
    static ajoutTable =(req=request,res=response)=>{
        utilisateur.sync({ force: true }) 
    }
}
module.exports=creation

