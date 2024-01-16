import {
    Navbar,
    Nav,
    Container,
    NavDropdown,
  } from "react-bootstrap";
  import { Link } from "react-router-dom";

const NavbarComp = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src=" " alt="LOGO"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse 
        id="basic-navbar-nav">
          <Nav className="">
            <Nav.Link as={Link} to="/materias" >
              Materias
            </Nav.Link>
            <Nav.Link as={Link} to="/blog">
              Blog
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/login" >
              Iniciar Sesion
            </Nav.Link>
            <Nav.Link as={Link} to="/register">
              Registrarse
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComp