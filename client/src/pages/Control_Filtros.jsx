import React from 'react'
import { useState, useEffect } from 'react';
import { useModal } from "../hooks/useModal";
import ControlFiltrosForm from "../Models/ControlFiltrosForm";

import New from "./../img/new.jpg"
import Pdf from "./../img/pdf.jpg"
import Excel from "./../img/doc.jpg"
import Searchicons from "./../img/search.jpg"
import Editar from "./../img/icons/Editar.jpg"
import Eliminar from "./../img/icons/Delete.jpg"
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

const Control_Filtros = () => {
  const [controlfiltroactual, setControlfiltroactual] = useState({});
  const { user } = useuserContext();
  const navegate = useNavigate();
  const { openModal: editarOpen, closeModal: editarClose } = useModal(
    "Editar Control de Filtros",
    <ControlFiltrosEdit
      controlfiltroactual={controlfiltroactual}
      MostrarControlFiltros={MostrarControlFiltros}
    />
  );

  const { openModal, closeModal } = useModal(
    "Registro de Control de Filtros",
    <ControlFiltrosForm MostrarControlFiltros={MostrarControlFiltros} />
  );
  const [controlfiltros, setControlfiltros] = useState([]);
  const [filtro, setFiltro] = useState("");

  async function MostrarControlFiltros() {
    const response = await fetch(
      "http://127.0.0.1:8000/api/control_filtros",
      {
        method: "GET",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      }
    );
    const respuesta = await response?.json();
    setControlfiltros(respuesta);
    closeModal();
    editarClose();
  }

  async function EliminarConFiltros(id) {
    const response = await fetch(
      "http://127.0.0.1:8000/api/control_filtros/" + id,
      {
        method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      }
    );
    if (response.ok) {
        MostrarControlFiltros();
    }
  }
  useEffect(() => {
    MostrarControlFiltros();
  }, []);
  useEffect(() => {
    if (Object.keys(controlfiltroactual).length != 0) {
      editarOpen();
    }
  }, [controlfiltroactual]);
  useEffect(() => {}, []);
  return (
    <Container>
      <Titulo>Control de Filtros</Titulo>
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
        <table className='table'>
          <Thead>
            <tr>
              <th>Nº</th>
              <th>FECHA</th>
              <th>N. CORRELATIVO</th>
              <th>COD. INICIAL</th>
              <th>COD. FINAL</th>
              <th>CANTIDAD</th>
              <th>CENTRO</th>
              <th>ENTREADO Por</th>
              <th>RECIBIDO Por</th>
              <Th>Acciones</Th>
            </tr>
          </Thead>
          {
              controlfiltros.map((v, i) => (
                <tbody key={i} >
                  <tr>
                    <th>{v.id}</th>
                    <th>{v.fecha}</th>
                    <th>{v.numero_correlativo}</th>
                    <th>{v.cod_tarjeta_inicial}</th>
                    <th>{v.cod_tarjeta_final}</th>
                    <th>{v.cantidad}</th>
                    <th>{v.id_centros}</th>
                    <th>{v.entregado_por}</th>
                    <th>{v.recibido_por}</th>
                    <th>
                      <Botonacciones >
                        <div>
                          <Botonesacciones><Iconsacciones src={Editar} alt="" onClick={() => {setControlfiltroactual(v);}}/></Botonesacciones>
                        </div>
                        <div>
                          <Botonesacciones onClick={()=>EliminarConFiltros(v.id)}> <Iconsacciones1 src={Eliminar} alt="" /></Botonesacciones>
                        </div>
                      </Botonacciones>
                    </th>
                  </tr>
                </tbody>
              ))
            }
        </table>
      </Divtabla>
    </Container>
  )
}

export default Control_Filtros
