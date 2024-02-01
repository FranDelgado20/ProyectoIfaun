import React from "react";
import { Container, Spinner } from "react-bootstrap";
import Image from "react-bootstrap/Image";
const PantallaDeCarga = () => {
  return (
    <Container className="text-center d-flex justify-content-center align-items-center vh-100">
      <div>

        <Image
          src="/PantallaCarga.png"
          fluid
          className="breathing-image mt-5"
          />
         <Spinner animation="border" variant="info" />
     
          </div>
    </Container>
  );
};

export default PantallaDeCarga;
