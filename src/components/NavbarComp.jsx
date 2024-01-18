import {
    Navbar,
    Nav,
    Container,
    NavDropdown,
  } from "react-bootstrap";
  import { NavLink } from "react-router-dom";

const NavbarComp = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img src="/logoIfaun.png" alt="Ifaun Logo" height={"70px"}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse 
        id="basic-navbar-nav">
          <Nav>
            <Nav.Link as={NavLink} to="/materias" >
              Materias
            </Nav.Link>
            <Nav.Link as={NavLink} to="/blog">
              Blog
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/login" >
              Iniciar Sesion
            </Nav.Link>
            <Nav.Link as={NavLink} to="/register">
              Registrarse
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComp