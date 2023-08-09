import { useNavigate } from "react-router-dom";
import style from "./Header.module.css";

const CommonHeader = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <>
      <div className={style.header}>
        <h1 onClick={handleClick}>THE MOVIE HUB</h1>
        <div className={style.right_menu}>
          <h2 onClick={handleClick}>Home</h2>
        </div>
      </div>
    </>
  );
};
export default CommonHeader;
