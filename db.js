// db.js
require('dotenv').config();

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    throw err; // or use a callback to handle the error
  } else {
    console.log('Connected to database');
  }
});

module.exports = connection;
