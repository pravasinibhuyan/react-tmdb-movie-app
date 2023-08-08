import { useQuery } from "@tanstack/react-query";
import { GET_SEARCH_MOVIES } from "../../constant/queryKey";
import { useMemo, useState } from "react";
import Pagination from "../../components/CardPagination/Pagination";
import Movies from "../../components/MovieList/Movies";
import style from "./SearchResult.module.css";
import { getSearchMovies } from "../../services/searchMovies.services";
import { Spin } from "antd";
import { useLocation } from "react-router-dom";

const SearchResult = () => {
  const [page, setPage] = useState(1);
  const location = useLocation();

  //========================== Define UseQuery ========================//
  const limit = 8;
  const { data, isLoading, isPreviousData } = useQuery(
    [GET_SEARCH_MOVIES, location.state.result, page],
    () => getSearchMovies(location.state.result, page, limit),
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

  return (
    <div className={style.search_result_div}>
      <h2
        className={style.search_result}
      >{`Search Result For  '${location.state.result}'`}</h2>
      {isLoading ? (
        <div className="example">
          <Spin />
        </div>
      ) : moviesData?.results?.length ? (
        <>
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

export default SearchResult;
