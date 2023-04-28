const baseUrl =
    import.meta.env.VITE_BACKEND_URL

export const getRegistroprovincias = async () => {
    try {
        const response = await fetch(`${baseUrl}registro_provincias`, {
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
export const deleteRegistroprovincias = async (id, callback) => {
  
    const response = await fetch(`${baseUrl}registro_provincias/${id}`, {
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
export const updateRegistroprovincias = async (registroactuald,callback) => {
  
    const response = await fetch(`${baseUrl}registro_provincias/${registroactuald.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        hora: registroactuald.hora,
        fecha: registroactuald.fecha,
        id_centros: registroactuald.id_centros,
        cantidad_recibida: registroactuald.cantidad_recibida,
        cantidad_entregada: registroactuald.cantidad_entregada,
        cod_tarjeta: registroactuald.cod_tarjeta,
        entregado_por: registroactuald.entregado_por,
        telefono: registroactuald.telefono,
        recibido_por: registroactuald.recibido_por,

    })});
    if(response.ok){
      callback();
    }
  }
  export const postRegistroprovincia = async (hora,fecha,id_centros,cantidad_recibida,cantidad_entregada,cod_tarjeta,entregado_por,telefono,recibido_por,callback) => {
    const response = await fetch(`${baseUrl}registro_provincias`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        hora: hora,
        fecha: fecha,
        id_centros: id_centros,
        cantidad_recibida: cantidad_recibida,
        cantidad_entregada: cantidad_entregada,
        cod_tarjeta: cod_tarjeta,
        entregado_por: entregado_por,
        telefono: telefono,
        recibido_por: recibido_por,
    })});
    if(response.ok){
      callback();
    }
  }