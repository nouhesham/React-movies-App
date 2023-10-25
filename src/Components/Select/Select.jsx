import React, { useState, useEffect } from "react";
import Select from "react-select";
import { selectMediaType } from "../../Redux/Slices/MediatypeSlice";
import { useDispatch } from "react-redux";
const options = [
  { value: "movie", label: "Movie" },
  { value: "tv", label: "Tvshow" },
];

const SelectComponent = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const dispatch = useDispatch();
  const handleMediaChange = (selectedOption) => {
    setSelectedMedia(selectedOption.value);
    dispatch(selectMediaType(selectedOption.value));
  };

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
