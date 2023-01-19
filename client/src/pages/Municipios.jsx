import React from 'react'
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useModal } from "../hooks/useModal";
import MunicipiosForm from '../models/MunicipiosForm';

const Municipios = () => {
    const { openModal, closeModal } = useModal("Municipios", <MunicipiosForm />);

  const [municipios, setMunicipios] = useState([]);

  async function MostrarMunicipios() {
    const response = await fetch('http://127.0.0.1:8000/api/municipios', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "accept": "application/json",
      },
    })
    const respuesta = await response?.json();
    setMunicipios(respuesta);
  }
  async function EliminarMunicipios(id) {
    const response = await fetch('http://127.0.0.1:8000/api/municipios/' + id, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        "accept": "application/json",
      },
    })
    if (response.ok) {
        MostrarMunicipios();
    }
  }
  useEffect(() => {
    MostrarMunicipios();
  }, [])
  return (
    <div>
      <div className='Titulo'>
        <div>Listado de Municipios</div>
      </div>
      <br />
      <div>
        <button type="submit" onClick={openModal}>Agregar Nuevo Municipio</button>
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
          municipios.map((v, i) => (
            <tbody key={i} >
              <tr  >
                <th>{v.id}</th>
                <th>{v.municipio}</th>
                <th>{v.id_ciudades}</th>
                <th>
                  <div className='Acciones'>
                    <div className='Editar'>
                      <button className='BotonEditar'>Editar</button>
                    </div>
                    <div className='Eliminar'>
                      <button className='BotonEliminar' onClick={() => EliminarMunicipios(v.id)}>Eliminar</button>
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

export default Municipios
