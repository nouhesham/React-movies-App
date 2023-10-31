import React, { useState, useEffect } from "react";
import Select from "react-select";

const options = [
  { value: "movie", label: "Movie" },
  { value: "tv", label: "Tvshow" },
];

const SelectComponent = ({ handleMediaChange, selectedMedia }) => {
  const handleChange = (selectedOption) => {
    handleMediaChange(selectedOption);
  };
  return (
    <div>
      <Select
        id="movie-media-select"
        name="movieMedia"
        value={selectedMedia}
        options={options}
        onChange={handleChange}
        placeholder="Media type"
        style={{ backgroundColor: "rgb(247, 247, 247)" }}
      />
    </div>
  );
};

export default SelectComponent;
