import React from "react";
import { Button, Card, Carousel, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomePage = () => {
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
      <Card className="container w-50 mb-3">
        <div className="text-center">
        <Image src="https://tienda.fotografiamardelplata.com.ar/wp-content/webpc-passthru.php?src=https://tienda.fotografiamardelplata.com.ar/wp-content/uploads/2022/03/Gimena-3-2048.jpg&nocache=1 " className="w-25 mt-3" roundedCircle />
        </div>
        <Card.Body>
          <Card.Title className="text-center">Nombre</Card.Title>
          <Card.Text className="text-center">
            Comentarios
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HomePage;