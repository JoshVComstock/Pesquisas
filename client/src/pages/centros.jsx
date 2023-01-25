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
    <div className='body'>
      <div className='Container'>
        <div cclassName='Div-Titulo'>
          <div className='Titulo'>Listado de Centros de Salud</div>
        </div>
        <div>
          <button className='BotonAgregar' type="submit" onClick={openModal}><FontAwesomeIcon icon={faEdit}/>Agregar Centro de Salud</button>
        </div>
        <div className='Tabla'>
          <table className='table'>
            <thead className='thead'>
              <tr>
                <th className='th'>ID</th>
                <th className='th'>Nombre</th>
                <th className='th'>Dirección</th>
                <th className='th'>Redes</th>
                <th className='th'>Teléfono</th>
                <th className='th'>Ciudad</th>
                <th className='th'>Área</th>
                <th className='th'>Seguimiento</th>
                <th className='th'>Contacto</th>

                <th className='th'>Acciones</th>
              </tr>
            </thead>
            {
              centros.map((v, i) => (
                <tbody className='tbody' key={i} >
                  <tr>
                    <th className='td'>{v.id}</th>
                    <th className='td'>{v.nombre}</th>
                    <th className='td'>{v.direccion}</th>
                    <th className='td'>{v.id_redes}</th>
                    <th className='td'>{v.telefono}</th>
                    <th className='td'>{v.id_ciudades}</th>
                    <th className='td'>{v.area}</th>
                    <th className='td'>{v.seguimiento_casos}</th>
                    <th className='td'>{v.contacto}</th>
                    <th>
                      <div className='Acciones'>
                        <div>
                          <button className='BotonEditar'><FontAwesomeIcon icon={faEdit}/>Editar</button>
                        </div>
                        <div>
                          <button className='BotonEliminar' onClick={() => EliminarCentros(v.id)}><FontAwesomeIcon icon={faTrash}/>Eliminar</button>
                        </div>
                      </div>
                    </th>
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

export default Centros