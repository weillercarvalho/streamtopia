import prisma from "../database/db.js";

export async function cleanDb() {
  await prisma.payments.deleteMany({});
  await prisma.sessions.deleteMany({});
  await prisma.users.deleteMany({});
}
