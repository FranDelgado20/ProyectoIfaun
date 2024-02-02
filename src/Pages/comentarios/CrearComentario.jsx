import { Button, Form, Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

import Swal from "sweetalert2";
import {
  crearComentario,
  listarComentariosMostrables,
} from "../../helpers/queriesComentarios";

const CrearComentario = ({ setComentarios }) => {
  const dia = new Date();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      nombreUsuario: "Jaimassso",
      fotoDePerfil:
        "https://i.pinimg.com/236x/2f/97/f0/2f97f05b32547f54ef1bdf99cd207c90.jpg",
      comentario: "",
      fecha: dia.toLocaleDateString(),
    },
  });

  const onSubmit = (datos) => {
    crearComentario(datos).then((respuesta) => {
      if (respuesta.status === 201) {
        listarComentariosMostrables().then((respuesta) => {
          setComentarios(respuesta);
        });
        Swal.fire(
          "Gracias por tu comentario!",
          "Su comenario fue enviado correctamente",
          "success"
        );
        reset();
      } else {
        Swal.fire("Ocurrio un error", "Vuelva a intentarlo mas tarde", "error");
      }
    });
    
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Col sm={12}>
          <h3>Envia tu comentario</h3>
          <hr />
          <Form.Group className="mb-2" controlId="formNombre">
            <Form.Label>Comentario</Form.Label>
            <Form.Control
              type="text"
              placeholder="Escriba su comentario"
              {...register("comentario", {
                required: "Este dato es obligatorio",
                minLength: {
                  value: 10,
                  message: "Debe ingresar como minimo 10 caracteres",
                },
                maxLength: {
                  value: 300,
                  message: "Debe ingresar como maximo 300 caracteres",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.comentario?.message}
            </Form.Text>
          </Form.Group>
        </Col>
      </Row>
      <div className="text-end">
        <Button variant="primary" type="submit" className="mb-2 button_modify">
          Enviar
        </Button>
      </div>
    </Form>
  );
};

export default CrearComentario;
