const { createPool } = require("mysql");
const pool = createPool({
  host: "localhost",
  user: "root",
  password: "rootsql",
  database: "logindata",
  connectionLimit: 10,
});
pool.query(`select * from userdetails`, (err, result, fields) => {
  if (err) {
    return console.log(err);
  }
  return console.log(result);
});

// module.exports = pool;
