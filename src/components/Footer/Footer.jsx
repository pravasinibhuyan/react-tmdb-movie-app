import style from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={style.footer}>
        <h1>Created by Pravasini Bhuyan</h1>
        <div className={style.footerImg}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHsRVFzE0rRlk2QEHgpzm5UcqoAsi5KOHctebbGi3Z5FRk3KMkFIQJ6zCYeIMGlP6Mk08&usqp=CAU"
            alt="pic"
            height={120}
            width={150}
          />
        </div>
      </div>
    </>
  );
};
export default Footer;
