const baseUrl =
    import.meta.env.VITE_BACKEND_URL

export const getProvincias = async () => {
    try {
        const response = await fetch(`${baseUrl}provincias`, {
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
export const deleteProvincias = async (id, callback) => {
  
    const response = await fetch(`${baseUrl}provincias/${id}`, {
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
export const updateCiudades = async (provinciasactual,callback) => {
    const response = await fetch(`${baseUrl}provincias/${provinciasactual.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        provincia:provinciasactual.provincia,
        id_ciudad:provinciasactual.id_ciudad,
    })});
    if(response.ok){
      callback();
    }
  }
  export const postCiudad = async (provincia,id_ciudad,callback) => {
    const response = await fetch(`${baseUrl}provincias`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        provincia: provincia,
        id_ciudad: id_ciudad,
    })});
    if(response.ok){
      callback();
    }
  }