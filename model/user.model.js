import mongoose from "mongoose";
import Database from "../infra/database.js";

class User {
  constructor() {
    this.userSchema = new mongoose.Schema({
      email: String,
      password: String,
      name: String,
      posts: [],
    });
    this.userModel =
      mongoose.models.User || mongoose.model("User", this.userSchema);
  }

  getModel() {
    return this.userModel;
  }

  async getAllUsers() {
    try {
      await Database.connect();
      //verifica se a conexão foi estabelecida antes de continuar, aparentemente a função mongoose.models.User precisa da conexão ativa, não sei o porque
      while (mongoose.connection.readyState !== 1) {
        await new Promise((resolve) => setTimeout(resolve, 100));
      }
      const users = await this.userModel.find({});
      return users;
    } catch (error) {
      console.error("Error retrieving users:", error);
      throw error;
    } finally {
      Database.close();
    }
  }
}

export default new User();
