import React, { useEffect, useState } from "react";
import { Button, Card, Carousel, CarouselItem, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { listarComentariosMostrables } from "../helpers/queriesComentarios";
import CardComentario from "./comentarios/CardComentario";

const HomePage = () => {

  const [user, setUser] = useState({})

  const getUser = async () => {
    const response = await fetch("http://localhost:8080/user")
    const res = await response.json()
    setUser(res.allUsers[0])
  }
  const [comentarios, setComentarios] = useState([]);

useEffect(() => {
  listarComentariosMostrables().then((respuesta)=>{
    setComentarios(respuesta)
  })
  getUser()
}, [])
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
      <Carousel variant="dark" indicators={false}>
        <Carousel.Item>
          <Card className="container w-50 mb-3">
            <div className="text-center">
              <Image
                src="https://tienda.fotografiamardelplata.com.ar/wp-content/webpc-passthru.php?src=https://tienda.fotografiamardelplata.com.ar/wp-content/uploads/2022/03/Gimena-3-2048.jpg&nocache=1 "
                className="w-25 mt-3"
                roundedCircle
              />
            </div>
            <Card.Body>
              <Card.Title className="text-center">Nombre1</Card.Title>
              <Card.Text className="text-center">Comentarios</Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card className="container w-50 mb-3">
            <div className="text-center">
              <Image
                src={user.img}
                className="w-25 mt-3"
                roundedCircle
              />
            </div>
            <Card.Body>
              <Card.Title className="text-center">Nombre2</Card.Title>
              <Card.Text className="text-center">Comentarios</Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card className="container w-50 mb-3">
            <div className="text-center">
              <Image
                src="https://tienda.fotografiamardelplata.com.ar/wp-content/webpc-passthru.php?src=https://tienda.fotografiamardelplata.com.ar/wp-content/uploads/2022/03/Gimena-3-2048.jpg&nocache=1 "
                className="w-25 mt-3"
                roundedCircle
              />
            </div>
            <Card.Body>
              <Card.Title className="text-center">Nombre3</Card.Title>
              <Card.Text className="text-center">Comentarios</Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
      </Carousel>
      <Carousel variant="dark" indicators={false} >
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
    </div>
  );
};

export default HomePage;
