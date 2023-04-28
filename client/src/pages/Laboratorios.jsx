import React from 'react'
import { useState, useEffect } from "react";
import { useModal } from "../hooks/useModal";
import New from "./../img/new.jpg";
import Pdf from "./../img/pdf.jpg";
import Excel from "./../img/doc.jpg";
import Searchicons from "./../img/search.jpg";
import Editar from "./../img/icons/Editar.jpg";
import Eliminar from "./../img/icons/Delete.jpg";
import LaboratoriosForm from '../models/LaboratoriosForm';
const baseUrl = import.meta.env.VITE_BACKEND_URL;
import CSVExporter from "../pages/Reportescom";
import styled from 'styled-components';
import {
  Container,
  Botonacciones,
  Iconsacciones,
  Iconsacciones1,
  Botonesacciones,
  Divtabla,
  Thead,
  Tbody,
  Th,
  Trdatos,
  Tabla,Sectionpa,Divreport,Divmayor,Sectiontabla
} from "../styles/crud";
import Laboratorioicons from "../img/icons/Laboratorio.jpg";
import mun from "../img/icons/Municipio.jpg";

import { UseFech } from "../hooks/useFech";
import { deleteLaboratorios, getLaboratorios } from "../services/Laboratorios";
import Redes from './Redes';
const Laboratorios = () => {
  const apiUrl = `${baseUrl}ciudades`;
    const csvHeaders = ["id", "ciudad"];
  const [actual, setLaboratorioactual] = useState({});
  const { getApi, data: laboratorios } = UseFech(getLaboratorios);
  const { openModal, closeModal } = useModal(
    Object.keys(actual).length > 0 ? "Editar Registro de Laboratorio" : "Agregar Laboratorio",
    <LaboratoriosForm
      getApi={getApi}
      actual={actual}
      setLaboratorioactual={setLaboratorioactual}
      closeModal={() => {
        closeModal();
      }}
    />
  );
  const [filtro, setFiltro] = useState("");
  useEffect(() => {
    if (Object.keys(actual).length > 0) {
      openModal();
    }
  }, [actual]);

  const mostrarpdf = async () => {
    const response = await fetch(
      `${baseUrl}Laboratorio-pdf`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    window.open(url, "_blank");
    return response;
  };
  return (
    <Container>
     <Sectionpa>
     <Divreport>
          <div>
          <img src={Laboratorioicons} alt="" />
            <section>
              <h3>{laboratorios.length}</h3>
              <p>n° registros</p>
              <p>Laboratorios</p>
            </section>
         
          </div>
          <div>
          <img src={mun} alt="" />
            <section>
              <h3>6</h3>
              <p>n° registros</p>
              <p>Municipio</p>
            </section>
</div>
      
        </Divreport>
        <Sectiond>

     <Dippadretabla>
     <Divmayor><label >buscar</label> <input  type="text"
            placeholder="Buscar"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)} /></Divmayor>
       <section>
       <button >
    <CSVExporter apiUrl={apiUrl} csvHeaders={csvHeaders} />

       </button>

       <button onClick={mostrarpdf} >Pdf</button>
       <button onClick={openModal} >+</button>
        <h2>Registros Laboratorios</h2>
       </section>
          <Sectiontabla>
      <Divtabla>
        <Tabla >
          <Thead>
            <tr>
              <Th>Nº</Th>
              <Th>NOMBRE</Th>
              <Th>DIRECCIÓN</Th>
              <Th>TELÉFONO</Th>
              <Th>PROVINCIA</Th>
              <Th>ACCIONES</Th>
            </tr>
          </Thead>
          {laboratorios
            .filter((v) =>
              v.nombre.toLowerCase().includes(filtro.toLowerCase())
            )
            .map((v, i) => (
              <Tbody key={i}>
                <tr>
                  <Trdatos>{i + 1}</Trdatos>
                  <Trdatos>{v.nombre}</Trdatos>
                  <Trdatos>{v.direccion}</Trdatos>
                  <Trdatos>{v.telefono}</Trdatos>
                  <Trdatos>{v.provincia}</Trdatos>
                  <Trdatos>
                    <Botonacciones>
                      <div>
                          <Iconsacciones
                            onClick={() => {setLaboratorioactual(v);}}
                        >Editar</Iconsacciones>
                       
                      </div>
                      <div>
                          <Iconsacciones1 onClick={() => deleteLaboratorios(v.id,getApi)}>Eliminar</Iconsacciones1>
                      </div>
                    </Botonacciones>
                  </Trdatos>
                </tr>
              </Tbody>
            ))}
      </Tabla>
            </Divtabla>
          </Sectiontabla>
        </Dippadretabla>
        <Dippadretabla>
         <Redes/> 
        </Dippadretabla>
      </Sectiond>
      </Sectionpa>
    </Container>
  )
}

export default Laboratorios;
export const Sectiond = styled.div`
width:100%;
display:flex;
flex-direction:row;
flex-wrap: wrap;
gap:2em;

`;
export const Dippadretabla = styled.div`
  width: 47.8%;
  
  margin: 0 auto;
  background: rgb(255, 255, 255);
  overflow: hidden;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: solid 1px #0002;
  & section {
    width: 100%;
    display: flex; 
    gap:0.5em;
    flex-direction: row-reverse;
    justify-content: flex-end;
    & > button {
      
      width: 2.8em;
      height: 2.8em;
      background-color: rgb(34, 152, 202);
      color: #fff;
      border-radius: 0 0 8px 8px;
      font-size: 15px;
      transition: all 0.5s ease;
      box-shadow:0 5px 5px #00002271;
      /* &:nth-child(2) {
  background-color:rgba(145, 22, 0, 0.802);
  color:#fff;}
  &:nth-child(1) {
  background-color: #008610c3;
  color:#fff;} */
      &:hover {
      height: 3em;
      }
    }
    & h2 {
      font-size: 1em;
      padding: 0.5em 2em;
      letter-spacing: 1.5px;
      &::first-letter {
        color: blue;
        font-size: 1.2em;
      }
    }
  }
`;

