import { useLocation } from "react-router-dom";
import style from "./Details.module.css";
import { useEffect, useState } from "react";
import { IMAGE_URL } from "../../services/apiConfig";
import { Col, Row } from "antd";

const Details = () => {
  const [data, setData] = useState();
  const location = useLocation();

  useEffect(() => {
    setData(location.state.items);
  }, [location]);
  console.log(data);
  return (
    <div className={style.details}>
      <Row justify="center">
        <Col span={[10]}>
          <div className={style.details_box}>
            <img
              src={
                data?.poster_path
                  ? `${IMAGE_URL}${data?.poster_path}`
                  : "https://www.shutterstock.com/image-vector/image-not-found-grayscale-photo-260nw-1737334631.jpg"
              }
              alt="pic"
            />
            <p className={style.title}>Name : {data?.original_title}</p>
            <p className={style.date}>Release Data : {data?.release_date}</p>
            <p className={style.date}>Popularity : {data?.popularity}</p>
            <p className={style.date}>
              Original Language : {data?.original_language}
            </p>

            <p className={style.description}> Overview : {data?.overview}</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Details;
