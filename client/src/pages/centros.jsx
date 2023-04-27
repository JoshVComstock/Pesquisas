import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useModal } from "../hooks/useModal";
import CentroForm from "../models/CentroForm";
import New from "./../img/new.jpg";
import Pdf from "./../img/pdf.jpg";
import Excel from "./../img/doc.jpg";
import Searchicons from "./../img/search.jpg";
import Editar from "./../img/icons/Editar.jpg";
import Eliminar from "./../img/icons/Delete.jpg";
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
const Centros = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const [centroactual, setCentroactual] = useState({});
  const { getApi, data: cntros } = UseFech(getCentros);
  const { openModal, closeModal } = useModal(
    Object.keys(centroactual).lengTh > 0
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
    if (Object.keys(centroactual).lengTh > 0) {
      openModal();
    }
  }, [centroactual]);
  const mostrarpdf = async () => {
    const response = await fetch(
      `${baseUrl}centros-pdf`,
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
        <Divbotonesa>
          <div onClick={() => setIsExpanded(!isExpanded)}>
            <section>
              Generar
              <img src="src\img\abajo.png" alt="" />
            </section>
            {isExpanded && <option onClick={mostrarpdf}>Pdf</option>}
          </div>
        </Divbotonesa>
        <Sectiond>
          <Dippadretabla>
            <section>
              <button onClick={openModal}>+</button>
              <h2>Registros Centro</h2>
            </section>
            <Sectiontabla>
            <Divtabla>
              <Tabla>
                <Thead>
                  <tr>
                    <th>Nº</th>
                    <th>NOMBRE</th>
                    <th>DIRECCIÓN</th>
                    <th>TELEFONO</th>
                    <th>MUNICIPIO</th>
                    <th>AREA</th>
                    <th>SEGUIMIENTO</th>
                    <th>CONTACTO</th>
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
                              <Botonesacciones>
                                <Iconsacciones
                                  onClick={() => {
                                    setCentroactual(v);
                                  }}
                                >
                                  Editar
                                </Iconsacciones>
                              </Botonesacciones>
                            </div>
                            <div>
                              <Botonesacciones
                                onClick={() => {
                                  deleteCentros(v.id, getApi);
                                }}
                              >
                                <Iconsacciones1>Eliminar</Iconsacciones1>
                              </Botonesacciones>
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
  gap: 2em;
`;
export const Dippadretabla = styled.div`
  width: auto;
  gap: 0.5em;
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
    flex-direction: row-reverse;
    justify-content: flex-end;
    & > button {
      width: 2.5em;
      height: 2.5em;
      margin: 0.5em 0 0 0;
      background-color: #4e4ee2;
      color: #fff;
      border-radius: 5px;
      font-size: 15px;
      transition: all 2s ease-in-out;
      &:hover {
        transform: rotate(180deg);
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
