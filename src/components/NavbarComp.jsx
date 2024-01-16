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
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="efectUnder">
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/contacto"  className="efectUnder">
              Contacto
            </Nav.Link>
            <NavDropdown
              title="Acerca de Nosotros"
              id="basic-nav-dropdown-nosotros"
              className="margen"
            >
              <NavDropdown.Item as={Link} to="/historia">
                Historia
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/nosotros">
                Nuestros RRHH
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/equipamiento">
                Equipamiento
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComp