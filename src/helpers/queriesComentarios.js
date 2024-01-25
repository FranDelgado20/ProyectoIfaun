const url = "http://localhost:8080";

export const listarTodosComentarios = async () => {
  try {
    const respuesta = await fetch(`${url}/comentarios`);
    const listarTodosComentarios = await respuesta.json();
    return listarTodosComentarios;
  } catch (error) {
    console.log(error);
  }
};

export const listarComentariosMostrables = async () => {
  try {
    const respuesta = await fetch(url + "/comentarios/mostrables");
    const listarComentarios = await respuesta.json();
    return listarComentarios;
  } catch (error) {
    console.log(error);
  }
};

export const crearComentario = async (comentario) => {
  try {
    const respuesta = await fetch(url + "/comentarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comentario),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const activarComentario = async (id) => {
  try {
    const respuesta = await fetch(`${url}/comentarios/${id}`, {
      method: "PUT",
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const ocultarComentarios = async (id) => {
  try {
    const respuesta = await fetch(`${url}/comentarios/${id}`, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
