import Select from "react-select";

const options = [
  { value: "movie", label: "Movie" },
  { value: "tv", label: "Tvshow" },
];

const SelectComponent = ({ handleMediaChange, selectedMedia }) => {
  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <Select
        id="movie-media-select"
        name="movieMedia"
        value={selectedMedia}
        options={options}
        onChange={handleMediaChange}
        placeholder="Media type"
        style={{ backgroundColor: "rgb(247, 247, 247)", width: "4rem" }}
      />
    </div>
  );
};

export default SelectComponent;
