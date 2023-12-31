import Search from "antd/es/input/Search";
import style from "./Search.module.css";
import { Col, Row } from "antd";

const SearchInput = ({ setSearchMovie }) => {
  const onSearch = (value) => {
    setSearchMovie(value);
  };
  return (
    <div className={style.searchBar}>
      <Row>
        <Col span={18}>
          <Search
            placeholder="Search movie"
            allowClear
            enterButton="Search"
            size="large"
            className={style.searching}
            onSearch={onSearch}
            style={{ color: "red" }}
          />
        </Col>
      </Row>
    </div>
  );
};
export default SearchInput;
