import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Container } from "react-bootstrap";
library.add(fab);
const Footer = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/bMRofddQE58ToKM7GtdJy6MuKoY.jpg')",
        backgroundBlendMode: "darken",
        backgroundColor: "lightgray",
      }}
    >
      <Container>
        <div className="row mt-4 justify-content-center ">
          <div className="col-lg-2 d-flex align-self-end"></div>
          <div className="col-lg-6 d-flex  " style={{ padding: "6rem" }}>
            <FontAwesomeIcon
              icon={["fab", "twitter"]}
              size="2x"
              style={{ marginRight: "6rem", cursor: "pointer" }}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              icon={["fab", "facebook-square"]}
              size="2x"
              style={{ marginRight: "6rem", cursor: "pointer" }}
            />
            <FontAwesomeIcon
              icon={["fab", "instagram"]}
              size="2x"
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
        <p className="text-muted m-0">&copy; All rights reserved.</p>
      </Container>
    </div>
  );
};

export default Footer;
