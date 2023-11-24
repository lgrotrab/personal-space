import mongoose from "mongoose";

class User {
  #userModel;

  constructor() {
    const userSchema = new mongoose.Schema({
      email: String,
      password: String,
      name: String,
      posts: [],
    });

    this.#userModel = mongoose.model("User", userSchema);
  }

  getModel() {
    return this.#userModel;
  }
}

module.exports = new User();
