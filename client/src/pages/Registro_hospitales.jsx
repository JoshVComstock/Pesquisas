import React from "react";
import { useState, useEffect } from "react";
const baseUrl = import.meta.env.VITE_BACKEND_URL;

import styled from "styled-components";
import { useModal } from "../hooks/useModal";
import Registro_hospitalesForm from "../Models/Registro_hospitalesForm";
import RegistroHospitalesEdit from "../Models/Editform/RegistroHospitalesEdit";
import { useuserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Botonacciones,
  Iconsacciones,
  Divreport,
  Tabla,
  Sectiontabla,
} from "../styles/crud";
import {
  Iconsacciones1,
  Divtabla,
  Thead,
  Tbody,
  Th,
  Trdatos,
  Sectionpa,
  Divmayor,
} from "../styles/crud";
import CSVExporter from "../pages/Reportescom";

const Registro_hospitales = () => {
  const [sumaCantidadRecibida, setSumaCantidadRecibida] = useState(0);
  const [sumaCantidadEntregada, setSumaCantidadEntregada] = useState(0);

  const apiUrl = `${baseUrl}registro_hospitales`;
  const csvHeaders = ["id", "ciudad"];

  const [registrohospitalactual, setReHospitalactual] = useState({});

  const { user } = useuserContext();
  const navegate = useNavigate();
  const { openModal: editarOpen, closeModal: editarClose } = useModal(
    "Editar Registro Hospitales",
    <RegistroHospitalesEdit
      registrohospitalactual={registrohospitalactual}
      MostrarReHospitales={MostrarReHospitales}
    />
  );

  const { openModal, closeModal } = useModal(
    "Registro de Hospitales",
    <Registro_hospitalesForm MostrarReHospitales={MostrarReHospitales} />
  );
  const [registrohospitales, setRegistrohospitales] = useState([]);
  const [filtro, setFiltro] = useState("");

  async function MostrarReHospitales() {
    const response = await fetch(
      "http://127.0.0.1:8000/api/registro_hospitales",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
      }
    );
    const respuesta = await response?.json();
    setRegistrohospitales(respuesta);
    closeModal();
    editarClose();
  }

  async function EliminarReHospitales(id) {
    const response = await fetch(
      "http://127.0.0.1:8000/api/registro_hospitales/" + id,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
      }
    );
    if (response.ok) {
      MostrarReHospitales();

      // -------
      // const [filtro, setFiltro] = useState("");
      //   useEffect(() => {
      //     if (Object.keys(ciudadactual).length > 0) {
      //       openModal();
      //     }
      //   }, [ciudadactual]);

      // ---------------
    }
  }
  useEffect(() => {
    MostrarReHospitales();
  }, []);

  useEffect(() => {
    if (Object.keys(registrohospitalactual).length != 0) {
      editarOpen();
    }
  }, [registrohospitalactual]);

  useEffect(() => {
    const suma = registrohospitales.reduce(
      (suma, hospital) => suma + hospital.cantidad_recibida,
      0
    );
    setSumaCantidadRecibida(suma);
  }, [registrohospitales]);
  useEffect(() => {
    const suma = registrohospitales.reduce(
      (suma, hospital) => suma + hospital.cantidad_entregada,
      0
    );
    setSumaCantidadEntregada(suma);
  }, [registrohospitales]);

  const mostrarpdf = async () => {
    const response = await fetch(`${baseUrl}RegistroH-pdf`, {
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

  return (
    <Container>
      <Sectionpa>
        <Divreport>
          <div>
            <img src="src\img\gestion.png" alt="" />
            <section>
              <h3>{registrohospitales.length}</h3>
              <p>n° registros</p>
              <p>Registro Hospitales</p>
            </section>
          </div>
          <div>
            <img src="src\img\gestion.png" alt="" />
            <section>
              <h3>{sumaCantidadRecibida}</h3>
              <p>Cantidad Total</p>
              <p>Cartillas recividas</p>
            </section>
          </div>
          <div>
            <img src="src\img\gestion.png" alt="" />
            <section>
              <h3>{sumaCantidadEntregada}</h3>
              <p>Cantidad Total</p>
              <p>Cartillas Entregadas</p>
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
        <Dippadretabla>
          <Divmayor>
            <label>buscar</label>{" "}
            <input
              type="text"
              placeholder="Buscar"
              // value={filtro}
              // onChange={(e) => setFiltro(e.target.value)}
            />
          </Divmayor>
          <section>
            <button>
              <CSVExporter apiUrl={apiUrl} csvHeaders={csvHeaders} />
            </button>

            <button onClick={mostrarpdf}>Pdf</button>
            <button onClick={openModal}>+</button>
            <h2>Registro Hospitales Seguimiento</h2>
          </section>
          <Sectiontabla>
            <Divtabla>
              <Tabla>
                <Thead>
                  <tr>
                    <Th>Nº</Th>
                    <Th>Hora</Th>
                    <Th>Fecha</Th>
                    <Th>RED SALUD</Th>
                    <Th>CENTRO SALUD</Th>
                    <Th>C. RECIBIDA</Th>
                    <Th>C. ENTREGADA</Th>
                    <Th>COD. TARJETA</Th>
                    <Th>ENTREADO Por</Th>
                    <Th>TELÉFONO</Th>
                    <Th>RECIBIDO Por</Th>
                    <Th>Acciones</Th>
                  </tr>
                </Thead>
                {registrohospitales
                  .filter((v) =>
                    v.entregado_por.toLowerCase().includes(filtro.toLowerCase())
                  )
                  .map((v, i) => (
                    <Tbody key={i}>
                      <tr>
                        <Trdatos>{v.id}</Trdatos>
                        <Trdatos>{v.hora}</Trdatos>
                        <Trdatos>{v.fecha}</Trdatos>
                        <Trdatos>{v.nombre_red}</Trdatos>
                        <Trdatos>{v.nombre_centro}</Trdatos>
                        <Trdatos>{v.cantidad_recibida}</Trdatos>
                        <Trdatos>{v.cantidad_entregada}</Trdatos>
                        <Trdatos>{v.cod_tarjeta}</Trdatos>
                        <Trdatos>{v.entregado_por}</Trdatos>
                        <Trdatos>{v.telefono}</Trdatos>
                        <Trdatos>{v.recibido_por}</Trdatos>
                        <Trdatos>
                          <Botonacciones>
                            <div>
                              <Iconsacciones
                                onClick={() => {
                                  setReHospitalactual(v);
                                }}
                              >
                                Editar
                              </Iconsacciones>
                            </div>
                            <div>
                              <Iconsacciones1
                                onClick={() => EliminarReHospitales(v.id)}
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
      </Sectionpa>
    </Container>
  );
};

export default Registro_hospitales;
export const Dippadretabla = styled.div`
  width: 90%;

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
      transition: all 0.5s ease;
      box-shadow: 0 5px 5px #00002271;
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
