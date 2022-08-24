const jsonResponse = require("../../app/middleware/jsonResponse");
const openCors = require("../../app/middleware/openCors");

const { show } = require("../../app/controllers/contacts");

const contacts = (router) => {
  router.use([jsonResponse, openCors]);
  // show
  router.get("/:id", show);

  return router;
};

module.exports = contacts;
