import mongoose from "mongoose";
import Database from "../../../infra/database.js";

describe("Database Connection", () => {
  test("connect method should establish a connection", async () => {
    await Database.connect();

    // Aguarda a conexão ser estabelecida
    while (mongoose.connection.readyState !== 1) {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }

    expect(mongoose.connection.readyState).toBe(1);

    await Database.close();
  });
});
