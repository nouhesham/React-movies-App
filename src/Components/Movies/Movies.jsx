import List from "../MoviesList/List";
import { fetchMovies } from "../../Redux/Slices/MoviesSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import SelectComponent from "../Select/Select";
const Movies = () => {
  const [selectedMedia, setSelectedMedia] = useState("movie");
  const [items, setitem] = useState([]);
  const dispatch = useDispatch();
  const moviesList = useSelector((store) => store.movies.moviesList);
  const searchResults = useSelector((store) => store.search.results);

  const handleMediaChange = (selectedOption) => {
    setSelectedMedia(selectedOption.value);
    setitem(
      (searchResults?.results || moviesList).filter(
        (mov) => mov.media_type === selectedOption.value
      )
    );
  };

  useEffect(() => {
    if (searchResults?.results?.length > 0) {
      setitem(searchResults.results);
    } else {
      setitem(moviesList);
    }
  }, [moviesList, searchResults]);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div>
      <div className="col-lg-10 mt-2 d-flex  justify-content-end ">
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
