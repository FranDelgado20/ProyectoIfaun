import { Button, Form, Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

import Swal from "sweetalert2";
import {
  crearComentario,
  listarComentariosMostrables,
} from "../../helpers/queriesComentarios";
import { useEffect, useState } from "react";
import clienteAxios from "../../utils/axios";
import { useNavigate } from "react-router-dom";

const CrearComentario = ({ setComentarios }) => {
  const navegacion = useNavigate();
  const idUser = JSON.parse(sessionStorage.getItem("idUser"));
  const token = JSON.parse(sessionStorage.getItem("token"));
  const [usuario, setUsuario] = useState({});
  const obtenerUsuario = async () => {
    const resGetUser = await clienteAxios.get(`/user/${idUser}`);
    setUsuario(resGetUser.data.oneUser);
  };
  useEffect(() => {
    if (token) obtenerUsuario();
  }, [idUser]);

  const dia = new Date();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    defaultValues: {
      nombreUsuario: "",
      fotoDePerfil: "",
      comentario: "",
      email: "",
      fecha: dia.toLocaleDateString(),
    },
  });

  useEffect(() => {
    setValue("nombreUsuario", usuario.fullName || "");
    setValue("fotoDePerfil", usuario.img || "");
    setValue("email", usuario.email || "");
  }, [usuario, setValue]);

  const onSubmit = (datos) => {
    if (!idUser) {
      Swal.fire("Debe iniciar sesion!", "Error al enviar comentario!", "error");
      navegacion("/login");
    } else {
      crearComentario(datos).then((respuesta) => {
        if (respuesta.status === 201) {
          Swal.fire(
            "Gracias por tu comentario!",
            "Su comenario fue enviado correctamente. Su comentario sera revisado por el administrador para ser mostrado",
            "success"
          );
          reset();
        } else {
          Swal.fire(
            "Ocurrio un error",
            "Vuelva a intentarlo mas tarde",
            "error"
          );
        }
      });
    }
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
      {!token && (
        <div className="text-center mt-2">
          <small>
            Recuerda que debes iniciar sesión para enviar un comentario
          </small>
        </div>
      )}
    </Form>
  );
};

export default CrearComentario;
