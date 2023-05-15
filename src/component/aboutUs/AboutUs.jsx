import "./about.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AboutUs = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={12}>
            <div className="aboutMain">
              <h1 className="Heading">About us </h1>
              <p className="aboutText">
                Evolvedbykd is our online store for your best shopping items right now. Evolvedbykd store aims to offer our customers the best nail polish product experience
                possible. We aim to provide you with excellent products and experiences consistently.{" "}
              </p>
              <button className="storeBtn">Read More</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
