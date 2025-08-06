import { Container, Nav, Navbar } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import logo from "../assets/styles/logo.png";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container className="my-3 p-3 rounded">
          <Navbar.Brand href="/">
            <img src={logo} alt="Proshop" />
            ProShop
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <Nav.Link href="/cart">
                <FaShoppingCart /> Cart
              </Nav.Link>
              <Nav.Link href="/login">
                <FaUser />
                Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
