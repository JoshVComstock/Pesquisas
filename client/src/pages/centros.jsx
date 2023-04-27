import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useModal } from "../hooks/useModal";
import CentroForm from "../models/CentroForm";
const baseUrl = import.meta.env.VITE_BACKEND_URL;


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
  Tabla,
  Sectionpa,
  Divreport,
  Divbotonesa,Sectiontabla,
} from "../styles/crud";
import { UseFech } from "../hooks/useFech";
import { deleteCentros, getCentros } from "../services/centros";
import Municipios from "./Municipios";
import CSVExporter from "../pages/Reportescom";

const Centros = () => {
  const apiUrl = `${baseUrl}centros`;
  const csvHeaders = ["id", "nombre","direccion","telefono","id_municipios","area","seguimiento_casos","contacto"];
  const [centroactual, setCentroactual] = useState({});
  const { getApi, data: cntros } = UseFech(getCentros);
  const { openModal, closeModal } = useModal(
    Object.keys(centroactual).length > 0
      ? "Editar Centro de Salud"
      : "Agregar Centro de Salud",
    <CentroForm
      getApi={getApi}
      centroactual={centroactual}
      setCentroactual={setCentroactual}
      closeModal={() => {
        closeModal();
      }}
    />
  );

  const [filtro, setFiltro] = useState("");
  useEffect(() => {
    if (Object.keys(centroactual).length > 0) {
      openModal();
    }
  }, [centroactual]);
  const mostrarpdf = async () => {
    const response = await fetch(
      `${baseUrl}Centros-pdf`,
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
        {/* <Divsearchpadre>
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
      </Divsearchpadre> */}
        {/* <Divbotones>
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
      </Divbotones> */}

        <Divreport>
          <div>
            <img src="src\img\gestion.png" alt="" />
            <section>
              <h3>{cntros.length}</h3>
              <p>n° registros</p>
              <p>Ciudades</p>
            </section>
          </div>
          <div>
            <img src="src\img\gestion.png" alt="" />
            <section>
              <h3>{cntros.length}</h3>
              <p>n° registros</p>
              <p>Centros</p>
            </section>
          </div>
          <div>
            <img src="src\img\gestion.png" alt="" />
            <section>
              <h3>{cntros.length}</h3>
              <p>gestion</p>
            </section>
          </div>
          <div>
            <img src="src\img\gestion.png" alt="" />
            <section>
              <h3>126</h3>
              <p>gestion</p>
            </section>
          </div>
        </Divreport>
        {/* <Divbotonesa>
          <div onClick={() => setIsExpanded(!isExpanded)}>
            <section>
              Generar
              <img src="src\img\abajo.png" alt="" />
            </section>
            {isExpanded && <option onClick={mostrarpdf}>Pdf</option>}
          </div>
        </Divbotonesa> */}
        <Sectiond>
  

          <Dippadretabla>
            <section>
              <button><CSVExporter apiUrl={apiUrl} csvHeaders={csvHeaders} /></button>
              <button onClick={mostrarpdf}>Pdf</button>
              <button onClick={openModal}>+</button>
              <h2>Registros Centro</h2>
            </section>
            <Sectiontabla>
            <Divtabla>
              <Tabla>
                <Thead>
                  <tr>
                    <Th>Nº</Th>
                    <Th>NOMBRE</Th>
                    <Th>DIRECCIÓN</Th>
                    <Th>TELEFONO</Th>
                    <Th>MUNICIPIO</Th>
                    <Th>AREA</Th>
                    <Th>SEGUIMIENTO</Th>
                    <Th>CONTACTO</Th>
                    <Th>ACCIONES</Th>
                  </tr>
                </Thead>
                {cntros
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
                        <Trdatos>{v.municipio}</Trdatos>
                        <Trdatos>{v.area}</Trdatos>
                        <Trdatos>{v.seguimiento_casos}</Trdatos>
                        <Trdatos>{v.contacto}</Trdatos>
                        <Trdatos>
                          <Botonacciones>
                            <div>
                           
                                <Iconsacciones onClick={() => {
                                    setCentroactual(v);
                                    console.log("se ejecuta");
                                  }}
                                >
                                  Editar
                                </Iconsacciones>
                           
                            </div>
                            <div>
                            
                               <button onClick={() => {
                                  deleteCentros(v.id, getApi);
                                  console.log("se ejecuta");
                                  
                                }}>
                               <Iconsacciones1  >Eliminar</Iconsacciones1>
                               </button>
                            
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
            <Municipios />
          </Dippadretabla>
        </Sectiond>
      </Sectionpa>
    </Container>
  );
};

export default Centros;

export const Sectiond = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  gap: 0.5em;
`;
export const Dippadretabla = styled.div`
  gap: 0.2em;
  margin: 0 auto;
  background: rgb(255, 255, 255);
  overflow: hidden;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: solid 1px #0002;
  &:nth-child(2){
  width: 38%;
  }
  &:nth-child(1){
  width: 60%;
  }
  & section {
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    gap:1em;
    & > button {
      
      width: 2.8em;
      height: 2.8em;
      background-color: #000091c6;
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
      padding: 0.5em 1em;
      letter-spacing: 1.5px;
      &::first-letter {
        color: blue;
        font-size: 1.2em;
      }
    }
  }
`;
