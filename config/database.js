const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',     // Update with your DB host
  user: 'root',          // Update with your DB user
  password: 'Spydeer8@',          // Update with your DB password
  database: 'campus_trade' // Update with your DB name
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.message);
  } else {
    console.log('Connected to the MySQL database.');
  }
});

module.exports = db;
