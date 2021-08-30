const Router= express.Router()
const app = require('express');

router.get('/',(req,res)=>{
    let sql = 'SELECT * FROM base_sku';
    db.query (sql,(err,results) =>{
        if (err) throw err;
        console.log(results);
        res.send ('Database fetched...')
    });
});

module.exports= router