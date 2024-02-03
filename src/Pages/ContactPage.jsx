import React, { useState } from "react";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
import CrearComentario from "./comentarios/CrearComentario";

const ContactPage = () => {
  const [load, setLoad] = useState(false);
  setTimeout(() => {
    setLoad(true);
  }, 140);
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 0);

  return (
    <div>
      <Container className="my-3">
        <h2 className="text-center my-3" data-aos="zoom-out">
          Informacion de IFAUN
        </h2>
        <hr />
        <Row>
          <Col sm={12} md={6} lg={6} data-aos="fade-right">
            <Row>
              <Col sm={12} md={12} lg={6}>
                <h5>Ubicacion</h5>
                <ul>
                  <li>Direccion: General Paz 576,7°Piso, Oficina 2 </li>
                  <li>San Miguel de Tucuman (4000) - Tucuman, Argentina</li>
                </ul>
              </Col>
              <Col sm={12} md={12} lg={6}>
                <h5>Contacto</h5>
                <ul>
                  <li>Tel: (0381) 5006999</li>
                  <li>Mail: ...@gmail.com</li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col sm={12} md={6} lg={6} data-aos="fade-left">
            <Row>
              <Col sm={12} md={12} lg={6} className="mb-2 ">
                <a
                  href="mailto:............................."
                  target="_blank"
                  rel="noreferrer"
                >
                  <Card className="rounded-0">
                    <Card.Body className="text-center button_modify_2">
                      <Row className="flex-column">
                        <Col>
                          <i className="bi bi-envelope fs-2"></i>{" "}
                        </Col>
                        <Col>
                          <Card.Title className="fs-6 ">
                            ...@gmail.com
                          </Card.Title>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </a>
              </Col>
              <Col sm={12} md={12} lg={6} className="mb-2">
                <a href="tel:(0381) 5006999" target="_blank" rel="noreferrer">
                  <Card className="rounded-0">
                    <Card.Body className="text-center button_modify_2 ">
                      <Row className="flex-column">
                        <Col>
                          <i className="bi bi-telephone fs-2"></i>{" "}
                        </Col>
                        <Col>
                          <Card.Title className="fs-6">
                            (0381) 5006999
                          </Card.Title>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col sm={12} md={6} lg={6}>
            {load === false ? (
              <div className="mt-4 text-center" data-aos="fade-up-right">
                <Spinner></Spinner>
              </div>
            ) : (
              <iframe
                title="maps"
                data-aos="fade-up-right"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.113033991436!2d-65.20720779999996!3d-26.8363569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225de3a1266d05%3A0xfd0fcfc48abf8fbd!2sIFAUN!5e0!3m2!1ses-419!2sar!4v1705536955200!5m2!1ses-419!2sar"
                className="w-100 mapa rounded"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            )}
          </Col>
          <Col sm={12} md={6} lg={6} data-aos="fade-up-left">
            <CrearComentario></CrearComentario>
          </Col>
        </Row>
      </Container>
      <a href="https://wa.me/" target="_blank" className="btn-wsp" >
        <i className="bi bi-whatsapp ms-1 "></i>
      </a>
    </div>
  );
};

export default ContactPage;
