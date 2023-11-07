import Movies from "../Movies/Movies";
import InputGroup from "../InputGroup/InputGroup";
import CarouselFadeExample from "../Caroussel/Caroussel";
import { useSelector } from "react-redux";

const Home = () => {
  const moviesList = useSelector((store) => store.movies.moviesList);

  return (
    <div>
      <CarouselFadeExample movies={moviesList} />
      <InputGroup />
      <Movies />
    </div>
  );
};

export default Home;
