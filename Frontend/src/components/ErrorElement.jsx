import { Link, useRouteError } from "react-router-dom";
import styles from "./ErrorElement.module.css";

function ErrorElement() {
  let error = useRouteError();

  return (
    <div className={`${styles.outer} container`}>
      <h1 className={`${styles.heading1}`}>Oops!</h1>
      <h5>
        {error.status} - {error.data}
      </h5>
      <p className={`${styles.description}`}>{error.statusText}</p>
      <div className="button mx-auto" style={{ width: "fit-content" }}>
        <Link to="/" className="btn btn-outline-danger">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default ErrorElement;
