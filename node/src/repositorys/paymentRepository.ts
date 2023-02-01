import prisma from "../database/db.js";

async function getPayments(token: string) {
  return await prisma.payments.findFirst({
    where: {
      token,
    },
  });
}

async function createPayment(
  lastNumbers: string,
  name: string,
  expirationDate: string,
  cvv: string,
  packageValue: string,
  token: string
) {
  return await prisma.payments.create({
    data: {
      lastNumbers,
      name,
      expirationDate,
      cvv,
      packageValue,
      token,
    },
  });
}

export { createPayment, getPayments };
