import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
library.add(fab);
const Footer = () => {
  const footerStyle = {
    background: "rgb(252,187,255)",
    background:
      "radial-gradient(circle, rgba(252,187,255,1) 0%, rgba(239,222,155,0.9164915966386554) 89%)",
  };

  return (
    <div style={footerStyle}>
      <Container>
        <footer
          className=" text-white pt-5 pb-5 "
          style={{ marginTop: "12rem" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h4>About Us</h4>
                <p className="text-danger">
                  "Movies are a gateway to different worlds, emotions, and
                  stories. Let us take you on a cinematic journey."
                </p>
              </div>

              <div className="col-md-2">
                <h4>Quick Links</h4>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-decoration-none text-danger" href="/">
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-decoration-none text-danger"
                      href="/movies"
                    >
                      Movies
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-decoration-none text-danger"
                      href="/about"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-decoration-none text-danger"
                      href="/contact"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="social-icons col-md-3 d-flex justify-content-center align-items-center ">
                <a href="#" className="m-3">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    size="xl"
                    style={{ color: "red" }}
                  />
                </a>
                <a href="#" className="m-3">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    size="xl"
                    style={{ color: "red" }}
                  />
                </a>
                <a href="#" className="m-3">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="xl"
                    style={{ color: "red" }}
                  />
                </a>
              </div>
              <div className="col-md-3 ">
                <h4>Contact Us</h4>
                <address className="text-danger">
                  123 Movie St. , Movie Town, 45678
                  <br />
                  Email: info@example.com
                  <br />
                  Phone: (123) 456-7890
                </address>
              </div>
            </div>
          </div>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
