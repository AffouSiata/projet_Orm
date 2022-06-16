// let mysql = require('mysql');
// let connect = mysql.createConnection({
   
//    host:'192.168.64.2',
//    user: 'Affou',
//    password:'12345',
//    database:'projet_ORM'

// });

// module.exports=connect;



const  Sequelize  = require('sequelize');




const sequelize = new Sequelize('projet_ORM', 'Affou', '12345', {
    dialect:  'mysql' ,
    host: '192.168.64.2'
});
module.exports =sequelize;





