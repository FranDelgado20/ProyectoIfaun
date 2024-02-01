import React from "react";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import EditModalComp from "../../components/EditModalComp";
import Swal from "sweetalert2";
import ComentarioSwitch from "../../components/ComentarioSwitch";
import SwitchSuscripción from "../../components/SwitchSuscripción";
const Usuarios = ({ usuarios, obtenerUsuarios }) => {
  const token = JSON.parse(sessionStorage.getItem("token"));

  const deleteUser = (id, role) => {
    if (role === "admin") {
      return Swal.fire({
        icon: "error",
        title: "No es posible eliminar un usuario administrador",
        showConfirmButton: false,
        timer: 2000,
      });
    }
    Swal.fire({
      title: "¿Estás seguro de eliminar permanentemente este usuario?",
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
            `${import.meta.env.VITE_BACK_URL_LOCAL}/user/${id}`,
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
            obtenerUsuarios();
          }
        } catch (error) {
          Swal.fire({
            title: "No se pudo eliminar el usuario",
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
          <th>Correo Electrónico</th>
          <th>Rol</th>
          <th>Estado de suscripción</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {usuarios?.map((user) => (
          <tr key={user._id}>
            <td>{user.fullName}</td>
            <td>{user.email}</td>
            <td>
              {user.role === "user" ? (
                <>
                  <i className="bi bi-person-fill"></i> Usuario
                </>
              ) : (
                <>
                  <i className="bi bi-person-fill-gear"></i> Administrador
                </>
              )}
            </td>
            <td>
              {
                user.role === 'user' &&
              <SwitchSuscripción user={user} />
              }
            </td>
            <td className="text-center">
              <EditModalComp user={user} obtenerUsuarios={obtenerUsuarios} />

              <Button
                variant="danger"
                className="my-2 mx-2"
                onClick={() => deleteUser(user._id, user.role)}
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

export default Usuarios;
