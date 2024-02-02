import { useEffect } from "react";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Button,
  Dropdown,
} from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

const NavbarComp = () => {
  const navigate = useNavigate();

  const token = JSON.parse(sessionStorage.getItem("token"));
  const role = JSON.parse(sessionStorage.getItem("role"));

  const logOut = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("role");
    sessionStorage.removeItem("idUser");
    navigate("/");
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img src="/logoIfaun.png" alt="Ifaun Logo" height={"70px"} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {token && role === "user" ? (
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Dropdown>
                <Dropdown.Toggle
                  className="nav-link"
                  variant="light"
                  id="dropdown-basic"
                >
                  <i className="bi bi-book"></i> Materias
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Anatomía</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Fisiología</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Semiología</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Nav.Link as={NavLink} to="/blog">
                <i className="bi bi-file-text"></i> Blog
              </Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/miCuenta">
                <i className="bi bi-person-circle"></i> Mi Cuenta
              </Nav.Link>
              <button onClick={logOut} className="nav-link">
                <i className="bi bi-door-open-fill"></i> Cerrar Sesión
              </button>
            </Nav>
          </Navbar.Collapse>
        ) : token && role === "admin" ? (
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/admin">
                <i className="bi bi-person-fill-gear"></i> Administrador
              </Nav.Link>
              <button onClick={logOut} className="nav-link">
                <i className="bi bi-door-open-fill"></i> Cerrar Sesión
              </button>
            </Nav>
          </Navbar.Collapse>
        ) : (
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Dropdown>
                <Dropdown.Toggle
                  className="nav-link"
                  variant="light"
                  id="dropdown-basic"
                >
                  <i className="bi bi-book"></i> Materias
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/anatomía">Anatomía</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Fisiología </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Semiología </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Nav.Link as={NavLink} to="/blog">
                <i className="bi bi-file-text"></i> Blog
              </Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/login">
                Iniciar Sesion
              </Nav.Link>
              <Nav.Link as={NavLink} to="/register">
                Registrarse
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        )}
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
