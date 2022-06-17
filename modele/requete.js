
const creation = require("../controlle/control");
const sequelize = require("../database/connection");
const utilisateur = require("./creation_table");

const data = class{
    static insertion  =(donne)=>{ 
        utilisateur.sync() 
        return new Promise(async (next)=>{
            let {nom,prenom,email} =donne
                    utilisateur.create({nom,prenom,email}).then(result =>{
                        
                next({
                   success:result 
                  
                })
            })
            .catch(error =>{
             
               next({
                erreur:error
               })
            })
          
        })
       

    }
    static selection =(dd)=>{
        return new Promise(async (next) =>{
            const util = await utilisateur.findAll().then(result =>{
                next({
                    success:result 
                
                })
                
            })
            .catch(error =>{
                
                next({
                    erreur:error
                })
            })
        })
       
        
    }



    static modifie_util = (modifi,id)=>{
        console.log("gffgdgf",modifi);
        let {nom,prenom,email} =modifi
  
        return new Promise(async (next)=>{
            await utilisateur.update({ nom,prenom,email},{where: {id:id}})
            .then(result =>{
                console.log("rfrfr",result);
                    next({
                         success:result 
                       
                    })
            })
            .catch(error=>{
                next({
                    erreur:error 
                   
                })
            })
        })
    }


    static supprime_util = (id)=>{
  
        return new Promise(async (next)=>{
            await utilisateur.destroy({where: {id:id}})
            .then(result =>{
                console.log("rfrfr",result);
                    next({
                         success:result 
                       
                    })
            })
            .catch(error=>{
                next({
                    erreur:error 
                   
                })
            })
        })
    }
    
}
module.exports=data;