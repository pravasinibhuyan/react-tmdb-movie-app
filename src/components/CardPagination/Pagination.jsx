import style from "./Pagination.module.css";
import { Pagination } from "antd";
const CardPagination = ({ pageCount, setCurrentPage }) => {
  console.log(pageCount, "pagecount");
  return (
    <div className={style.paginationBox}>
      <Pagination
        defaultCurrent={1}
        total={pageCount}
        showSizeChanger={false}
        responsive={true}
        onChange={(item) => {
          setCurrentPage(item);
        }}
      />
    </div>
  );
};
export default CardPagination;
