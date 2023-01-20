import React from 'react'
import styled from 'styled-components'
import { useState,useEffect } from 'react';

const CiudadesForm = () => {
  const [ciudad, setCiudad] = useState("");
  
  const enviar = async (e) => {
    e.preventDefault();

    const response = await fetch("http://127.0.0.1:8000/api/ciudad", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        ciudad: ciudad
      }),
    });

    const respuesta = await response?.json();
    if ((respuesta.mensaje = "Creado satisfactoriamente")) {
      setCiudad("");
    }
  };
  return (
    <div>
        <div>
            <label>Nombre:</label>
            <input type="text" 
              value={ciudad}
              onChange={(e) => setCiudad(e.target.value)}/>
            <button type='submit' onClick={enviar}>Agregar</button>
        </div>
    </div>
  )
}

export default CiudadesForm