import React from 'react'
import styled from 'styled-components'
import { useState,useEffect } from 'react';

const RedesForm = () => {
    const [nombre, setNombre] = useState("");
  
  const enviar = async (e) => {
    e.preventDefault();

    const response = await fetch("http://127.0.0.1:8000/api/redes", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        nombre: nombre
      }),
    });

    const respuesta = await response?.json();
    if ((respuesta.mensaje = "Creado satisfactoriamente")) {
        setNombre("");
    }
  };
  return (
    <div>
        <h1>Redes de Salud</h1>
        <div>
            <h3>Nombre:</h3>
            <input type="text" 
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}/>
            <button type='submit' onClick={enviar}>Agregar</button>
        </div>
    </div>
  )
}

export default RedesForm
