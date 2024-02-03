import React from "react";
import { Button, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <>
      <Container className="error-page text-center pc-only">
        <div className="error-content">
          <Image src="/error.png" fluid />

          <Link to={"/"}>
            <Button className="button_modify_error" >
              Volver al inicio
            </Button>
          </Link>
        </div>
      </Container>
      <Container className="mobile-only" fluid>
        <div className="error-content error-content-mobile">
          <Image src="/IFAUN (2).png" fluid />
          <Link to={"/"}>
            <Button className="button_modify_error_mobile">
              Volver al inicio
            </Button>
          </Link>
        </div>
        <a href="https://wa.me/" target="_blank" className="btn-wsp" >
        <i className="bi bi-whatsapp ms-1 "></i>
      </a>
      </Container>
    </>
  );
};
export default Error404;
