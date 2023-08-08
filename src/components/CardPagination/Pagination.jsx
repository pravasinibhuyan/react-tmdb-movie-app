import style from "./Pagination.module.css";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
const Pagination = ({ page, setPage, isPreviousData, moviesData }) => {
  return (
    <div className={style.paginationBox}>
      <button
        className={style.paginationArrow}
        onClick={() => setPage((old) => Math.max(old - 1, 0))}
        disabled={page === 1}
      >
        <LeftOutlined />
        Prev
      </button>
      <button
        className={style.paginationArrow}
        onClick={() => {
          if (!isPreviousData) {
            setPage((old) => old + 1);
          }
        }}
        disabled={moviesData?.total_pages === page}
      >
        Next
        <RightOutlined />
      </button>
    </div>
  );
};
export default Pagination;
