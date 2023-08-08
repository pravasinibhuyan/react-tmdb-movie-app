import axios from "axios";

const Access_key = "efdcc1a96585b9efa5a566c8fd799528";
const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZmRjYzFhOTY1ODViOWVmYTVhNTY2YzhmZDc5OTUyOCIsInN1YiI6IjY0Y2JhMWRjNGZkMTQxMDE0NmI3NzY1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.STY84uWtZmmUp6p76-nnEMCjRqflRhriDWmUmPgsmy8",
  },
};
export const getSearchMovies = async (searchMovie, page, limit) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${searchMovie}&include_adult=false&language=en-US&page=${page}&limits=${limit}`,
    options
  );
  return response;
};
