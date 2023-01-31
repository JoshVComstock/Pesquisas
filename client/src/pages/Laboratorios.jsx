import React from 'react'
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useModal } from "../hooks/useModal";
import LaboratoriosForm from '../models/LaboratoriosForm';
import New from "./../img/new.jpg";
import Pdf from "./../img/pdf.jpg";
import Excel from "./../img/doc.jpg";
import Searchicons from "./../img/search.jpg";
import {
  Container,
  Titulo,
  Divbotones,
  Botonespdf,
  Botonespdf1,
  Botonespdf2,
  Img,
  Divsearchpadre,
  Divsearch,
  Search,
  Botonsearch,
  Botonacciones,
  Iconsacciones,
} from "../styles/crud";
import {
  Iconsacciones1,
  Botonesacciones,
  Divtabla,
  Thead,
  Tbody,
  Th,
  Trdatos,
} from "../styles/crud";


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
    <Container>
    <Titulo>Laborarios</Titulo>
    <Divbotones>
      <Botonespdf2 onClick={openModal}>
        <Img src={New} alt="" /> Nuevo
      </Botonespdf2>
      <Botonespdf1>
        <Img src={Pdf} alt="" />
        PDF
      </Botonespdf1>
      <Botonespdf>
        <Img src={Excel} alt="" />
        Excel
      </Botonespdf>{" "}
    </Divbotones>
    <Divsearchpadre>
      <Divsearch>
        <Search type="text" placeholder="Buscar" />
        <Botonsearch>
          <Img src={Searchicons} alt="" />{" "}
        </Botonsearch>
      </Divsearch>
    </Divsearchpadre>
    <Divtabla>
      <table className="table">
        <Thead>
          <tr>
            <th>Nº</th>
            <th>NOMBRE</th>
            <th>DIRECCION</th>
            <th>TELEFONO</th>
            <th>CENTROS</th>
            <th>CIUDADES</th>
            <th>REDES</th>
            <th>EXTRA</th>
            
            <Th>ACCIONES</Th>
          </tr>
        </Thead>
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
    </Divtabla>
  </Container>
  )
}

export default Laboratorios

