import { Badge, Card, Col, Row } from "react-bootstrap";

const CardComentario = ({ comentario }) => {
  return (
    <Card className="mb-2">
      <Card.Header>
        <Row className="align-items-center">
          <Col>
            <Card.Subtitle>{comentario.nombreUsuario}</Card.Subtitle>
          </Col>
          <Col>
            <Badge bg="primary">
              {comentario.fecha}
            </Badge>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <Card.Text>{comentario.comentario}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardComentario;
