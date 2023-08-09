import { useParams } from "react-router-dom";
import style from "./Details.module.css";
import { useMemo } from "react";
import { IMAGE_URL } from "../../services/apiConfig";
import { Col, Row } from "antd";
import { useQuery } from "@tanstack/react-query";
import { getMovieDetails } from "../../services/movieDetails.services";
import { MOVIE_DETAILS } from "../../constant/queryKey";

const Details = () => {
  const { id } = useParams();

  console.log(id);

  const { data } = useQuery([MOVIE_DETAILS], () => getMovieDetails(id));
  const detailsData = useMemo(() => {
    if (!data) {
      return null;
    }
    return data.data;
  }, [data]);

  return (
    <div className={style.details}>
      <Row justify="center">
        <Col span={24}>
          <div className={style.details_box}>
            <img
              src={
                detailsData?.poster_path
                  ? `${IMAGE_URL}${detailsData?.poster_path}`
                  : "https://www.shutterstock.com/image-vector/image-not-found-grayscale-photo-260nw-1737334631.jpg"
              }
              alt="pic"
            />
            <div className={style.details_card_content}>
              <p className={style.title}>
                <span>Name</span> : {detailsData?.original_title}
              </p>
              <p className={style.date}>
                <span>Release Data</span> : {detailsData?.release_date}
              </p>
              <p className={style.date}>
                <span>Popularity</span> : {detailsData?.popularity}
              </p>
              <p className={style.date}>
                <span> Original Language</span> :{" "}
                {detailsData?.original_language}
              </p>
              <p className={style.description}>
                <span>Overview</span> : {detailsData?.overview}
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Details;
