const express = require("express");
const appConfig = require("./config/application");
const { initDB } = require("./config/db");

const app = express();

// Routes
const contactsRoutes = require("./config/routes/contacts");
app.use("/contacts", contactsRoutes(express.Router()));

initDB().then(() => {
  app.listen(appConfig.port, () => {
    console.log(`Application started on ${appConfig.port}`);
  });
});
