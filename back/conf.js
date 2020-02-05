const  mysql = require('mysql');
const  connection = mysql.createConnection({
host :  'localhost', // address of the server
user :  'root', // username
password :  'Lola2206+',
database :  'RG_Database',
});
module.exports = connection;