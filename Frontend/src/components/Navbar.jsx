import { Link } from "react-router-dom";

function Navbar() {
  let chapters = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ];

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand" to="/" style={{ color: "orangered" }}>
          <img
            src="../images/logo3.png"
            alt=""
            style={{ height: "4rem", width: "4rem" }}
          />
          Bhagavad Geeta
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Geeta
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Chapters
              </a>
              <ul className="dropdown-menu">
                {chapters.map((chapter) => (
                  <li key={chapter}>
                    <Link
                      to={`/chapter/${chapter}`}
                      className="dropdown-item"
                      style={{ cursor: "pointer" }}
                    >
                      📖 Chapter {chapter}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
          <form
            className="d-flex"
            role="search"
            method="get"
            action="http://localhost:8080/hello"
          >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
