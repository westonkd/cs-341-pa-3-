const Contact = require("../models/contact");

module.exports.show = async (req, res) => {
  const contact = await Contact.find(req.query.id);

  res.json(contact);
};
