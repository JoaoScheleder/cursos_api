
var mysql = require('mysql');

const pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  port            : 3306,
  user            : 'sqluser',
  password        : 'password',
  database        : 'cursos_vr',
});

export default pool
