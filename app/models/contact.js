const { database } = require("../../config/db");

class Contact {
  static collection = "contacts";

  static find = async (id) =>
    await database().collection(this.collection).findOne({ id });
}

module.exports = Contact;
