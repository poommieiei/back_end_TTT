const {
  Client,
  Pool
} = require('pg')
var dbConnect = require('./appSetting.js');

let config = dbConnect.dbConnect.dbConnect;

module.exports = {
  connectionPool: null,
  config: config
};