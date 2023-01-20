import React from 'react'
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useModal } from "../hooks/useModal";
import CentroForm from '../models/CentroForm';
import Centros from './centros';

const Ciudades = () => {
  const { openModal, closeModal } = useModal("Centros",<CentroForm/>);

  const [ciudades, setCiudades] = useState([]);

  async function mostrarciudades() {
    const response = await fetch('http://127.0.0.1:8000/api/ciudades', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "accept": "application/json",
      },
    })
    const respuesta = await response?.json();
    setCiudades(respuesta);
  }
  async function eliminarciudades(id) {
    const response = await fetch('http://127.0.0.1:8000/api/ciudades/' + id, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        "accept": "application/json",
      },
    })
    if (response.ok) {
      mostrarciudades();
    }
  }
  useEffect(() => {
    mostrarciudades();
  }, [])
  return (
    <div className='Container'>
      <div className='body'>
        <div className='Titulo'>
          <div>Listado de Ciudades</div>
        </div>
        <br />
        <div className='Tabla'>
          <table className='table'>
            <thead className='thead'>
              <tr>
                <th>Código</th>
                <th>Ciudad</th>
                <th>Acciones</th>
                <th><Botonagregar type="submit" onClick={openModal}>Nuevo</Botonagregar></th>
              </tr>
            </thead>
            {
              ciudades.map((v, i) => (
                <tbody className='tbody' key={i} >
                  <tr  >
                    <td>{v.id}</td>
                    <td>{v.ciudad}</td>
                    <td>
                      <div className='Acciones'>
                        <div>
                          <button className='BotonEditar'>Editar</button>
                        </div>
                        <div>
                          <button className='BotonEliminar' onClick={() => eliminarciudades(v.id)}>Eliminar</button>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              ))
            }
          </table>
        </div>
      </div>
    </div>
  )
}

export default Ciudades

const Botonagregar=styled.button`
  border: 2px solid black;
  &:hover{
    background: rgba(0,0,0,0.1);
    cursor: pointer;
  }
`;