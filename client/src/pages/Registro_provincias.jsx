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


// cpo

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


// import 



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
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
          />
          <Botonsearch>
            <Img src={Searchicons} alt="" />{" "}
          </Botonsearch>
        </Divsearch>
      </Divsearchpadre>
     <Divtabla>
        <Tabla>
          <Thead>
            <tr>
              <Td>Nº</Td>
              <Td>Hora</Td>
              <Td>Fecha</Td>
              <Td>Provincias</Td>
              <Td>Municipios</Td>
              <Td>Centros</Td>
              <Td>Cantidad Recibida</Td>
              <Td>Cantidad Entregada</Td>
              <Td>Codigo Tarjeta</Td>
              <Td>Entregado Por</Td>
              <Td>Telefono</Td>
              <Td>Recibido Por</Td>
            </tr>
          </Thead>
          {
              registroprovincias.map((v, i) => (
                <tbody key={i} >
                  <Trdatos>
                    <td>{v.id}</td>
                    <td>{v.hora}</td>
                    <td>{v.fecha}</td>
                    <td>{v.id_provincias}</td>
                    <td>{v.id_municipios}</td>
                    <td>{v.id_centros}</td>
                    <td>{v.cantidad_recibida}</td>
                    <td>{v.cantidad_entregada}</td>
                    <td>{v.cod_tarjeta}</td>
                    <td>{v.	entregado_por}</td>
                    <td>{v.	telefono}</td>
                    <td>{v.recibido_por}</td>
                    <td>
                      <Botonacciones >
                        <div>
                          <Botonesacciones><Iconsacciones src={Editar} alt="" /></Botonesacciones>
                        </div>
                        <div>
                          <Botonesacciones onClick={()=>eliminarregistro(v.id)}> <Iconsacciones1 src={Eliminar} alt="" /></Botonesacciones>
                        </div>
                      </Botonacciones>
                    </td>
                  </Trdatos>
                </tbody>
              ))
            }
        </Tabla>
      </Divtabla>
    </Container>
  )
}

export default Registro_provincia;

