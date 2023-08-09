import style from "./Header.module.css";
import { EllipsisOutlined } from "@ant-design/icons";

const CommonHeader = () => {
  return (
    <>
      <div className={style.header}>
        <h1>THE MOVIE HUB</h1>
        <div className={style.right_menu}>
          <h2>Home</h2>
          <span className={style.sort}>
            <EllipsisOutlined />
          </span>
        </div>
      </div>
    </>
  );
};
export default CommonHeader;
