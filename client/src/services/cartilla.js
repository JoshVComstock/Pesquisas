export const postCentros = async () => {
    const response = await fetch(`${baseUrl}cartilla`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },    
      body: JSON.stringify({
        nombre:nombre,
        direccion:direccion,
        telefono:telefono,
        id_municipios:id_municipios,
        area:area,
        seguimiento_casos:seguimiento_casos,
        contacto:contacto,
    })});
    if(response.ok){
      callback();
    }
  }