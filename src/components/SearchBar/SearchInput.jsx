import Search from "antd/es/input/Search";
import style from "./Search.module.css";

const SearchInput = ({ setSearchMovie }) => {
  const onSearch = (value) => {
    setSearchMovie(value);
  };
  return (
    <div className={style.searchBar}>
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        className={style.searching}
        onSearch={onSearch}
      />
    </div>
  );
};
export default SearchInput;
