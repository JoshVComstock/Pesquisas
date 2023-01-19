import React from 'react'
import { useState, useEffect } from 'react';
import styled from 'styled-components';
const Centros = () => {
  const [centros, setCentros] = useState([]);

  async function MostrarCentros() {
    const response = await fetch('http://127.0.0.1:8000/api/centros', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "accept": "application/json",
      },
    })
    const respuesta = await response?.json();
    setCentros(respuesta);
  }
  async function EliminarCentros(id) {
    const response = await fetch('http://127.0.0.1:8000/api/centros/' + id, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        "accept": "application/json",
      },
    })
    if (response.ok) {
      MostrarCentros();
    }
  }
  useEffect(() => {
    MostrarCentros();
  }, [])
  return (
    <div>
      <table>
        <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Redes</th>
          <th>Telefono</th>
          <th>Ciudad</th>
          <th>Área</th>
          <th>Seguimiento</th>
          <th>Contacto</th>
          <th>Acciones</th>
          <th><button type="submit">AGREGAR</button></th>
        </tr>
      </thead>
        {
          centros.map((v, i) => (
            <tbody key={i} >
              <tr  >
                <th>{v.id}</th>
                <th>{v.nombre}</th>
                <th>{v.id_redes}</th>
                <th>{v.telefono}</th>
                <th>{v.id_ciudades}</th>
                <th>{v.area}</th>
                <th>{v.seguimiento_casos}</th>
                <th>{v.contacto}</th>
                <th>
                  <div >
                    <div >
                      <button >Editar</button>
                    </div>
                    <div >
                      <button >Eliminar</button>
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
};
export default Centros;

