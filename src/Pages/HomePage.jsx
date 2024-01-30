import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Carousel,
  CarouselItem,
  Container,
  Image,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { listarComentariosMostrables } from "../helpers/queriesComentarios";
import CardComentario from "./comentarios/CardComentario";

const HomePage = () => {
  const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    listarComentariosMostrables().then((respuesta) => {
      setComentarios(respuesta);
    });
  }, []);
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wowslider.com/sliders/demo-80/data1/images/nature497978_1920.jpg"
            alt="img1"
          />
          <Carousel.Caption>
            <h3>Imagen 1</h3>
            <Link className="btn btn-primary mt-2" to={`/`}>
              Ver mas
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wowslider.com/sliders/demo-80/data1/images/sheet546475_1920.jpg"
            alt="img2"
          />

          <Carousel.Caption>
            <h3>Imagen 2</h3>
            <Link className="btn btn-primary mt-2" to={`/`}>
              Ver mas
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wowslider.com/sliders/demo-80/data1/images/plumage176723_1920.jpg"
            alt="img3"
          />

          <Carousel.Caption>
            <h3>Imagen 3</h3>
            <Link className="btn btn-primary mt-2" to={`/`}>
              Ver mas
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <hr />
      <Container>
        <Carousel variant="dark" indicators={false}>
          {comentarios.map((comentario, posicion) => (
            <CarouselItem key={posicion}>
              <CardComentario
                key={comentario._id}
                comentario={comentario}
                setComentarios={setComentarios}
              ></CardComentario>
            </CarouselItem>
          ))}
        </Carousel>
        <div className="text-center">
          <Button as={Link} className="mb-3" to="/contact">
            Envianos tu comentario...
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
