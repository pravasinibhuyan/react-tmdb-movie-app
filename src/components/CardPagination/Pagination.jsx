import style from "./Pagination.module.css";
import { Pagination } from "antd";
const CardPagination = ({ pageCount, setCurrentPage }) => {
  return (
    <div className={style.paginationBox}>
      <Pagination
        defaultCurrent={1}
        total={pageCount}
        onChange={(item) => {
          setCurrentPage(item);
        }}
      />
    </div>
  );
};
export default CardPagination;
