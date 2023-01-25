import React from 'react'
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useModal } from "../hooks/useModal";
import CiudadesForm from '../models/CiudadesForm';
import '../pages/css/Ciudades.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAdd} from '@fortawesome/free-solid-svg-icons';
import {faEdit} from '@fortawesome/free-solid-svg-icons';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

const Ciudades = () => {
  const { openModal, closeModal } = useModal("Ciudades",<CiudadesForm/>);

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
    <div className='body'>
      <div className='Container'>
        <div className='Div-Titulo'>
          <div className='Titulo'>Listado de Ciudades</div>
        </div>
        <div>
          <button className='BotonAgregar' type="submit" onClick={openModal}><FontAwesomeIcon icon={faEdit}/> Registrar Ciudad</button>
        </div>
        <div className='Tabla'>
          <table className='table'>
            <thead className='thead'>
              <tr>
                <th className='th'>Código</th>
                <th className='th'>Ciudad</th>
                <th className='th'>Acciones</th>
              </tr>
            </thead>
            {
              ciudades.map((v, i) => (
                <tbody className='tbody' key={i} >
                  <tr >
                    <td className='td'>{v.id}</td>
                    <td className='td'>{v.ciudad}</td>
                    <td className='td'>
                      <div className='Acciones'>
                        <div>
                          <button className='BotonEditar'><FontAwesomeIcon icon={faEdit}/>Editar</button>
                        </div>
                        <div>
                          <button className='BotonEliminar' onClick={() => eliminarciudades(v.id)}><FontAwesomeIcon icon={faTrash}/>Eliminar</button>
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