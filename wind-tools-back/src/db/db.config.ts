require("dotenv").config();
module.exports = {
  HOST: process.env.API_DB_HOST,
  USER: process.env.API_DB_USER,
  PASSWORD: process.env.API_DB_PWD,
  DB: process.env.API_DB_DB,
  dialect: process.env.API_DB_DIALECT, 
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  }
};