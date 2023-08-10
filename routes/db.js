const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'ip-172-31-92-126.ec2.internal',
  user: 'admin',
  password: 'P@ssw0rd',
  database: 'inventory',
  connectionLimit: 10, // Adjust as needed
});

// Check database connection
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
  } else {
    console.log('Connected to the database successfully!');
    connection.release(); // Release the connection
  }
});

module.exports = pool.promise();
