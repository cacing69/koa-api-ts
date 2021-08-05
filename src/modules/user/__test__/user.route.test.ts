import server from "../../../server";
const request = require("supertest");

afterEach((done) => {
  server.close();
  done();
});

describe("routes/user", () => {
  it("should list user", async () => {
    const response = await request(server)
      .post("/user")
      .send({ name: "user_1" });

    expect(response.status).toEqual(201);
    expect(response.type).toEqual("application/json");
    expect(response.body).toEqual({
      data: {
        name: "user_1",
      },
    });
  });
});
