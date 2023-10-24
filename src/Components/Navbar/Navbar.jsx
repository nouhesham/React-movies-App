import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const Navbarsection = () => {
  return (
    <Navbar
      className="nav border-bottom bg-white sticky-top"
      data-bs-theme="light"
      expand="sm"
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Tmdb-312x276-logo.png"
            alt="logo"
            style={{ width: "70px" }}
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className="text-dark fw-bold">
              Home
            </Nav.Link>
            <Nav.Link href="/movies" className="text-dark fw-bold">
              Movies
            </Nav.Link>
            <Nav.Link href="/tvshows" className="text-dark fw-bold">
              Tv shows
            </Nav.Link>
            <Nav.Link href="/celeb" className="text-dark fw-bold">
              Celeb
            </Nav.Link>
            <Nav.Link href="/blog" className="text-dark fw-bold">
              Blog
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarsection;
