import React from 'react'
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useModal } from "../hooks/useModal";
import LaboratoriosForm from '../models/LaboratoriosForm';

const Laboratorios = () => {
  const { openModal, closeModal } = useModal("Laboratorios", <LaboratoriosForm />);

  const [laboratorios, setLaboratorios] = useState([]);

  async function MostrarLaboratorios() {
    const response = await fetch('http://127.0.0.1:8000/api/laboratorios', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "accept": "application/json",
      },
    })
    const respuesta = await response?.json();
    setLaboratorios(respuesta);
  }
  async function EliminarLaboratorios(id) {
    const response = await fetch('http://127.0.0.1:8000/api/laboratorios/' + id, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        "accept": "application/json",
      },
    })
    if (response.ok) {
      MostrarLaboratorios();
    }
  }
  useEffect(() => {
    MostrarLaboratorios();
  }, [])
  return (
    <div>
      <div className='Titulo'>
        <div>Listado de Laboratorios</div>
      </div>
      <br />
      <div>
        <button type="submit" onClick={openModal}>Agregar un Nuevo Laboratorio</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Dirección</th>
            <th>Teléfono</th>
            <th>Centro</th>
            <th>Ciudad</th>
            <th>Redes</th>

            <th>Acciones</th>
          </tr>
        </thead>
        {
          laboratorios.map((v, i) => (
            <tbody key={i} >
              <tr  >
                <th>{v.id}</th>
                <th>{v.nombre}</th>
                <th>{v.direccion}</th>
                <th>{v.telefono}</th>
                <th>{v.id_centros}</th>
                <th>{v.id_ciudades}</th>
                <th>{v.id_redes}</th>
                <th>
                  <div className='Acciones'>
                    <div className='Editar'>
                      <button className='BotonEditar'>Editar</button>
                    </div>
                    <div className='Eliminar'>
                      <button className='BotonEliminar' onClick={() => EliminarLaboratorios(v.id)}>Eliminar</button>
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

export default Laboratorios

