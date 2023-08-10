import { useNavigate, useSearchParams } from "react-router-dom";
import style from "./Pagination.module.css";
import { Pagination } from "antd";
const CardPagination = ({ totalElements, pathname, params }) => {
  const navigate = useNavigate();
  let [searchParams] = useSearchParams();
  return (
    <div className={style.paginationBox}>
      <Pagination
        defaultCurrent={1}
        total={totalElements >= 500 ? 500 : totalElements}
        showSizeChanger={false}
        pageSize={20}
        current={searchParams.get("page")}
        responsive={false}
        onChange={(item) => {
          navigate({
            pathname: pathname,
            search: `${params}=${item}`,
          });
        }}
      />
    </div>
  );
};
export default CardPagination;
