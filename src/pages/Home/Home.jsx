import { useQuery } from "@tanstack/react-query";
import style from "./Home.module.css";
import { GET_SEARCH_MOVIES } from "../../constant/queryKey";
import { useMemo, useState } from "react";
import Pagination from "../../components/CardPagination/Pagination";
import Movies from "../../components/MovieList/Movies";
import SearchInput from "../../components/SearchBar/SearchInput";
import { Spin } from "antd";
import { useNavigate } from "react-router-dom";
import { getAllMovies } from "../../services/movies.services";

const HomePage = () => {
  const [page, setPage] = useState(1);
  const [searchMovie, setSearchMovie] = useState();
  const navigate = useNavigate();

  //========================== Define UseQuery ========================//
  const limit = 8;
  const { data, isLoading, isPreviousData } = useQuery(
    [GET_SEARCH_MOVIES, page],
    () => getAllMovies(page, limit),
    {
      keepPreviousData: true,
    }
  );

  //========================== Memorized Api Data ========================//
  const moviesData = useMemo(() => {
    if (!data) {
      return null;
    }
    return data.data;
  }, [data]);

  if (searchMovie) {
    navigate("/search-movies", { state: { result: searchMovie } });
  }
  return (
    <div className={style.homeHeader}>
      <SearchInput setSearchMovie={setSearchMovie} />
      {isLoading ? (
        <div className="example">
          <Spin />
        </div>
      ) : moviesData?.results?.length ? (
        <>
          <h2 className={style.trending}>Now in Trending ...</h2>
          <Movies moviesData={moviesData} />
          <Pagination
            page={page}
            setPage={setPage}
            isPreviousData={isPreviousData}
            moviesData={moviesData}
          />
        </>
      ) : (
        <p>Data Not Found..........</p>
      )}
    </div>
  );
};

export default HomePage;
