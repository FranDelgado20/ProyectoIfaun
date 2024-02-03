import React, { useState } from "react";
import { Container, Image } from "react-bootstrap";
import Toast from "react-bootstrap/Toast";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
const AnatomiaPage = () => {
  const [showA, setShowA] = useState(true);
  const [showB, setShowB] = useState(true);

  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);
  return (
    <Container className="anatomia d-flex " fluid>
      <Container className="d-flex align-items-end " data-aos="fade-up-right">
        <div className="text-end">
          <img src="/sofi.png" className="img-fluid w-50" alt="Sofi" />
        </div>
      </Container>
      <Container fluid className="fixed-container" data-aos="fade-up-left">
        <div className="">
          <div className="anatomia-container">
            <div className="letras    ">ANA</div>
            <div className="letras   ">TO</div>
            <div className="letras  ">MI</div>
            <div className="letras ">A</div>
          </div>
          <div className="mt-5">
            <strong>con Sofía Aragón</strong>
            <Row>
              <Col md={12} className="mb-2">
                <Button
                  variant="transparent"
                  onClick={toggleShowA}
                  className="mb-2"
                >
                  <strong>
                    ¿Quien es mi docente?{" "}
                    {showA ? (
                      <i className="bi bi-arrow-up-short"></i>
                    ) : (
                      <i className="bi bi-arrow-down-short"></i>
                    )}
                  </strong>
                </Button>
                <Toast show={showA} onClose={toggleShowA}>
                  <Toast.Body>
                    Mi nombre es Sofía, tengo 23 años, nací el 27 de Abril de
                    1998. Estoy enamorada de la carrera de medicina. Mi sueño es
                    ser neurocirujana.
                  </Toast.Body>
                </Toast>
              </Col>
              <Col md={12} className="mb-2">
                <Button
                  variant="transparent"
                  onClick={toggleShowB}
                  className="mb-2"
                >
                  <strong>
                    ¿Lugares donde enseñaste?{" "}
                    {showB ? (
                      <i className="bi bi-arrow-up-short"></i>
                    ) : (
                      <i className="bi bi-arrow-down-short"></i>
                    )}
                  </strong>
                </Button>
                <Toast show={showB} onClose={toggleShowB}>
                  <Toast.Body>
                    Con @ifaun.oficial tengo diferentes grupos de alumnos dentro
                    de Argentina (Córdoba, Salta, Jujuy, Santiago del Estero y
                    Tucumán).
                  </Toast.Body>
                </Toast>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default AnatomiaPage;
