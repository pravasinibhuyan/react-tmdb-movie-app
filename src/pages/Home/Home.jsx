import { useQuery } from "@tanstack/react-query";
import style from "./Home.module.css";
import { GET_SEARCH_MOVIES } from "../../constant/queryKey";
import { useEffect, useMemo, useState } from "react";
import SearchInput from "../../components/SearchBar/SearchInput";
import { Col, Row, Spin } from "antd";
import { useNavigate } from "react-router-dom";
import { getAllMovies } from "../../services/movies.services";
import CardPagination from "../../components/CardPagination/Pagination";
import Movie from "../../components/MovieList/MovieCard";

const HomePage = () => {
  const [pageCount, setPageCount] = useState(1);
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

  //======================== Set page Count from api data ==================//
  useEffect(() => {
    if (data) {
      setPageCount(data && data.data.total_results);
    }
  }, [data]);

  //=====================Scroll to top on pagination =================//
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [currentPage]);

  //======================= Navigate to Search Page ====================//

  if (searchedMovie) {
    navigate({
      pathname: "/searched-movie",
      search: `?name=${searchedMovie}&page=${currentPage}`,
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
