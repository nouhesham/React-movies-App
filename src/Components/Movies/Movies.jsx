import List from "../MoviesList/List";
import { fetchMovies } from "../../Redux/Slices/MoviesSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { useSelector } from "react-redux";
const Movies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);
  const moviesList = useSelector((store) => store.movies.moviesList);
  console.log(moviesList);
  const searchResults = useSelector((store) => store.search.results);

  return (
    <div>
      <List movies={searchResults?.results || moviesList}></List>
    </div>
  );
};
export default Movies;
