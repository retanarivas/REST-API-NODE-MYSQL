const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: '0.0.0.0',
  port: 3306,
  user: 'root',
  password: '',
  database: 'company',
  multipleStatements: true,
  waitForConnections: true,
  queueLimit: 90
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('db is connected');
  }
});

module.exports = mysqlConnection;