import {
  postUser,
  getUser,
  postSession,
} from "../repositorys/authRepository.js";
import bcrypt from "bcrypt";

async function signUpService(name: string, email: string, password: string) {
  const verification = await getUser(email);
  if (verification?.id !== undefined) {
    throw new Error("Email already used!");
  }
  const result = await postUser(name, email, password);
  return result;
}

async function signInService(email: string, password: string) {
  const verification  = await getUser(email);
  if (verification?.id === undefined) {
    throw new Error("Unregistered user!");
  }
  const comparePassword = bcrypt.compareSync(password, verification.password);
  if (!comparePassword) {
    throw new Error("Passwords dont match!");
  }
  const result = await postSession(verification.id, email, verification.password);
  return result;
}
export { signUpService, signInService };
