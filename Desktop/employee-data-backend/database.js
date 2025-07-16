// database.js
const mysql = require('mysql2');

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

connection.getConnection((err) => {
  if (err) {
    console.error('Error connecting to database:', err.message);
  } else {
    console.log('✅ Connected to MySQL Database.');
  }
});

module.exports = connection.promise();
