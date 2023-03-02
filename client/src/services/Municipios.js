const baseUrl =
    import.meta.env.VITE_BACKEND_URL

export const getMunicipios = async () => {
    try {
        const response = await fetch(`${baseUrl}municipios`, {
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
export const deleteMunicipios = async (id, callback) => {
    const response = await fetch(`${baseUrl}municipios/${id}`, {
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
export const updateMunicipios = async (municipioactual,callback) => {
    const response = await fetch(`${baseUrl}municipios/${municipioactual.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        municipio:municipioactual.municipio,
    })});
    if(response.ok){
      callback();
    }
  }
  export const postMunicipios = async (municipio,id_ciudades,callback) => {
    const response = await fetch(`${baseUrl}municipios`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        municipio: municipio,
        id_ciudades: id_ciudades,
    })});
    if(response.ok){
      callback();
    }
  }