import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { searchMoviesAsync } from "../../Redux/Slices/SearchSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Search = () => {
  const dispatch = useDispatch();
  const [setsearch, setSearchedmovie] = useState(null);
  const handleSearch = (event) => {
    let searchedfilm = event.target.value;
    if (searchedfilm !== null) {
      setSearchedmovie(searchedfilm);
      dispatch(searchMoviesAsync(searchedfilm));
    }
  };
  return (
    <div>
      <InputGroup className="mb-3 ">
        <Button
          variant="outline-secondary "
          className="search-button"
          id="button-addon1"
        >
          <FontAwesomeIcon icon={faSearch} />
        </Button>
        <Form.Control
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          placeholder="find movies,Tvshows,documentry and more"
          className="search-button"
          onChange={handleSearch}
          style={{ backgroundColor: "rgb(247, 247, 247)" }}
        />
      </InputGroup>
    </div>
  );
};
export default Search;
