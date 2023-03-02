const baseUrl =
    import.meta.env.VITE_BACKEND_URL
    export const getLaboratorios = async () => {

    try {
        const response = await fetch(`${baseUrl}laboratorios`, {
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
export const deleteLaboratorios = async (id, callback) => {
  
    const response = await fetch(`${baseUrl}laboratorios/${id}`, {
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
export const updateLaboratorios = async (actual,callback) => {
    const response = await fetch(`${baseUrl}laboratorios/${actual.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        nombre:actual.nombre,
        direccion:actual.direccion,
        telefono:actual.telefono	,
        id_centros:actual.id_centros,
        id_ciudades:actual.id_ciudades,
        id_redes:actual.id_redes,

    })});
    if(response.ok){
      callback();
    }
  }
  export const postLaboratorio = async (nombre,direccion,telefono,id_centros,id_ciudades,id_redes,callback) => {
    const response = await fetch(`${baseUrl}laboratorios`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        nombre:nombre,
        direccion:direccion,
        telefono:telefono	,
        id_centros:id_centros,
        id_ciudades:id_ciudades,
        id_redes:id_redes,

    })});
    if(response.ok){
      callback();
    }
  }