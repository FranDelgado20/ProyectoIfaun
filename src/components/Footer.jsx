import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-2 bg-light">
      <Row className="justify-content-center align-items-center mx-0">
        <Col sm={12} md={4} lg={4} className="text-center">
          <div className="text-center my-3">
            <img
              src="/logoIfaun.png"
              alt="Ifaun Logo"
              height={"125px"}
            />
          </div>
        </Col>
        <hr className="displayNone" />
        <Col sm={12} md={4} lg={4} className="my-3">
          <h6 className="text-center">Información</h6>
          <ul className="mb-2 text-center">
            <li className="">Número de telefono: (0381) 5006999</li>{" "}
            <li className="">Email: ...@gmail.com</li>
            <li className="">Dirección: General Paz 576</li>
          </ul>
          <div className="text-center mt-3">
            <a href="https://www.tiktok.com/@ifaun.oficial" target="_blank">
              <i className="bi bi-tiktok ms-4 fs-3 tk"></i>
            </a>
            <a href="https://www.facebook.com/ifaun.oficial/" target="_blank">
              <i className="bi bi-facebook ms-4 fs-3 fb"></i>
            </a>
            <a href="https://www.instagram.com/ifaun.oficial/?hl=es" target="_blank">
              <i className="bi bi-instagram ms-4 fs-3 ig"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCQRuz_zHyIIiGI_QnjMGl0g" target="_blank">
              <i className="bi bi-youtube ms-4 fs-3 yt"></i>
            </a>
          </div>
        </Col>
        <hr className="displayNone" />
        <Col
          sm={12}
          md={4}
          lg={4}
          className="d-flex justify-content-center align-items-center flex-column"
        >
          <Link to="/" className="linkFooter my-1">
            Inicio
          </Link>
          <Link to="/contact" className="linkFooter my-1">
            Contacto
          </Link>
          <Link to="/nosotros" className="linkFooter my-1">
            Sobre nosotros
          </Link>
          <Link to="/login" className="linkFooter my-1">
            Iniciar sesión
          </Link>
          <Link to="/register" className="linkFooter my-1">
            Registrarse
          </Link>
        </Col>
      </Row>
      {/* <hr className="displayNone" /> */}
      <hr />
      <p className="text-center">
        &copy; Todos los derechos reservados | &copy; Copyright all rights
        reserved
      </p>
    </footer>
  );
};

export default Footer;
