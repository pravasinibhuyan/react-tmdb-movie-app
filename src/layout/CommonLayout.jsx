import Footer from "../components/Footer/Footer";
import CommonHeader from "../components/Header/Header";
import PropTypes from "prop-types";

CommonLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function CommonLayout({ children }) {
  return (
    <>
      <CommonHeader />
      {children}
      <Footer />
    </>
  );
}
