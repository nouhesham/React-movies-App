import { useState, useEffect } from "react";
import axios from "axios";
const UseMovies = () => {
  const [Moviesapi, setMovies] = useState({});
  const [loader, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const LoadMovies = async () => {
      try {
        let MoviesList;

        MoviesList = await axios.get(
          "https://api.themoviedb.org/3/trending/all/day?api_key=14bdd69ce887376edfafb09f23f78fe9"
        );
        setMovies((prev) =>
          Array.isArray(prev)
            ? [...prev, ...MoviesList.data.results]
            : MoviesList.data.results
        );
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    };
    LoadMovies();
  }, []);

  return [loader, error, Moviesapi];
};

export default UseMovies;
