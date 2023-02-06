import React from 'react'
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useModal } from "../hooks/useModal";
import RedesForm from '../models/RedesForm';
import RedesEdit from '../models/Editform/RedesEdit';
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

const Redes = () => {
  const [redactual, setRedactual] = useState({});
  const { user } = useuserContext();
  const navegate = useNavigate();
  const { openModal: editarOpen, closeModal: editarClose } = useModal(
    "Editar Red de Salud",
    <RedesEdit
      redactual={redactual}
      MostrarRedes={MostrarRedes}
    />
  );
  const { openModal, closeModal } = useModal(
    "Agregar Redes de Salud",
    <RedesForm MostrarRedes={MostrarRedes} />
  );

  const [redes, setRedes] = useState([]);
  const [filtro, setFiltro] = useState("");

  async function MostrarRedes() {
    const response = await fetch("http://127.0.0.1:8000/api/redes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
    const respuesta = await response?.json();
    setRedes(respuesta);
    closeModal();
    editarClose();
  }
  async function EliminarRedes(id) {
    const response = await fetch("http://127.0.0.1:8000/api/redes/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
    if (response.ok) {
      MostrarRedes();
    }
  }
  useEffect(() => {
    MostrarRedes();
  }, []);
  useEffect(() => {
    if (Object.keys(redactual).length != 0) {
      editarOpen();
    }
  }, [redactual]);
  useEffect(() => {}, []);

  return (
    <Container>
    <Titulo>Redes de Salud</Titulo>
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
            <th>RED</th>
            <Th>ACCIONES</Th>
          </tr>
        </Thead>
        {redes
          .filter((v) =>
            v.nombre.toLowerCase().includes(filtro.toLowerCase())
          )
          .map((v, i) => (
            <Tbody key={i}>
              <tr>
                <Trdatos>{i + 1}</Trdatos>
                <Trdatos>{v.nombre}</Trdatos>
                <Trdatos>
                  <Botonacciones>
                    <div>
                      <Botonesacciones>
                        <Iconsacciones
                          src={Editar}
                          alt=""
                          onClick={(
                            
                          ) => {
                            setRedactual(v);
                          }}
                        />
                      </Botonesacciones>
                    </div>
                    <div>
                      <Botonesacciones onClick={() => EliminarRedes(v.id)}>
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

export default Redes
