import axios from "axios";
import { BASE_URL } from "./apiConfig";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZmRjYzFhOTY1ODViOWVmYTVhNTY2YzhmZDc5OTUyOCIsInN1YiI6IjY0Y2JhMWRjNGZkMTQxMDE0NmI3NzY1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.STY84uWtZmmUp6p76-nnEMCjRqflRhriDWmUmPgsmy8",
  },
};
export const getAllMovie = async (page) => {
  const response = await axios.get(`${BASE_URL}&page=${page}`, options);
  return response;
};
