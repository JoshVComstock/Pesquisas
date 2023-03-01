import React from 'react'
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useModal } from "../hooks/useModal";
import LaboratoriosForm from '../models/LaboratoriosForm';
import LaboratoriosEdit from '../models/Editform/LaboratoriosEdit';
import New from "./../img/new.jpg";
import Pdf from "./../img/pdf.jpg";
import Excel from "./../img/doc.jpg";
import Searchicons from "./../img/search.jpg";
import Editar from "./../img/icons/Editar.jpg";
import Eliminar from "./../img/icons/Delete.jpg";
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


const Laboratorios = () => {
  const [laboratorioactual, setLaboratorioactual] = useState({});
  const { user } = useuserContext();
  const navegate = useNavigate();
  const { openModal: editarOpen, closeModal: editarClose } = useModal(
    "Editar Laboraorio",
    <LaboratoriosEdit
      laboratorioactual={laboratorioactual}
      MostrarLaboratorios={MostrarLaboratorios}
    />
  );
  const { openModal, closeModal } = useModal(
    "Agregar Laboratorio",
    <LaboratoriosForm MostrarLaboratorios={MostrarLaboratorios} />
  );

  const [laboratorios, setLaboratorios] = useState([]);
  const [filtro, setFiltro] = useState("");

  async function MostrarLaboratorios() {
    const response = await fetch("http://127.0.0.1:8000/api/laboratorios", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
    const respuesta = await response?.json();
    setLaboratorios(respuesta);
    closeModal();
    editarClose();
  }
  async function EliminarLaboratorios(id) {
    const response = await fetch("http://127.0.0.1:8000/api/laboratorios/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
    if (response.ok) {
      MostrarLaboratorios();
    }
  }
  useEffect(() => {
    MostrarLaboratorios();
  }, []);
  useEffect(() => {
    if (Object.keys(laboratorioactual).length != 0) {
      editarOpen();
    }
  }, [laboratorioactual]);
  useEffect(() => {}, []);
  
  return (
    <Container>
      <Titulo>Laboratorios</Titulo>
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
              <th>NOMBRE</th>
              <th>DIRECCIÓN</th>
              <th>TELÉFONO</th>
              <th>CENTRO</th>
              <th>CIUDAD</th>
              <th>RED SALUD</th>
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
                  <Trdatos>{v.id_centros}</Trdatos>
                  <Trdatos>{v.id_ciudades}</Trdatos>
                  <Trdatos>{v.id_redes}</Trdatos>
                  <Trdatos>
                    <Botonacciones>
                      <div>
                        <Botonesacciones>
                          <Iconsacciones
                            src={Editar}
                            alt=""
                            onClick={() => {setLaboratorioactual(v);}}
                          />
                        </Botonesacciones>
                      </div>
                      <div>
                        <Botonesacciones onClick={() => EliminarLaboratorios(v.id)}>
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
  )
}

export default Laboratorios

