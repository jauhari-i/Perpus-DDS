const mysql = require('mysql');

const conn = mysql.createConnection({
  host: 'localhost',
  user: '',
  password: '',
  database: 'db_perpus'
});

conn.connect((err) => {
  if (err) return err;
  console.log('DB akses');
});