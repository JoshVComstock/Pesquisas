const baseUrl =
    import.meta.env.VITE_BACKEND_URL

export const getRegister = async () => {
    try {
        const response = await fetch(`${baseUrl}register`, {
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
export const updateRegister = async (ciudadactual,callback) => {
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
  export const postR = async (ciudad,callback) => {
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