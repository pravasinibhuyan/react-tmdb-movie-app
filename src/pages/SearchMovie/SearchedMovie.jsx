import { useQuery } from "@tanstack/react-query";
import { GET_SEARCH_MOVIES } from "../../constant/queryKey";
import { useEffect, useMemo, useState } from "react";
import style from "./SearchResult.module.css";
import { getSearchMovies } from "../../services/searchMovies.services";
import { Col, Row, Spin } from "antd";
import { useSearchParams } from "react-router-dom";
import CardPagination from "../../components/CardPagination/Pagination";
import Movie from "../../components/MovieList/MovieCard";

const SearchedMovie = () => {
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams] = useSearchParams();

  //========================== Define UseQuery ========================//

  const { data, isLoading } = useQuery(
    [GET_SEARCH_MOVIES, searchParams.get("name"), currentPage],
    () => getSearchMovies(searchParams.get("name"), currentPage),
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
      setPageCount(data && data.data.total_results);
    }
  }, [data]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [currentPage]);

  return (
    <div className={style.search_result_div}>
      <div className={style.searchCard}>
        <h2
          className={style.search_result}
        >{`Search Result For  '${searchParams.get("name")}'`}</h2>
        {isLoading ? (
          <div className="example">
            <Spin />
          </div>
        ) : movieData?.results?.length ? (
          <>
            <Row gutter={[20, 50]}>
              {movieData?.results?.map((item) => (
                <Col key={item.id} span={4}>
                  <Movie item={item} />
                </Col>
              ))}
            </Row>
            <CardPagination
              pageCount={pageCount}
              setCurrentPage={setCurrentPage}
            />
          </>
        ) : (
          <div className={style.noDataFountdiv}>
            <img
              src="https://www.shutterstock.com/image-vector/image-not-found-grayscale-photo-260nw-1737334631.jpg"
              alt="pic"
            />
            <p className={style.noDataFountPara}>No data found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchedMovie;
