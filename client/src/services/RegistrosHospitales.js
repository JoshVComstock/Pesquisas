const baseUrl =
    import.meta.env.VITE_BACKEND_URL

export const getRegistroprovincias = async () => {
    try {
        const response = await fetch(`${baseUrl}registro_hospitales`, {
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
  
    const response = await fetch(`${baseUrl}registro_hospitales/${id}`, {
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
export const updateRegistroprovincias = async (registroactual,callback) => {
  
    const response = await fetch(`${baseUrl}registro_hospitales/${registroactual.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        hora: registroactual.hora,
        fecha: registroactual.fecha,
        id_redes: registroactual.id_redes,
        id_centros: registroactual.id_centros,
        cantidad_recibida: registroactual.cantidad_recibida,
        cantidad_entregada: registroactual.cantidad_entregada,
        cod_tarjeta: registroactual.cod_tarjeta,
        entregado_por: registroactual.entregado_por,
        telefono: registroactual.telefono,
        recibido_por: registroactual.recibido_por,

    })});
    if(response.ok){
      callback();
    }
  }
  export const postRegistroprovincia = async (hora,fecha,id_redes,id_centros,cantidad_recibida,cantidad_entregada,cod_tarjeta,entregado_por,telefono,recibido_por,callback) => {
    console.log( body: JSON.stringify({
      hora: hora,
      fecha: fecha,
      id_redes: id_redes,
      id_centros: id_centros,
      cantidad_recibida: cantidad_recibida,
      cantidad_entregada: cantidad_entregada,
      cod_tarjeta: cod_tarjeta,
      entregado_por: entregado_por,
      telefono: telefono,
      recibido_por: recibido_por,
  }));
    const response = await fetch(`${baseUrl}registro_hospitales`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        hora: hora,
        fecha: fecha,
        id_redes: id_redes,
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