const express= require ('express');
const mysql = require ('mysql2');
const app = express();

//create connection
var db = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "R@faelaugustos",
    database:'cnb_products'

});

//connect
db.connect((err)=>{
    if (err){
        throw err;
    }
    console.log('MySql connected!...')

});

app.get('/',(req,res)=>{
    let sql = 'SELECT * FROM base_sku';
    db.query (sql,(err,results) =>{
        if (err) throw err;
        console.log(results);
        res.send ('Database fetched...')
    });
});

app.listen('3000', ()=>{
    console.log('server started on server 3000 ')

});