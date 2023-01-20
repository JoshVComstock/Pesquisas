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
          <p>HOLA MUNDO</p>
          <form action="" className='Form' id='Form'>
            <div className='Form-group' id='Form-group'>
              <label for='Nombre' className='Form-Label'>Nombre:</label>
              <div className='Form-group-input'>
                <input className='Form-input' name='Nombre' id='Nombre' type="text" placeholder='Ingrese una Ciudad' value={ciudad} onChange={(e) => setCiudad(e.target.value)}/>
              </div>
            </div>
            <div>
              <button type='submit' onClick={enviar}>Agregar</button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default CiudadesForm