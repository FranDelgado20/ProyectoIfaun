import React from "react";
import { Container, Image } from "react-bootstrap";

const Error404 = () => {
  return (
    <Container className="text-center d-flex justify-content-center align-items-center ">
      <div>
        <Image src="/Error404.png" fluid />
      </div>
    </Container>
  );
};

export default Error404;
