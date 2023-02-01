import prisma from "../database/db.js";

async function getAllHomeMovies() {
  return await prisma.movies.findMany();
}

export { getAllHomeMovies };
