require('dotenv').config();

const connection = {
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE,
};

const mariadb = require('mariadb');
const pool = mariadb.createPool(connection);

module.exports = pool;