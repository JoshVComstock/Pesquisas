import React from 'react'
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useModal } from "../hooks/useModal";
import ProvinciasForm from '../models/ProvinciasForm';

const Provincias = () => {
  const { openModal, closeModal } = useModal("Provincias", <ProvinciasForm />);

  const [provincias, setProvincias] = useState([]);

  async function MostrarProvincias() {
    const response = await fetch('http://127.0.0.1:8000/api/provincias', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "accept": "application/json",
      },
    })
    const respuesta = await response?.json();
    setProvincias(respuesta);
  }
  async function EliminarProvincias(id) {
    const response = await fetch('http://127.0.0.1:8000/api/provincias/' + id, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        "accept": "application/json",
      },
    })
    if (response.ok) {
      MostrarProvincias();
    }
  }
  useEffect(() => {
    MostrarProvincias();
  }, [])
  return (
    <div>
      <div className='Titulo'>
        <div>Listado de Provincias</div>
      </div>
      <br />
      <div>
        <button type="submit" onClick={openModal}>Agregar una Nueva Provincia</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Ciudad</th>

            <th>Acciones</th>
          </tr>
        </thead>
        {
          provincias.map((v, i) => (
            <tbody key={i} >
              <tr  >
                <th>{v.id}</th>
                <th>{v.provincia}</th>
                <th>{v.id_ciudades}</th>
                <th>
                  <div className='Acciones'>
                    <div className='Editar'>
                      <button className='BotonEditar'>Editar</button>
                    </div>
                    <div className='Eliminar'>
                      <button className='BotonEliminar' onClick={() => EliminarProvincias(v.id)}>Eliminar</button>
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

export default Provincias