import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
const List = ({ movies }) => {
  const baseUrl = "https://image.tmdb.org/t/p/w500/";
  console.log(movies);

  return (
    <div>
      <Container>
        <h6
          className="text-left fw-bold ps-1"
          style={{ marginBottom: "6rem", marginTop: "6rem" }}
        >
          Latest Movies & Tv-show
        </h6>
        <div className="row mt-5 mb-5 justify-content-center">
          {movies &&
            movies.length > 0 &&
            movies?.map((mov) => {
              return (
                <div
                  className="col-lg-3 col-sm-12 col-md-6 p-2 d-flex justify-content-center"
                  key={mov.id}
                >
                  <Card style={{ width: "18rem" }}>
                    <Link to={`/movies/${mov.media_type}/${mov.id}`}>
                      <Card.Img
                        variant="top"
                        src={
                          `${baseUrl ?? ""}/${mov.poster_path}` ||
                          "https://placehold.co/600x400"
                        }
                      />
                    </Link>

                    <Card.Body>
                      <Card.Title className="text-center">
                        {mov.title ? mov.title : mov.original_name.slice(0, 21)}
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
        </div>
      </Container>
    </div>
  );
};
export default List;
