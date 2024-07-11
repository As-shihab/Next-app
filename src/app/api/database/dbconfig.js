const mysqli = require('mysql');

 const Connection = mysqli.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'next',
})
Connection.connect();

module.exports = Connection


