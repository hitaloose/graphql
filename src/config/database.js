require("dotenv").config();

module.exports = {
  database: process.env.DB_NAME,
  dialect: "postgres",
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
};
