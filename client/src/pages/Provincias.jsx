import React from 'react'
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useModal } from "../hooks/useModal";
import ProvinciasForm from '../models/ProvinciasForm';
import ProvinciasEdit from '../models/Editform/ProviciasEdit';
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

const Provincias = () => {
  const [provinciaactual, setProviciaactual] = useState({});
  const { user } = useuserContext();
  const navegate = useNavigate();
  const { openModal: editarOpen, closeModal: editarClose } = useModal(
    "Editar Provincia",
    <ProvinciasEdit
      provinciaactual={provinciaactual}
      MostrarProvincias={MostrarProvincias}
    />
  );
  const { openModal, closeModal } = useModal(
    "Agregar Provicia",
    <ProvinciasForm MostrarProvincias={MostrarProvincias} />
  );

  const [provincias, setProvincias] = useState([]);
  const [filtro, setFiltro] = useState("");

  async function MostrarProvincias() {
    const response = await fetch("http://127.0.0.1:8000/api/provincias", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
    const respuesta = await response?.json();
    setProvincias(respuesta);
    closeModal();
    editarClose();
  }
  async function EliminarProvincias(id) {
    const response = await fetch("http://127.0.0.1:8000/api/provincias/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
    if (response.ok) {
      MostrarProvincias();
    }
  }
  useEffect(() => {
    MostrarProvincias();
  }, []);
  useEffect(() => {
    if (Object.keys(provinciaactual).length != 0) {
      editarOpen();
    }
  }, [provinciaactual]);
  useEffect(() => {}, []);
  
  return (
    <Container>
      <Titulo>Provincias</Titulo>
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
              <th>PROVINCIA</th>
              <th>CIUDAD</th>
              <Th>ACCIONES</Th>
            </tr>
          </Thead>
          {provincias
            .filter((v) =>
              v.provincia.toLowerCase().includes(filtro.toLowerCase())
            )
            .map((v, i) => (
              <Tbody key={i}>
                <tr>
                  <Trdatos>{i + 1}</Trdatos>
                  <Trdatos>{v.provincia}</Trdatos>
                  <Trdatos>{v.id_ciudades}</Trdatos>
                  <Trdatos>
                    <Botonacciones>
                      <div>
                        <Botonesacciones>
                          <Iconsacciones
                            src={Editar}
                            alt=""
                            onClick={() => {setProviciaactual(v);}}
                          />
                        </Botonesacciones>
                      </div>
                      <div>
                        <Botonesacciones onClick={() => EliminarProvincias(v.id)}>
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
}

export default Provincias