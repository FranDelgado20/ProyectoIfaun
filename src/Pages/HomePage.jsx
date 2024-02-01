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
          <img className="d-block w-100 carr" src="/carousel2.png" alt="img1" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 carr" src="/carousel2.png" alt="img2" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 carr" src="/carousel2.png" alt="img3" />
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
