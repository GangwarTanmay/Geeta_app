import Footer from "./Footer";
import styles from "./Loader.module.css";
import Navbar from "./Navbar";

function Loader() {
  return (
    <>
      <Navbar></Navbar>
      <div className={`${styles.outer} container`}>
        <div className={`${styles.inner}`}></div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Loader;
