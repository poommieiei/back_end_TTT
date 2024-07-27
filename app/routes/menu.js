var express = require('express');
var router = express.Router();
const databaseContextPg = require("database-context-pg");
const connectionSetting = require("../dbconnect");
const connectionConfig = connectionSetting.config;
const condb = new databaseContextPg(connectionConfig);

router.get(`/getMenuById/` , async(req , res) => {
    try {
        let {id} = req.query;
        console.log(id);
        let data = await condb.clientQuery(`SELECT news_id , news_title FROM users.news where news_id = $1` , [
            id
        ]);

        return res.status(200).json({
            data: data,
            status: 200,
            message: 'query success',
            dataId: id
        })
    } 
    catch (error) {
        return res.status(400).json({
            error: 400,
            message: error.message
        })
    }
})

module.exports = router;