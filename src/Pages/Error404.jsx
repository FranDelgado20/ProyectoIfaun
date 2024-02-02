import React from "react";
import { Button, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <Container className="error-page text-center">
      <div className="error-content">
        <Image src="/error.png" fluid />
        <Link to={"/"}>
          <Button variant="info" className="error-button">
            Volver al inicio
          </Button>
        </Link>
      </div>
    </Container>
  );
};
export default Error404;
