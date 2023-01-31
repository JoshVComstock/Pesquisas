import React from 'react'
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useModal } from "../hooks/useModal";
import Registro_provinciaForm from "../Models/Registro_provinciaForm";
import New from "./../img/new.jpg"
import Pdf from "./../img/pdf.jpg"
import Excel from "./../img/doc.jpg"
import Searchicons from "./../img/search.jpg"
import Editar from "./../img/icons/Editar.jpg"
import Eliminar from "./../img/icons/Delete.jpg"


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



const Registro_provincia = () => {
  const { openModal, closeModal } = useModal(
    "Registro de provincias",
    <Registro_provinciaForm mostrarRegistroPro={mostrarRegistroPro} />
  );
  const [registroprovincias, setRegistroprovincias] = useState([]);

  async function mostrarRegistroPro  () {
    const response = await fetch(
      "http://127.0.0.1:8000/api/registro_provincias",
      {
        method: "GET",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      }
    );
    const respuesta = await response?.json();
    setRegistroprovincias(respuesta);
    closeModal();
    
  }

  async function eliminarregistro(id) {
    const response = await fetch(
      "http://127.0.0.1:8000/api/registro_provincias/" + id,
      {
        method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      }
    );
    if (response.ok) {
      mostrarRegistroPro();
    }
  }
  useEffect(() => {
    mostrarRegistroPro();
  }, []);
  
  return (
    <Container>
      <Titulo>Ciudades</Titulo>
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
          <Search
            type="text"
            placeholder="Buscar"
           
          />
          <Botonsearch>
            <Img src={Searchicons} alt="" />{" "}
          </Botonsearch>
        </Divsearch>
      </Divsearchpadre>
     <Divtabla>
        <table className='table'>
          <Thead>
            <tr>
              <th>Nº</th>
              <th>Hora</th>
              <th>Fecha</th>
              <th>Provincias</th>
              <th>Municipios</th>
              <th>Centros</th>
              <th>Cantidad Recibida</th>
              <th>Cantidad Entregada</th>
              <th>Codigo Tarjeta</th>
              <th>Entregado Por</th>
              <th>Telefono</th>
              <th>Recibido Por</th>
              <Th>Acciones</Th>
            </tr>
          </Thead>
          {
              registroprovincias.map((v, i) => (
                <tbody key={i} >
                  <tr>
                    <th>{v.id}</th>
                    <th>{v.hora}</th>
                    <th>{v.fecha}</th>
                    <th>{v.id_provincias}</th>
                    <th>{v.id_municipios}</th>
                    <th>{v.id_centros}</th>
                    <th>{v.cantidad_recibida}</th>
                    <th>{v.cantidad_entregada}</th>
                    <th>{v.cod_tarjeta}</th>
                    <th>{v.	entregado_por}</th>
                    <th>{v.	telefono}</th>
                    <th>{v.recibido_por}</th>
                    <th>
                      <Botonacciones >
                        <div>
                          <Botonesacciones><Iconsacciones src={Editar} alt="" /></Botonesacciones>
                        </div>
                        <div>
                          <Botonesacciones onClick={()=>eliminarregistro(v.id)}> <Iconsacciones1 src={Eliminar} alt="" /></Botonesacciones>
                        </div>
                      </Botonacciones>
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

export default Registro_provincia;

