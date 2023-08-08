import axios from "axios";
import { BASE_URL } from "./apiConfig";

const Access_key = "efdcc1a96585b9efa5a566c8fd799528";

export const getAllMovies = async (page, limit) => {
  const response = await axios.get(
    `${BASE_URL}?api_key=${Access_key}&page=${page}&limits=${limit}`
  );
  return response;
};
