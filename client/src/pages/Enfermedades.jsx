import React from 'react'
import { useState, useEffect } from 'react';
import styled from 'styled-components';

export const Enfermedades = () => {
    const [enfermedades, setEnfermedades] = useState([]);

  async function MostrarEnfermedades() {
    const response = await fetch('http://127.0.0.1:8000/api/enfermedades', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "accept": "application/json",
      },
    })
    const respuesta = await response?.json();
    setEnfermedades(respuesta);
  }
  async function EliminarEnfermedades(id) {
    const response = await fetch('http://127.0.0.1:8000/api/enfermedades/' + id, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        "accept": "application/json",
      },
    })
    if (response.ok) {
        MostrarEnfermedades();
    }
  }
  useEffect(() => {
    MostrarEnfermedades();
  }, [])
  return (
    <div>
        <div className='Titulo'>
          <div>Listado de Enfermedades</div>
        </div>
        <br />
      <table>
        <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Extra</th>

          <th>Acciones</th>
        </tr>
      </thead>
        {
          enfermedades.map((v, i) => (
            <tbody key={i} >
              <tr  >
                <th>{v.id}</th>
                <th>{v.nombre}</th>
                <th>{v.descripcion}</th>
                <th>{v.extra}</th>
                <th>
                  <div className='Acciones'>
                    <div className='Editar'>
                      <button className='BotonEditar'>Editar</button>
                    </div>
                    <div className='Eliminar'>
                      <button className='BotonEliminar' onClick={() => EliminarEnfermedades(v.id)}>Eliminar</button>
                    </div>
                  </div>
                </th>
              </tr>
            </tbody>
          ))
        }
      </table>
      
    </div>
  )
}
export default Enfermedades