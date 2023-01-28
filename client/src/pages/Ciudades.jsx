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

const Ciudades = (mostrarciudades) => {
  const [ciudadactual, setCiudadactual] = useState({});
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

  async function mostrarciudades() {
    const response = await fetch("http://127.0.0.1:8000/api/ciudades", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
    const respuesta = await response?.json();
    setCiudades(respuesta);
    closeModal();
    editarClose();
  }
  async function eliminarciudades(id) {
    const response = await fetch("http://127.0.0.1:8000/api/ciudades/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
    if (response.ok) {
      mostrarciudades();
    }
  }
  useEffect(() => {
    mostrarciudades();
  }, []);
  useEffect(() => {
    if (Object.keys(ciudadactual).length != 0) {
      editarOpen();
    }
  }, [ciudadactual]);
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
                  <Trdatos>{i+1}</Trdatos>
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

const Container = styled.div`
  width: calc(100%-200px);
  display: flex;
  flex-direction: column;
`;
const Titulo = styled.label`
  font-size: 25px;
  margin: 20px;
  display: block;
  cursor: default;
  margin-left: 50px;
`;
const Divbotones = styled.div`
  display: flex;
  flex-direction: row;
`;
const Botonespdf = styled.button`
  border-radius: 0px 5px 5px 0px;
  padding: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: rgba(0, 0, 0, 0.1);
  &:hover {
    color: #fff;
    background: #0066ff;
  }
  &:hover Img {
    filter: invert(100%) sepia(31%) saturate(2%) hue-rotate(198deg)
      brightness(107%) contrast(101%);
  }
`;
const Botonespdf1 = styled.button`
  padding: 0px 15px 0px 15px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  &:hover Img {
    filter: invert(100%) sepia(31%) saturate(2%) hue-rotate(198deg)
      brightness(107%) contrast(101%);
  }
  background: rgba(0, 0, 0, 0.1);
  &:hover {
    color: #fff;
    background: #0066ff;
  }
`;
const Botonespdf2 = styled.button`
  border-radius: 5px 0px 0px 5px;
  padding: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: rgba(0, 0, 0, 0.1);
  margin-left: 50px;
  &:hover {
    color: #fff;
    background: #0066ff;
  }
  &:hover Img {
    filter: invert(100%) sepia(31%) saturate(2%) hue-rotate(198deg)
      brightness(107%) contrast(101%);
  }
`;
const Img = styled.img`
  width: 20px;
  height: 20px;
`;
const Divsearchpadre = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: flex-end;
`;
const Divsearch = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  align-items: center;
  border-radius: 60px;
  padding: 10px 20px;
  height: 40px;
  margin: 10px;
`;
const Search = styled.input`
  background: transparent;
  flex: 1;
  outline: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 16px;
  color: #000;
  &:focus {
    border-bottom: 1px solid #0066ff;
  }
`;
const Botonsearch = styled.button`
  border: 0;
  border-radius: 50%;
  width: 30px;
  height: 29px;
  cursor: pointer;
  &:hover {
    background: #0066ff;
  }
  &:hover Img {
    filter: invert(100%) sepia(31%) saturate(2%) hue-rotate(198deg)
      brightness(107%) contrast(101%);
  }
`;
const Botonacciones = styled.div`
  display: flex;
  margin: 5px;
`;
const Iconsacciones = styled.img`
  cursor: pointer;
  width: 25px;
  height: 25px;
  background: transparent;
  filter: invert(74%) sepia(20%) saturate(1367%) hue-rotate(148deg)
    brightness(94%) contrast(89%);
`;
const Iconsacciones1 = styled.img`
  cursor: pointer;
  width: 25px;
  height: 25px;
  background: transparent;
  filter: invert(57%) sepia(96%) saturate(7239%) hue-rotate(342deg)
    brightness(102%) contrast(80%);
`;
const Botonesacciones = styled.button`
  background: transparent;
`;
const Divtabla = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 10px 50px;
`;
const Thead = styled.thead`
  background: #22577a;
  margin-bottom: 15px;
  color: white;
  height: 40px;
`;
const Tbody = styled.tbody`
  color: #000;
`;
const Th = styled.th`
  width: 10%;
`;
const Trdatos = styled.td`
  background: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;
