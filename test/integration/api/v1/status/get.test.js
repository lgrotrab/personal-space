import User from "../../../../../model/user.model.js";

describe("get posts tests", () => {
  test("get to api/v1/posts should respond with status code 200", async () => {
    const response = await fetch("http://localhost:3000/api/v1/posts");
    expect(response.status).toBe(200);
  });

  test("getAllUsers should return objects with specific keys", async () => {
    const expectedKeys = ["email", "password", "name", "posts"];
    const users = await User.getAllUsers();
    const allUsersHaveExpectedKeys = users.every((user) => {
      return expectedKeys.every((key) => key in user);
    });
    expect(allUsersHaveExpectedKeys).toBe(true);
  });
});
