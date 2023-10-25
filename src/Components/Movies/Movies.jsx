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

  const searchResults = useSelector((store) => store.search.results);
  const selectedMediaType = useSelector(
    (state) => state.mediatype.selectedMediaType
  );

  const filteredMovies = selectedMediaType
    ? moviesList.filter((movie) => movie.media_type === selectedMediaType)
    : moviesList;
  return (
    <div>
      <List
        movies={
          (searchResults?.results && searchResults?.results.length > 0
            ? searchResults?.results
            : filteredMovies) || filteredMovies
        }
      ></List>
    </div>
  );
};
export default Movies;
