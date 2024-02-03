import React, { useEffect, useState } from "react";
import { Carousel, CarouselItem, Container, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { listarComentariosMostrables } from "../helpers/queriesComentarios";
import CardComentario from "./comentarios/CardComentario";

const HomePage = () => {
  const [comentarios, setComentarios] = useState([]);
  const [mostrarSpinner, setMostrarSpinner] = useState(true);

  useEffect(() => {
    setMostrarSpinner(true);
    listarComentariosMostrables().then((respuesta) => {
      setComentarios(respuesta);
      setMostrarSpinner(false);
    });
  }, []);
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 0);
  return (
    <div>
      <Carousel data-aos="zoom-in">
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
        {mostrarSpinner ? (
          <>
            <div className="text-center my-5">
              <div>
                <Spinner></Spinner>
              </div>
              <div>Cargando comentarios...</div>
            </div>
          </>
        ) : (
          <>
            <Carousel variant="dark" data-aos="zoom-in" indicators={false}>
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
            <div className="text-center my-3" data-aos="zoom-in">
              <Link className="mb-3 button_modify" to="/contact">
                Envianos tu comentario...
              </Link>
            </div>
          </>
        )}
      </Container>
    </div>
  );
};

export default HomePage;
