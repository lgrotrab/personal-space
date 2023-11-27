import mongoose from "mongoose";

class Database {
  constructor() {
    this.connect();
  }

  static connect() {
    const uri = `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@mongo:27017/${process.env.MONGO_INITDB_DATABASE}`;
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

  static close() {
    mongoose.connection.close();
  }
}

export default Database;
