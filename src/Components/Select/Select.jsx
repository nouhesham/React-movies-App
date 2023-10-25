import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import { fetchMovies } from "../../Redux/Slices/MoviesSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";

const options = [
  { value: "movie", label: "Movie" },
  { value: "tv", label: "Tvshow" },
];

const SelectComponent = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const handleMediaChange = (selectedOption) => {
    setSelectedMedia(selectedOption.value);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);
  const moviesApislice = useSelector((state) =>
    state.movies.moviesList.filter((mov) => {
      return mov.media_type === selectedMedia;
    })
  );

  return (
    <div>
      <Select
        id="movie-media-select"
        name="movieMedia"
        value={selectedMedia}
        options={options}
        onChange={handleMediaChange}
        placeholder="Media type"
        style={{ backgroundColor: "rgb(247, 247, 247)" }}
      />
    </div>
  );
};

export default SelectComponent;
