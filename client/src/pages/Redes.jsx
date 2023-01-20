import React from 'react'
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useModal } from "../hooks/useModal";
import RedesForm from '../models/RedesForm';

const Redes = () => {
  const { openModal, closeModal } = useModal("Redes de Salud",<RedesForm/>);
  
  const [redes, setRedes] = useState([]);

  async function MostrarRedes() {
    const response = await fetch('http://127.0.0.1:8000/api/redes', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "accept": "application/json",
      },
    })
    const respuesta = await response?.json();
    setRedes(respuesta);
  }
  async function EliminarRedes(id) {
    const response = await fetch('http://127.0.0.1:8000/api/redes/' + id, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        "accept": "application/json",
      },
    })
    if (response.ok) {
        MostrarRedes();
    }
  }
  useEffect(() => {
    MostrarRedes();
  }, [])
  return (
    <div>
      <div className='Titulo'>
          <div>Listado de Redes de Salud</div>
        </div>
        <br />
        <div>
          <button type="submit" onClick={openModal}>Registrar Nueva Red de Salud</button>
        </div>
      <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>

          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {
          redes.map((v, i) => (
            <body key={i} >
              <tr  >
                <th>{v.id}</th>
                <th>{v.nombre}</th>
                <th>
                  <div className='Acciones'>
                    <div className='Editar'>
                      <button className='BotonEditar'>Editar</button>
                    </div>
                    <div className='Eliminar'>
                      <button className='BotonEliminar' onClick={() => EliminarRedes(v.id)}>Eliminar</button>
                    </div>
                  </div>
                </th>
              </tr>
            </body>
          ))
        }
      </tbody>
      </table>
    </div>
  )
}

export default Redes
