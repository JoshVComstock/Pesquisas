import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useModal } from "../hooks/useModal";
import CiudadesForm from "../models/CiudadesForm";
import New from "./../img/new.jpg";
import Pdf from "./../img/pdf.jpg";
import Excel from "./../img/doc.jpg";
import Searchicons from "./../img/search.jpg";
import Editar from "./../img/icons/Editar.jpg";
import Eliminar from "./../img/icons/Delete.jpg";
import CiudadesEdit from "../models/Editform/CiudadesEdit";
import { useuserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
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

const Ciudades = () => {
  const [ciudadactual, setCiudadactual] = useState({});
  const { user } = useuserContext();
  const navegate = useNavigate();
  const { openModal: editarOpen, closeModal: editarClose } = useModal(
    "Editar ciudad",
    <CiudadesEdit
      ciudadactual={ciudadactual}
      mostrarciudades={mostrarciudades}
    />
  );
  const { openModal, closeModal } = useModal(
    "Agregar Ciudad",
    <CiudadesForm mostrarciudades={mostrarciudades} />
  );

  const [ciudades, setCiudades] = useState([]);
  const [filtro, setFiltro] = useState("");

  // funcion asincrona  que nos permiten llamar a la api
  async function mostrarciudades() {
    const response = await fetch('http://127.0.0.1:8000/api/ciudades', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    })
    const respuesta = await response?.json();
    setCiudades(respuesta);
    closeModal();
    editarClose();
  }
  // funcion para eliminar cirudades con asincronas 
  async function eliminarciudades(id) {
    const response = await fetch("http://127.0.0.1:8000/api/ciudades/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    })
    if (response.ok) {
      mostrarciudades();
    }
  }
  // llena los datos con los encontrados 
  useEffect(() => {
    mostrarciudades();
  }, []);
  useEffect(() => {
    if (Object.keys(ciudadactual).length != 0) {
      editarOpen();
    }
  }, [ciudadactual]);
  useEffect(() => {}, []);
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
        <table className="table">
          <Thead>
            <tr>
              <th>Nº</th>
              <th>CIUDAD</th>
              <Th>ACCIONES</Th>
            </tr>
          </Thead>
          {ciudades
            .filter((v) =>
              v.ciudad.toLowerCase().includes(filtro.toLowerCase())
            )
            .map((v, i) => (
              <Tbody key={i}>
                <tr>
                  <Trdatos>{i + 1}</Trdatos>
                  <Trdatos>{v.ciudad}</Trdatos>
                  <Trdatos>
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
                        <Botonesacciones onClick={() => eliminarciudades(v.id)}>
                          <Iconsacciones1 src={Eliminar} alt="" />
                        </Botonesacciones>
                      </div>
                    </Botonacciones>
                  </Trdatos>
                </tr>
              </Tbody>
            ))}
        </table>
      </Divtabla>
    </Container>
  );
};

export default Ciudades;
