function Homepage() {
  return (
    <div id="carouselExample" className="carousel slide container mx-auto mt-4">
      <div className="carousel-inner">
        <div className="carousel-item active caraouselDiv">
          <img src="/images/wall1.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item  caraouselDiv">
          <img src="/images/wall2.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item  caraouselDiv">
          <img src="/images/wall3.jpg" className="d-block w-100" alt="..." />{" "}
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Homepage;
