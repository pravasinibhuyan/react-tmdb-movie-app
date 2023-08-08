import Search from "antd/es/input/Search";
import style from "./Search.module.css";

const SearchInput = ({ setSearchMovie }) => {
  const onSearch = (value) => {
    setSearchMovie(value);
  };
  return (
    <div className={style.searchBar}>
      <Search
        placeholder="search here..."
        allowClear
        className={style.searching}
        onSearch={onSearch}
      />
    </div>
  );
};
export default SearchInput;
