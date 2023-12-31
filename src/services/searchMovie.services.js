import axios from "axios";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZmRjYzFhOTY1ODViOWVmYTVhNTY2YzhmZDc5OTUyOCIsInN1YiI6IjY0Y2JhMWRjNGZkMTQxMDE0NmI3NzY1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.STY84uWtZmmUp6p76-nnEMCjRqflRhriDWmUmPgsmy8",
  },
};
export const getSearchMovie = async (searchMovie, page) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${searchMovie}&include_adult=false&language=en-US&page=${page}`,
    options
  );
  return response;
};
