const mysql = require('mysql');
const dotenv = require("dotenv").config();

const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost', 
    user: process.env.DB_USER || 'root', 
    password: process.env.DB_PASSWORD || '', 
    database: process.env.DB_DATABASE || 'sql_login' 
});
module.exports = db;