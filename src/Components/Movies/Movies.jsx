import LoaderComponent from "../LoaderComponent/Loader.Component";
import List from "../MoviesList/List";
import UseMovies from "../../Hook/UseMovies";
import { useSelector } from "react-redux";

const Movies = () => {
  const [loader, error, Moviesapi] = UseMovies();
  const MoviesGlobalstate = useSelector(
    (store) => store.search.results.results
  );

  return (
    <div>
      <LoaderComponent loader={loader} error={error}></LoaderComponent>
      <List movies={!MoviesGlobalstate ? Moviesapi : MoviesGlobalstate}></List>
    </div>
  );
};
export default Movies;
