const baseUrl =
  import.meta.env.VITE_BACKEND_URL

export const getRegister = async () => {
  try {
    const response = await fetch(`${baseUrl}usuarios`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const deleteRegister = async (id, callback) => {
  const response = await fetch(`${baseUrl}register/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
  })
  if (response.ok) {
    callback();
  }
};
export const updateRegister = async (ciudadactual, callback) => {
  const response = await fetch(`${baseUrl}ciudades/${ciudadactual.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      ciudad: ciudadactual.ciudad,
    })
  });
  if (response.ok) {
    callback();
  }
}
export const postRegister = async (nombre, email, telefono, rol, password, conpassword, callback) => {
  console.log(JSON.stringify({
    nombre: nombre,
    email: email,
    telefono: telefono,
    rol: rol,
    password: password,
    password_confirmation: conpassword

  }))
  const response = await fetch(`${baseUrl}register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      nombre: nombre,
      email: email,
      telefono: telefono,
      rol: rol,
      password: password,
      password_confirmation: conpassword

    })
  });
  if (response.ok) {
    callback();
  }
}