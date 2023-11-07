import Carousel from "react-bootstrap/Carousel";

function CarouselFadeExample({ movies }) {
  const limitedMovies = movies?.slice(0, 3);
  return (
    <Carousel fade>
      {limitedMovies?.map((movie) => (
        <Carousel.Item key={movie.id}>
          <img
            style={{ width: "100%" }}
            src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}`}
            alt={movie.title}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselFadeExample;
