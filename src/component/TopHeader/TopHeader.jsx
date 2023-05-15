import "./Tobheder.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const TopHeader = () => {
  return (
    <div className="topHeaderMain">
      <Container>
        <Row>
          <Col md={12}>
            <div className="topHeader">
              <p className="topHeaderTitle">FAST SHIPPING ON ALL ORDERS</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopHeader;
