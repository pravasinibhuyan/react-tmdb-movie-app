import { useQuery } from "@tanstack/react-query";
import style from "./Home.module.css";
import { GET_ALL_MOVIE } from "../../constant/queryKey";
import { useEffect, useMemo, useState } from "react";
import SearchInput from "../../components/SearchBar/SearchInput";
import { Col, Row, Spin } from "antd";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getAllMovie } from "../../services/movie.services";
import CardPagination from "../../components/CardPagination/Pagination";
import Movie from "../../components/MovieList/MovieCard";

const HomePage = () => {
  const [totalElements, setTotalElements] = useState();
  const [searchedMovie, setSearchedMovie] = useState();
  const navigate = useNavigate();
  let [searchParams] = useSearchParams();

  //========================== Define UseQuery ========================//

  const { data, isLoading } = useQuery(
    [GET_ALL_MOVIE, searchParams.get("page")],
    () => getAllMovie(searchParams.get("page") || 1),
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

  //======================== Set page Count from api data ==================//
  useEffect(() => {
    if (data) {
      setTotalElements(data && data.data.total_results);
    }
  }, [data]);

  //=====================Scroll to top on pagination =================//
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [searchParams]);

  //======================= Navigate to Search Page ====================//

  if (searchedMovie) {
    navigate({
      pathname: "/searched-movie",
      search: `?name=${searchedMovie}&page=${1}`,
    });
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
          <h2 className={style.trending}>On trending ...</h2>
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
            pathname={"./"}
            params="?page"
          />
        </>
      ) : (
        <p>Data Not Found..........</p>
      )}
    </div>
  );
};

export default HomePage;
