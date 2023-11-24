const mongoose = require("mongoose");

class Database {
  constructor() {
    this.connect();
  }

  static connect() {
    const uri = `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@mongo:27017/${process.env.MONGO_INITDB_DATABASE}`;
    console.log(uri);
    mongoose
      .connect(uri, {
        useNewUrlParser: true,
      })
      .then(() => {
        console.log("Database connection successful");
      })
      .catch((err) => {
        console.error("Database connection error");
      });
  }
}

module.exports = Database;
