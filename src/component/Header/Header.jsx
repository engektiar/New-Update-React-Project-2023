import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
const Header = () => {
  return (
    <div>
      <Navbar className="headermain">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="headerItem">
            <Nav.Link className="navmanue" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="navmanue" href="#features">
              shop now
            </Nav.Link>
            <Nav.Link className="navmanue" href="#pricing">
              about us
            </Nav.Link>
            <Nav.Link className="navmanue" href="#pricing">
              contact us
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
