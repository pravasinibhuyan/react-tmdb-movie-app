import { useQuery } from "@tanstack/react-query";
import { GET_SEARCH_MOVIES } from "../../constant/queryKey";
import { useEffect, useMemo, useState } from "react";
import Movies from "../../components/MovieList/Movies";
import style from "./SearchResult.module.css";
import { getSearchMovies } from "../../services/searchMovies.services";
import { Spin } from "antd";
import { useLocation } from "react-router-dom";
import CardPagination from "../../components/CardPagination/Pagination";

const SearchResult = () => {
  const [pageCount, setPageCount] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();

  //========================== Define UseQuery ========================//

  const { data, isLoading } = useQuery(
    [GET_SEARCH_MOVIES, location.state.result, currentPage],
    () => getSearchMovies(location.state.result, currentPage),
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

  return (
    <div className={style.search_result_div}>
      <div className={style.searchCard}>
        <h2
          className={style.search_result}
        >{`Search Result For  '${location.state.result}'`}</h2>
        {isLoading ? (
          <div className="example">
            <Spin />
          </div>
        ) : movieData?.results?.length ? (
          <>
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
    </div>
  );
};

export default SearchResult;
