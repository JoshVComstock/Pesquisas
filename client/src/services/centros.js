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
export const deleteCiudades = async (id, callback) => {
  
    const response = await fetch(`${baseUrl}ciudades/${id}`, {
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
export const updateCiudades = async (ciudadactual,callback) => {
    const response = await fetch(`${baseUrl}ciudades/${ciudadactual.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        ciudad:ciudadactual.ciudad,
    })});
    if(response.ok){
      callback();
    }
  }
  export const postCiudad = async (ciudad,callback) => {
    const response = await fetch(`${baseUrl}ciudades`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        ciudad:ciudad,
    })});
    if(response.ok){
      callback();
    }
  }
