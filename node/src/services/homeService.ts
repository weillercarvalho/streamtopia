import { getAllHomeMovies } from "../repositorys/homeRepository.js";

async function gettingHomes() {
  const result = await getAllHomeMovies();
  return result;
}

export { gettingHomes };
