import React from 'react'
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useModal } from "../hooks/useModal";
import CentroForm from '../models/CentroForm';

const Centros = () => {
  const { openModal, closeModal } = useModal("Centros de Salud", <CentroForm />);

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
      <div className='Titulo'>
        <div>Listado de Centros de Salud</div>
      </div>
      <br />
      <div>
        <button type="submit" onClick={openModal}>Agregar un Nuevo Centro de Salud</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Dirección</th>
            <th>Redes</th>
            <th>Teléfono</th>
            <th>Ciudad</th>
            <th>Área</th>
            <th>Seguimiento</th>
            <th>Contacto</th>

            <th>Acciones</th>
          </tr>
        </thead>
        {
          centros.map((v, i) => (
            <tbody key={i} >
              <tr  >
                <th>{v.id}</th>
                <th>{v.nombre}</th>
                <th>{v.direccion}</th>
                <th>{v.id_redes}</th>
                <th>{v.telefono}</th>
                <th>{v.id_ciudades}</th>
                <th>{v.area}</th>
                <th>{v.seguimiento_casos}</th>
                <th>{v.contacto}</th>
                <th>
                  <div className='Acciones'>
                    <div className='Editar'>
                      <button className='BotonEditar'>Editar</button>
                    </div>
                    <div className='Eliminar'>
                      <button className='BotonEliminar' onClick={() => EliminarCentros(v.id)}>Eliminar</button>
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

export default Centros