import prisma from "../database/db.js";

async function postUser(name: string, email: string, password: string) {
  return await prisma.users.create({
    data: {
      name,
      email,
      password,
    },
  });
}

async function getUser(email: string) {
  return await prisma.users.findFirst({
    where: { email: email },
  });
}

async function postSession(
  userId: number,
  email: string,
  password: string,
) {
  return await prisma.sessions.create({
    data: {
      userId,
      email,
      password,
    },
  });
}

export { postUser, getUser, postSession };
