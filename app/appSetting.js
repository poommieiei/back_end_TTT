const config = require("./appSettingSite.js");
var _config ={
    development:{
    
    "dbConnect":{
        "user":config.DB_USERNAME_DEV,
        "host": config.DB_SERVER_DEV,
        "database": config.DB_NAME_DEV,
        "password": config.DB_PASSWORD_DEV,
        "port":config.DB_PORT_DEV,
        "max": 10,
        "idleTimeoutMillis": 30000,
        "connectionTimeoutMillis": 5000,
    }
} ,
production:{
    
    "dbConnect":{
        "user":config.DB_USERNAME_PROD,
        "host": config.DB_SERVER_PROD,
        "database": config.DB_NAME_PROD,
        "password": config.DB_PASSWORD_PROD,
        "port":config.DB_PORT_PROD,
        "max": 10,
        "idleTimeoutMillis": 30000,
        "connectionTimeoutMillis": 5000,
    }

} ,
 

}

module.exports ={
    "dbConnect":_config[config.START_PROJECT],
   "host":config.HOST,
   "port":config.PORT,
   "secretKey":config.SECRETKEY,
   "customHeaderKey":config.CUSTOMHERDERKEY,

   


    }