import React, { useState } from "react";
import Select from "react-select";

const options = [
  { value: "movie", label: "Movie" },
  { value: "tv", label: "Tvshow" },
];

const SelectComponent = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const handleMediaChange = (selectedOption) => {
    setSelectedMedia(selectedOption);
    console.log(selectedOption);
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
