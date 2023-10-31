import { Container } from "react-bootstrap";
import Search from "../Search/Search";

const InputGroup = () => {
  return (
    <div className="input-section py-5 mb-5">
      <Container>
        <div className="row justify-content-center">
          <div className="col-lg-8 mt-2">
            <Search />
          </div>
          <div className="col-lg-4 mt-2 d-flex  justify-content-end"></div>
        </div>
      </Container>
    </div>
  );
};

export default InputGroup;
