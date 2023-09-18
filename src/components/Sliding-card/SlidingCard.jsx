import Slider from "react-slick";
import { IMAGE_URL } from "../../services/apiConfig";

function SlidingCard({ data, title }) {
  const settings = {
    dots: true,
  };

  return (
    <div style={{ background: "#419be0" }}>
      <h2> Single Item</h2>
    </div>
  );
}
export default SlidingCard;
//  {
//    data?.results?.map((item) => (
//      <div key={item.id}>
//        <img
//          alt="example"
//          src={
//            item.poster_path
//              ? `${IMAGE_URL}${item.poster_path}`
//              : "https://www.shutterstock.com/image-vector/image-not-found-grayscale-photo-260nw-1737334631.jpg"
//          }
//        />
//        <p>{item.original_title ? item.original_title : "Name Not found"}</p>
//      </div>
//    ));
//  }
