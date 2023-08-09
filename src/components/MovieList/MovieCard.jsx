import { Card, Col, Row } from "antd";
import { IMAGE_URL } from "../../services/apiConfig";
import style from "./Movies.module.css";
import { useNavigate } from "react-router-dom";
import Meta from "antd/es/card/Meta";

const Movie = ({ item }) => {
  const navigate = useNavigate();
  return (
    <>
      <Row>
        <Col span={24}>
          <Card
            onClick={() => navigate(`./${item.id}`)}
            hoverable
            style={{ width: 240 }}
            className={style.movie_card}
            cover={
              <img
                alt="example"
                src={
                  item.poster_path
                    ? `${IMAGE_URL}${item.poster_path}`
                    : "https://www.shutterstock.com/image-vector/image-not-found-grayscale-photo-260nw-1737334631.jpg"
                }
              />
            }
          >
            <Meta
              title={item.title ? item.title : "Name Not found"}
              description={
                item.release_date ? item.release_date : "date not mentioned"
              }
            />
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default Movie;
