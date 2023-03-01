const baseUrl =
    import.meta.env.VITE_BACKEND_URL

export const getRedes = async () => {
    try {
        const response = await fetch(`${baseUrl}redes`, {
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
export const deleteRedes = async (id, callback) => {
  
    const response = await fetch(`${baseUrl}redes/${id}`, {
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
export const updateRedes = async (Redactual,callback) => {
    const response = await fetch(`${baseUrl}redes/${Redactual.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        nombre:Redactual.nombre,
    })});
    if(response.ok){
      callback();
    }
  }
  export const postRedes = async (nombre,callback) => {
    const response = await fetch(`${baseUrl}redes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        nombre:nombre,
    })});
    if(response.ok){
      callback();
    }
  }