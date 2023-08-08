import style from "./Header.module.css";

const CommonHeader = () => {
  return (
    <>
      <div className={style.header}>
        <h1>THE MOVIE HUB</h1>
        <h2>Home</h2>
      </div>
    </>
  );
};
export default CommonHeader;
