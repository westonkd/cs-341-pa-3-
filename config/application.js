require("dotenv").config();

module.exports = {
  port: process.env.PORT,
  timeout: process.env.TIMEOUT_MS,
};
