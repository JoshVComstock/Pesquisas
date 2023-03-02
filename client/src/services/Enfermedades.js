const baseUrl =
    import.meta.env.VITE_BACKEND_URL

export const getEnfermedades = async () => {
    try {
        const response = await fetch(`${baseUrl}enfermedades`, {
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
export const deleteEnfermedades = async (id, callback) => {
  
    const response = await fetch(`${baseUrl}enfermedades/${id}`, {
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
export const updateEnfermedades = async (Enfermedadactual,callback) => {
    const response = await fetch(`${baseUrl}enfermedades/${Enfermedadactual.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        nombre:Enfermedadactual.nombre,
        descripcion:Enfermedadactual.descripcion,
        extra:Enfermedadactual.extra,
    })});
    if(response.ok){
      callback();
    }
  }
  export const postEnfermedades = async (nombre,descripcion,extra,callback) => {
    const response = await fetch(`${baseUrl}enfermedades`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        nombre:nombre,
        descripcion:descripcion,
        extra:extra,
    })});
    if(response.ok){
      callback();
    }
  }