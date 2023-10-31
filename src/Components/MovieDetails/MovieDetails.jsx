import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import "react-circular-progressbar/dist/styles.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Container } from "react-bootstrap";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { CircularProgressbar } from "react-circular-progressbar";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const params = useParams();
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

  const percentage = Math.floor(movie.vote_average * 10);

  return (
    <div style={{ height: "100vh" }}>
      <div
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}")`,
          position: "relative",
          backgroundRepeat: "no-repeat",
          height: "30rem",
        }}
      >
        <div className={styles.overlay}></div>
        <Container>
          <div className="row mt-0 p-md-0 p-sm-0">
            <div className="col-lg-4 mt-0 p-md-3">
              <div className={styles.img}>
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                />
              </div>
            </div>
            <div className="col-lg-8 p-5 " style={{ zIndex: "1" }}>
              <div className={styles.details}>
                <p className={styles.date}>
                  {new Date(movie.release_date)?.getFullYear()}
                </p>
                <h3>{movie.title || movie.original_name}</h3>
                <p className={styles.description}>
                  {movie?.overview?.slice(0, 150)}
                </p>

                <div style={{ width: "5rem" }}>
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    strokeWidth={5}
                    styles={{
                      text: { fill: "orange" },
                      path: { stroke: "orange" },
                      trail: { stroke: "gray" },
                    }}
                  />
                </div>
                <div className="generes mt-4 mb-2">
                  <div>
                    {movie.genres?.map((genre) => (
                      <span className={styles.genre} key={genre.id}>
                        {genre.name}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="d-flex  align-items-center ">
                  <div className={styles.icon}>
                    <FontAwesomeIcon icon={faPlay} />
                  </div>
                  <span className="ms-3 pt-3 me-3">
                    <a
                      href={movie.homepage}
                      className="text-danger text-decoration-none"
                    >
                      Watch the trailer
                    </a>
                  </span>
                  <span className="pt-3">Runtime:{movie.runtime} </span>
                  <span className="ms-2 pt-3">seconds</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default MovieDetails;
