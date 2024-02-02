import React from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import ComentarioSwitch from "../../components/ComentarioSwitch";
import Swal from "sweetalert2";

const Comentarios = ({ comentarios, obtenerComentarios }) => {
  const token = JSON.parse(sessionStorage.getItem("token"));

  const borrarComentario = (id) => {
    Swal.fire({
      title: "¿Estás seguro de eliminar permanentemente este comentario?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(
            `${
              import.meta.env.VITE_BACK_URL_LOCAL
            }/comentarios/perma-delete/${id}`,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );
          const res = await response.json();
          if (res.status === 200) {
            Swal.fire({
              title: res.msg,
              icon: "success",
              showConfirmButton: false,
              timer: 2000,
            });
            obtenerComentarios();
          }
        } catch (error) {
          Swal.fire({
            title: "No se pudo eliminar el comentario",
            text: error,
            icon: "error",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      }
    });
  };

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Nombre y Apellido</th>
          <th>Comentario y fecha de publicación</th>
          <th>Publicado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {comentarios.map((comment) => (
          <tr key={comment._id}>
            <td>{comment.nombreUsuario}</td>
            <td>
              {comment.comentario} | {comment.fecha}
            </td>
            <td>
              <ComentarioSwitch comment={comment} />
            </td>
            <td className="text-center">
              <Button
                variant="danger"
                onClick={() => borrarComentario(comment._id)}
                className="button_modify_delete"
              >
                <i className="bi bi-trash3-fill"></i> Eliminar
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Comentarios;
