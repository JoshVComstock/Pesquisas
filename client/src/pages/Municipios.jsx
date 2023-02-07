import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useModal } from "../hooks/useModal";
import MunicipiosForm from "../models/MunicipiosForm";
import MunicipiosEdit from "../models/Editform/MunicipiosEdit";
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

const Municipios = () => {
  const [municipioactual, setMunicipioactual] = useState({});
  const { user } = useuserContext();
  const navegate = useNavigate();
  const { openModal: editarOpen, closeModal: editarClose } = useModal(
    "Editar Municipio",
    <MunicipiosEdit
      municipioactual={municipioactual}
      MostrarMunicipios={MostrarMunicipios}
    />
  );
  const { openModal, closeModal } = useModal(
    "Agregar Municipio",
    <MunicipiosForm MostrarMunicipios={MostrarMunicipios} />
  );

  const [municipios, setMunicipios] = useState([]);
  const [filtro, setFiltro] = useState("");

  async function MostrarMunicipios() {
    const response = await fetch("http://127.0.0.1:8000/api/municipios", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
    const respuesta = await response?.json();
    setMunicipios(respuesta);
    closeModal();
    editarClose();
  }
  async function EliminarMunicipios(id) {
    const response = await fetch("http://127.0.0.1:8000/api/municipios/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
    if (response.ok) {
      MostrarMunicipios();
    }
  }
  useEffect(() => {
    MostrarMunicipios();
  }, []);
  useEffect(() => {
    if (Object.keys(municipioactual).length != 0) {
      editarOpen();
    }
  }, [municipioactual]);
  useEffect(() => {}, []);
  return (
<Container>
      <Titulo>Municipios</Titulo>
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
              <th>MUNICIPIO</th>
              <th>CIUDAD</th>
              <Th>ACCIONES</Th>
            </tr>
          </Thead>
          {municipios
            .filter((v) =>
              v.municipio.toLowerCase().includes(filtro.toLowerCase())
            )
            .map((v, i) => (
              <Tbody key={i}>
                <tr>
                  <Trdatos>{i + 1}</Trdatos>
                  <Trdatos>{v.municipio}</Trdatos>
                  <Trdatos>{v.id_ciudades}</Trdatos>
                  <Trdatos>
                    <Botonacciones>
                      <div>
                        <Botonesacciones>
                          <Iconsacciones
                            src={Editar}
                            alt=""
                            onClick={() => {setMunicipioactual(v);}}
                          />
                        </Botonesacciones>
                      </div>
                      <div>
                        <Botonesacciones onClick={() => EliminarMunicipios(v.id)}>
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

export default Municipios;
