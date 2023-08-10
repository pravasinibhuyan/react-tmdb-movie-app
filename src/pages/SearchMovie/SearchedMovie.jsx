import { useQuery } from "@tanstack/react-query";
import { GET_SEARCH_MOVIE } from "../../constant/queryKey";
import { useEffect, useMemo, useState } from "react";
import style from "./SearchResult.module.css";
import { getSearchMovie } from "../../services/searchMovie.services";
import { Col, Row, Spin } from "antd";
import { useSearchParams } from "react-router-dom";
import CardPagination from "../../components/CardPagination/Pagination";
import Movie from "../../components/MovieList/MovieCard";

const SearchedMovie = () => {
  const [totalElements, setTotalElements] = useState();
  const [searchParams] = useSearchParams();

  //========================== Define UseQuery ========================//

  const { data, isLoading } = useQuery(
    [GET_SEARCH_MOVIE, searchParams.get("page")],
    () => getSearchMovie(searchParams.get("name"), searchParams.get("page")),
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
      setTotalElements(data && data.data.total_results);
    }
  }, [data]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [searchParams]);

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
                <Col
                  key={item.id}
                  xxl={{ span: 4, offset: 0 }}
                  xl={{ span: 4, offset: 0 }}
                  lg={{ span: 6, offset: 0 }}
                  md={{ span: 8, offset: 0 }}
                  sm={{ span: 12, offset: 12 }}
                  xs={{ span: 24, offset: 12 }}
                >
                  <Movie item={item} />
                </Col>
              ))}
            </Row>
            <CardPagination
              totalElements={totalElements}
              params={`name=${searchParams.get("name")}&page`}
              pathname={"/searched-movie"}
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
