import { Col, Row } from "antd";
import { IMAGE_URL } from "../../services/apiConfig";
import style from "./Movies.module.css";
import { useNavigate } from "react-router-dom";

const Movies = ({ moviesData }) => {
  const navigate = useNavigate();
  return (
    <>
      <Row>
        {moviesData?.results?.map((item) => (
          <Col key={item.id} span={6}>
            <div
              className={style.movie_card}
              onClick={() =>
                navigate(`./${item.id}`, { state: { items: item } })
              }
            >
              <img
                src={
                  item.poster_path
                    ? `${IMAGE_URL}${item.poster_path}`
                    : "https://www.shutterstock.com/image-vector/image-not-found-grayscale-photo-260nw-1737334631.jpg"
                }
                alt="pic"
                width={220}
                height={250}
              />
              <div className={style.movieName}>
                <h2>{item.title}</h2>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};
export default Movies;
