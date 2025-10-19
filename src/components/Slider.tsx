function Slider() {
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
  <div className="carousel-item active">
    <img
      src="https://tse4.mm.bing.net/th/id/OIP.xe3tSWhRQO1uOloNgwWLwgHaHa?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"
      className="d-block w-100"
      style={{ height: "500px", objectFit: "fill" }}
      alt="..."
    />
  </div>
  <div className="carousel-item">
    <img
      src="https://tse4.mm.bing.net/th/id/OIP.pH33RDYnaUokNjSrZ1uYZgHaEy?cb=12&w=639&h=413&rs=1&pid=ImgDetMain&o=7&rm=3"
      className="d-block w-100"
      style={{ height: "500px", objectFit: "fill" }}
      alt="..."
    />
  </div>
  <div className="carousel-item">
    <img
      src="https://tse2.mm.bing.net/th/id/OIP.IRhoEIIFAu08XZ_pyiunPQHaE9?cb=12&w=636&h=426&rs=1&pid=ImgDetMain&o=7&rm=3"
      className="d-block w-100"
      style={{ height: "500px", objectFit: "fill" }}
      alt="..."
    />
  </div>
</div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Slider;
