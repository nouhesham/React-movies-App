import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "react-bootstrap";
import styles from "./styles.module.css";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const MovieDetails = () => {
  const params = useParams();
  console.log(params);
  const [movie, setMovie] = useState({});

  const searchMovie = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/${params.media_type}/${params.id}?api_key=14bdd69ce887376edfafb09f23f78fe9`
    );
    setMovie(response.data);
  };

  useEffect(() => {
    searchMovie();
  }, []);

  return (
    <div>
      <div className="row position-relative">
        <div className={styles.overlay}></div>
        <img
          src={`  https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}`}
          alt={`${movie.id}`}
        ></img>
      </div>
      <div className="row mt-0 p-md-0 p-sm-0">
        <div className={styles.flex}>
          <div className="col-lg-4 mt-0 p-md-3">
            <div className={styles.img}>
              <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              />
            </div>
          </div>
          <div className="col-lg-8 p-4">
            <div className={styles.details}>
              <p className={styles.date}>
                {new Date(movie.release_date).getFullYear()}
              </p>
              <h3>{movie.title}</h3>
              <p className={styles.description}>{movie.overview}</p>

              <div>
                <span className={styles.rating}>
                  {movie.vote_average}
                  <sub className={styles.imdb}>IMDb</sub>
                </span>
              </div>
              <div className="d-flex  align-items-center ">
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={faPlay} />
                </div>
                <span className="ms-3 pt-3">Watch the trailer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
