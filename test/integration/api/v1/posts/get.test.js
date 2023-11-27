describe("get status tests", () => {
  test("get to api/v1/status should respond with status code 200", async () => {
    const response = await fetch("http://localhost:3000/api/v1/status");
    expect(response.status).toBe(200);
  });
});
