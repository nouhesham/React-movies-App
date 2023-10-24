import LoaderComponent from "../LoaderComponent/Loader.Component";
import List from "../MoviesList/List";
import UseMovies from "../../Hook/UseMovies";

const Movies = () => {
  const [loader, error, Moviesapi] = UseMovies();
  return (
    <div>
      <LoaderComponent loader={loader} error={error}></LoaderComponent>
      <List movies={Moviesapi}></List>
    </div>
  );
};
export default Movies;
