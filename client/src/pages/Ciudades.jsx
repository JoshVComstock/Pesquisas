import React from "react";

import { useState, useEffect } from "react";
import { useModal } from "../hooks/useModal";
import CiudadesForm from "../Models/CiudadesForm";
import styled from "styled-components";
const baseUrl = import.meta.env.VITE_BACKEND_URL;
import {
  Container,
  Titulo,
  Divbotones,
  Divsearchpadre,
  Divsearch,
  Search,
  Botonsearch,
  Botonacciones,
  Iconsacciones,
  Iconsacciones1,
  Botonesacciones,
  Divtabla,
  Thead,
  Tbody,
  Th,
  Trdatos,
  Sectiontabla,
  Tabla,
  Sectionpa,
  Divreport,
  Divbotonesa,
  Divmayor,
} from "../styles/crud";
import { UseFech } from "../hooks/useFech";
import { deleteCiudades, getCiudades } from "../services/Ciudades";
import { getciudadpdf } from "../reports/ciudadpdf";
import Provincias from "./Provincias";
import { deleteProvincias, getProvincias } from "../services/provincias";
import CSVExporter from "../pages/Reportescom";
import New from "./../img/new.jpg";
import Pdf from "./../img/pdf.jpg";
import Excel from "./../img/doc.jpg";
import Searchicons from "./../img/search.jpg";
import Editar from "./../img/icons/Editar.jpg";
import Eliminar from "./../img/icons/Delete.jpg";
const Ciudades = () => {
  // solo para el select
  const [isExpanded, setIsExpanded] = useState(false);
  //------
  const apiUrl = `${baseUrl}ciudades`;
  const csvHeaders = ["id", "ciudad"];

  const [ciudadactual, setCiudadactual] = useState({});
  const { getApi, data: ciudades } = UseFech(getCiudades);
  const { data } = UseFech(getciudadpdf);
  const { openModal, closeModal } = useModal(
    Object.keys(ciudadactual).length > 0 ? "Editar Ciudad" : "Agregar ciudad",
    <CiudadesForm
      getApi={getApi}
      ciudadactual={ciudadactual}
      setCiudadactual={setCiudadactual}
      closeModal={() => {
        closeModal();
      }}
    />
  );
  const [filtro, setFiltro] = useState("");
  useEffect(() => {
    if (Object.keys(ciudadactual).length > 0) {
      openModal();
    }
  }, [ciudadactual]);
  const mostrarpdf = async () => {
    const response = await fetch(`${baseUrl}Ciudades-pdf`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    window.open(url, "_blank");
    return response;
  };
  // ---------------

  return (
    <Container>
      <Sectionpa>
        <Divreport>
          <div>
            <img src="src\img\gestion.png" alt="" />
            <section>
              <h3>{ciudades.length}</h3>
              <p>n° registros</p>
              <p>Ciudades</p>
            </section>
          </div>
          <div>
            <img src="src\img\gestion.png" alt="" />
            <section>
              <h3>3</h3>
              <p>n° registros</p>
              <p>Provincia</p>
            </section>
          </div>
          <div>
            <img src="src\img\gestion.png" alt="" />
            <section>
              <h3>126</h3>
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

        <Sectiond>
          <Dippadretabla>
            <Divmayor>
              <label>buscar</label>{" "}
              <input
                type="text"
                placeholder="Buscar"
                value={filtro}
                onChange={(e) => setFiltro(e.target.value)}
              />
            </Divmayor>
            <section>
              <button>
                <CSVExporter apiUrl={apiUrl} csvHeaders={csvHeaders} />
              </button>

              <button onClick={mostrarpdf}>Pdf</button>
              <button onClick={openModal}>+</button>
              <h2>Registros Ciudades</h2>
            </section>
            <Sectiontabla>
              <Divtabla>
                <Tabla>
                  <Thead>
                    <tr>
                      <Trdatos data-label="Nº"></Trdatos>
                      <Trdatos data-label="CIUDAD"></Trdatos>
                      <Trdatos data-label="ACCIONES">
                        <Botonacciones>
                          <div>
                            <Botonesacciones>
                              <Iconsacciones
                                src={Editar}
                                alt=""
                                onClick={() => {
                                  setCiudadactual(v);
                                }}
                              />
                            </Botonesacciones>
                          </div>
                          <div>
                            <Botonesacciones
                              onClick={() => {
                                deleteCiudades(v.id, getApi);
                              }}
                            >
                              <Iconsacciones1 src={Eliminar} alt="Eliminar" />
                            </Botonesacciones>
                          </div>
                        </Botonacciones>
                      </Trdatos>
                    </tr>
                  </Thead>
                  {ciudades
                    .filter((v) =>
                      v.ciudad.toLowerCase().includes(filtro.toLowerCase())
                    )
                    .map((v, i) => (
                      <Tbody key={i}>
                        <tr>
                          <Trdatos data-label="Nº">{i + 1}</Trdatos>
                          <Trdatos data-label="CIUDAD">{v.ciudad}</Trdatos>
                          <Trdatos data-label="ACCIONES">
                            <Botonacciones>
                              <div>
                                <Iconsacciones
                                  onClick={() => {
                                    setCiudadactual(v);
                                  }}
                                >
                                  Editar
                                </Iconsacciones>
                              </div>
                              <div>
                                <Iconsacciones1
                                  onClick={() => {
                                    deleteCiudades(v.id, getApi);
                                  }}
                                >
                                  Eliminar
                                </Iconsacciones1>
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
            <Provincias />
          </Dippadretabla>
        </Sectiond>
      </Sectionpa>
    </Container>
  );
};
export default Ciudades;

export const Sectiond = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2em;
`;
export const Dippadretabla = styled.div`
  width: 47.8%;
<<<<<<< HEAD
  gap: 0.5em;
=======
  
>>>>>>> a5e16d015cb47bceaab590e4a3d91d7d568b1090
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
    gap: 0.5em;
    flex-direction: row-reverse;
    justify-content: flex-end;
    & > button {
      
      width: 2.8em;
      height: 2.8em;
      background-color: rgb(34, 152, 202);
      color: #fff;
      border-radius: 0 0 8px 8px;
      font-size: 15px;
<<<<<<< HEAD
      transition: all 0.5s ease-in-out;
      &:nth-child(2) {
        background-color: rgb(138, 30, 10);
        color: #fff;
      }
      &:nth-child(1) {
        background-color: #1a8727;
        color: #fff;
      }
      &:hover {
        transform: translatey(8px);
=======
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
>>>>>>> a5e16d015cb47bceaab590e4a3d91d7d568b1090
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
