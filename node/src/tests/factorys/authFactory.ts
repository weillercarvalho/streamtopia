import { faker } from "@faker-js/faker";
import prisma from "../../database/db.js";

export async function createUser() {
  return await prisma.users.create({
    data: {
      name: faker.name.firstName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    },
  });
}

