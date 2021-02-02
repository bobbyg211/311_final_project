const mysql = require("mysql");
const pool = require("../sql/connection");
const { handleSQLError } = require("../sql/error");

const getAllCustomers = (req, res) => {
  // SELECT ALL USERS
  pool.query("SELECT * FROM customers", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const createCustomer = (req, res) => {
  // INSERT INTO USERS FIRST AND LAST NAME
  let sql =
    "INSERT INTO customers (first_name, last_name, email_address, phone) VALUES (?, ?, ?, ?)";
  // WHAT GOES IN THE BRACKETS
  sql = mysql.format(sql, [
    req.body.firstName,
    req.body.lastName,
    req.body.emailAddress,
    req.body.phone,
  ]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.json({ newId: results.insertId });
  });
};

module.exports = {
  getAllCustomers,
  createCustomer,
};
