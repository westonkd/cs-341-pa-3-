const { database } = require("../../config/db");
const { ObjectId } = require("mongodb");

class Contact {
  static collection = "contacts";

  static find = async (id) =>
    await database()
      .collection(this.collection)
      .findOne({ _id: ObjectId(id) });

  // TODO: validate properties
  static create = async (properties) => {
    return await database().collection(this.collection).insertOne(properties);
  };

  // TODO: Make an instance function
  // TODO: Validate properties
  static update = async (id, properties) =>
    await database()
      .collection(this.collection)
      .updateOne({ _id: ObjectId(id) }, { $set: properties });

  // TODO: Make an instance method
  static destroy = async (id) =>
    await database()
      .collection(this.collection)
      .deleteOne({ _id: ObjectId(id) });
}

module.exports = Contact;
