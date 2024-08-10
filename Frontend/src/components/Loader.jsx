import styles from "./Loader.module.css";

function Loader() {
  return (
    <>
      <div className={`${styles.outer} container`}>
        <div className={`${styles.inner}`}></div>
      </div>
    </>
  );
}

export default Loader;
