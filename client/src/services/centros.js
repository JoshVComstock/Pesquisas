const baseUrl =
    import.meta.env.VITE_BACKEND_URL

export const getCentros = async () => {
    try {
        const response = await fetch(`${baseUrl}centros`, {
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
export const deleteCentros = async (id, callback) => {
  
  const response = await fetch(`${baseUrl}centros/${id}`, {
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
export const updateCentros = async (centroactual,callback) => {
  const response = await fetch(`${baseUrl}centros/${centroactual.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      nombre:centroactual.nombre,
      direccion:centroactual.direccion,
      id_redes:centroactual.id_redes,
      telefono:centroactual.telefono,
      id_ciudades:centroactual.id_ciudades,
      area:centroactual.area,
      seguimiento_casos:centroactual.seguimiento_casos,
      contacto:centroactual.contacto,

  })});
  if(response.ok){
    callback();
  }
}
export const postCiudad = async (nombre,direccion,id_redes,telefono,id_ciudades,area,seguimiento_casos,contacto,callback) => {
  const response = await fetch(`${baseUrl}centros`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },    
    body: JSON.stringify({
      nombre:nombre,
      direccion:direccion,
      id_redes:id_redes,
      telefono:telefono,
      id_ciudades:id_ciudades,
      area:area,
      seguimiento_casos:seguimiento_casos,
      contacto:contacto,
  })});
  if(response.ok){
    callback();
  }
}