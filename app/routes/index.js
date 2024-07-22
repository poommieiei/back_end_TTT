var express = require('express');
var router = express.Router();
const databaseContextPg = require("database-context-pg");
const connectionSetting = require("../dbconnect");
const connectionConfig = connectionSetting.config;
const condb = new databaseContextPg(connectionConfig);




router.get(`/getId/:id`,async(req, res, next)=>{
   /*  const response = new Responsedata(req, res); */
   console.log('เข้าเเล้ว---2',req.query);
   console.log('เข้าเเล้ว---1',req.params);

   try {
    let temp = await condb.clientQuery(
        `SELECT news_id, news_title, news_description, news_url, news_start_date, news_end_date, news_kn_id, news_is_highlight, news_is_active, news_is_use, news_created_date, news_updated_date, news_created_by, news_created_by_name, news_updated_by, news_updated_by_name
              FROM users.news where news_is_highlight = true limit 1`, []);
        
    

    return res.status(200).json({data:temp.rows});
   }catch (error) {
    return  res.status(400).json([{
        errorcode: 400,
        errormessage: error.message
    }])
}
   

});


module.exports = router;