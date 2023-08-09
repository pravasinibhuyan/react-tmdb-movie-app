import { useQuery } from "@tanstack/react-query";
import style from "./Home.module.css";
import { GET_SEARCH_MOVIES } from "../../constant/queryKey";
import { useEffect, useMemo, useState } from "react";
import Movies from "../../components/MovieList/Movies";
import SearchInput from "../../components/SearchBar/SearchInput";
import { Spin } from "antd";
import { useNavigate } from "react-router-dom";
import { getAllMovies } from "../../services/movies.services";
import CardPagination from "../../components/CardPagination/Pagination";

const HomePage = () => {
  const [pageCount, setPageCount] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchedMovie, setSearchedMovie] = useState();
  const navigate = useNavigate();

  //========================== Define UseQuery ========================//

  const { data, isLoading } = useQuery(
    [GET_SEARCH_MOVIES, currentPage],
    () => getAllMovies(currentPage),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );

  //========================== Memorized Api Data ========================//
  const movieData = useMemo(() => {
    if (!data) {
      return null;
    }
    return data.data;
  }, [data]);

  useEffect(() => {
    if (data) {
      setPageCount(data && data.data.total_pages);
    }
  }, [data]);
  if (searchedMovie) {
    navigate("/search-movies", { state: { result: searchedMovie } });
  }
  return (
    <div className={style.homeHeader}>
      <div className={style.searchdiv}>
        <SearchInput setSearchMovie={setSearchedMovie} />
      </div>
      {isLoading ? (
        <div className="example">
          <Spin />
        </div>
      ) : movieData?.results?.length ? (
        <>
          <h2 className={style.trending}>On Trending ...</h2>
          <Movies movieData={movieData} />
          <CardPagination
            pageCount={pageCount}
            setCurrentPage={setCurrentPage}
          />
        </>
      ) : (
        <p>Data Not Found..........</p>
      )}
    </div>
  );
};

export default HomePage;
