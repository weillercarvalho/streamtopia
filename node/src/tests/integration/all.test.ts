import { beforeEach, describe, expect, it } from "vitest";
import { cleanDb } from "../helpers.js";
import supertest from "supertest";
import server from "../../app.js";
import { faker } from "@faker-js/faker";
import { createUser } from "../factorys/authFactory.js";
import prisma from "../../database/db.js";

beforeEach(async () => {
  await cleanDb();
});

const init = supertest(server);

describe("POST /signup", () => {
  it("should respond with status 400 if no body is given", async () => {
    const response = await init.post("/signup").send({});
    expect(response.status).toBe(400);
  });
  it("should respond with status 422 if body format its invalid", async () => {
    const response = await init.post("/signup").send({
      name: faker.name.firstName(),
      email: faker.datatype.number(),
      password: faker.internet.password(),
    });
    expect(response.status).toBe(422);
  });
  it("should respond with status 400 if email is already used", async () => {
    const user = await createUser();
    const response = await init.post("/signup").send({
      name: faker.name.firstName(),
      email: user.email,
      password: faker.internet.password(),
    });
    expect(response.status).toBe(400);
  });
  it("should respond with status 200 if its ok!", async () => {
    const response = await init.post("/signup").send({
      name: faker.name.firstName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    });
    expect(response.status).toBe(200);
  });
});
describe("POST /signin", () => {
  it("should respond with status 400 if no body is given", async () => {
    const response = await init.post("/signin").send({});
    expect(response.status).toBe(400);
  });
  it("should respond with status 400 if email is null/undefined", async () => {
    const response = await init.post("/signin").send({
      userId: faker.datatype.number(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    });
    expect(response.status).toBe(400);
  });
  it("should respond with status 400 if passwords didn't watch", async () => {
    const user = await createUser();
    const response = await init.post("/signin").send({
      userId: user.id,
      email: user.email,
      password: faker.internet.password(),
    });
    expect(response.status).toBe(400);
  });
});
describe("GET /payment", () => {
  it("should respond with status 400 if no token is given", async () => {
    const response = await init.get("/payment");
    expect(response.status).toBe(400);
  });
});
describe("POST /payment", () => {
  it("should respond with status 400 if no token is given", async () => {
    const response = await init.post("/payment");
    expect(response.status).toBe(400);
  });
  it("should respond with status 400 if body is null/undefined", async () => {
    const response = await init.post("/payment").send({});
    expect(response.status).toBe(400);
  });
  it("should respond with status 400 if body is null/undefined", async () => {
    const response = await init
      .post("/payment")
      .send({
        lastNumber: "1234",
        cvv: "123",
        expirationDate: "1223",
        name: "Joao",
        packageValue: "1",
      })
      .set("Authorization", `Bearer ${undefined}`);
    expect(response.status).toBe(400);
  });
});
describe("GET /home", () => {
  it("should respond with status 200 if movies its ok!", async () => {
    const response = await init.get("/home");
    expect(response.status).toBe(200);
  });
});
