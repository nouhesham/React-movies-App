import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from "components/ExampleCarouselImage";

function CarouselFadeExample() {
  return (
    <Carousel fade style={{ height: "35rem" }}>
      <Carousel.Item>
        <img
          style={{ width: "100%" }}
          src="https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/bMRofddQE58ToKM7GtdJy6MuKoY.jpg"
          alt={1}
        ></img>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ width: "100%" }}
          src="https://image.tmdb.org/t/p/w1920_and_h800_multi_faces//eF6pkcpzxDCaQnJhaRlKdhhQebB.jpg"
          alt={2}
        ></img>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ width: "100%" }}
          src="https://image.tmdb.org/t/p/w1920_and_h800_multi_faces//628Dep6AxEtDxjZoGP78TsOxYbK.jpg"
          alt={3}
        ></img>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
