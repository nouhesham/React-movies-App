import List from "../MoviesList/List";
import { fetchMovies } from "../../Redux/Slices/MoviesSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { selectMediaType } from "../../Redux/Slices/MediatypeSlice";

import { useSelector } from "react-redux";
import SelectComponent from "../Select/Select";
const Movies = () => {
  const [selectedMedia, setSelectedMedia] = useState("movie");
  const dispatch = useDispatch();

  const moviesList = useSelector((store) => store.movies.moviesList);
  const searchResults = useSelector((store) => store.search.results);
  const selectedMediaType = useSelector(
    (state) => state.mediatype.selectedMediaType
  );

  const handleMediaChange = (selectedOption) => {
    setSelectedMedia(selectedOption.value);
    dispatch(selectMediaType(selectedOption.value));
    console.log(selectedMedia);
  };

  const [items, setitem] = useState([]);

  useEffect(() => {
    if (searchResults?.results?.length > 0) {
      setitem(searchResults.results);
    } else {
      setitem(moviesList);
    }
    if (selectedMediaType) {
      console.log(selectedMediaType);
      setitem(
        moviesList.filter((movie) => movie.media_type === selectedMediaType)
      );
    }
  }, [moviesList, searchResults, selectedMediaType]);
  useEffect(() => {
    if (selectedMediaType && searchResults?.length > 0) {
      setitem(
        moviesList.filter((movie) => movie.media_type === selectedMediaType)
      );
    }
  }, [selectedMediaType, items, moviesList, searchResults]);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div>
      <div className="col-lg-8 mt-2 d-flex  justify-content-end">
        <SelectComponent
          handleMediaChange={handleMediaChange}
          selectedMedia={selectedMedia}
        />
      </div>
      <List movies={items}></List>
    </div>
  );
};
export default Movies;
