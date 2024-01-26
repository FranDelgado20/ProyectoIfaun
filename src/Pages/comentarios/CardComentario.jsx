import { Badge, Card, Col, Row, Image } from "react-bootstrap";

const CardComentario = ({ comentario }) => {
  return (
    <Card className="container w-75 mb-2">
      <div className="text-end">
        <Badge>{comentario.fecha}</Badge>
      </div>
      <div className="text-center">
        <Image
          src={comentario.fotoDePerfil}
          className="w-25 mt-3"
          roundedCircle
        />
      </div>
      <Card.Body>
        <Card.Title className="text-center">
          {comentario.nombreUsuario}
        </Card.Title>
        <Card.Text className="text-center">{comentario.comentario}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardComentario;
