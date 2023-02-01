import { createPayment, getPayments } from "../repositorys/paymentRepository.js";

async function getPay(token: string) {
  const result = await getPayments(token);
  return result;
}

async function postPay(
  lastNumber: string,
  name: string,
  expirationDate: string,
  cvv: string,
  packageValue: string,
  token: string
) {
  const result = await createPayment(
    lastNumber,
    name,
    expirationDate,
    cvv,
    packageValue,
    token
  );
  return result;
}

export { postPay, getPay };
