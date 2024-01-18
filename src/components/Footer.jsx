import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="p-4 bg-light">
      <Row className="d-flex justify-content-center align-items-center">
        <Col sm={12} md={4} lg={4} className="text-center">
          <div className="text-center my-4">
            <img
              src="https://tienda.fotografiamardelplata.com.ar/wp-content/webpc-passthru.php?src=https://tienda.fotografiamardelplata.com.ar/wp-content/uploads/2022/03/Gimena-3-2048.jpg&nocache=1 "
              alt="logo"
              className="w-50"
            />
          </div>
        </Col>

        <Col sm={12} md={4} lg={4}>
          <h6 className="text-center">Informacion</h6>
          <ul className="mb-2 text-center">
            <li className="">Numero telefono: (0381) 5006999</li> <li className="">Mail: ...@gmail.com</li>
            <li className="">Direccion: General Paz 576</li>
          </ul>
          <div className="text-center">
            <i className="bi bi-twitter-x ms-4 fs-3 tw"></i>
            <i className="bi bi-facebook ms-4 fs-3 fb"></i>
            <i className="bi bi-instagram ms-4 fs-3 ig"></i>
            <i className="bi bi-youtube ms-4 fs-3 yt"></i>
          </div>
        </Col>

        <Col sm={12} md={4} lg={4} className="text-center">
          <ul>
            <Link to="/">
              <li className="my-2 ">Inicio</li>
            </Link>
            <Link to="/contact">
              <li className="my-2 ">Contacto</li>
            </Link>
            <Link to="/login">
              <li className="my-2 ">Iniciar Sesion</li>
            </Link>
            <Link to="/register">
              <li className="my-2 ">Registrarse</li>
            </Link>
            <Link to="/nosotros">
              <li className="my-2 ">Acerca de Nosotros </li>
            </Link>
          </ul>
        </Col>
      </Row>
      <hr></hr>
      <p className="text-center">
        {" "}
        &copy; Todos los derechos reservados | &copy; Copyright all rights
        reserved
      </p>
    </footer>
  );
};

export default Footer;
