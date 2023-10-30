import List from "../MoviesList/List";
import { fetchMovies } from "../../Redux/Slices/MoviesSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

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

  const [items, setitem] = useState([]);

  useEffect(() => {
    if (searchResults?.results?.length > 0) {
      setitem(searchResults.results);
    } else if (moviesList.length > 0) {
      setitem(moviesList);
    }
  }, [moviesList, searchResults]);

  useEffect(() => {
    if (selectedMediaType) {
      setitem(items.filter((movie) => movie.media_type === selectedMediaType));
    }
  }, [selectedMediaType]);

  return (
    <div>
      <List movies={items}></List>
    </div>
  );
};
export default Movies;
