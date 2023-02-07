import React from 'react'
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useModal } from "../hooks/useModal";
import Registro_hospitalesForm from "../Models/Registro_hospitalesForm";
import RegistroHospitalesEdit from "../Models/Editform/RegistroHospitalesEdit";
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

const Registro_hospitales = () => {
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
  useEffect(() => {}, []);
  return (
    <Container>
      <Titulo>Registro de Hospitales</Titulo>
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
              <th>HORA</th>
              <th>FECHA</th>
              <th>RED SALUD</th>
              <th>CENTRO SALUD</th>
              <th>C. RECIBIDA</th>
              <th>C. ENTREGADA</th>
              <th>COD. TARJETA</th>
              <th>ENTREADO Por</th>
              <th>TELÉFONO</th>
              <th>RECIBIDO Por</th>
              <Th>Acciones</Th>
            </tr>
          </Thead>
          {
              registrohospitales.map((v, i) => (
                <tbody key={i} >
                  <tr>
                    <th>{v.id}</th>
                    <th>{v.hora}</th>
                    <th>{v.fecha}</th>
                    <th>{v.id_redes}</th>
                    <th>{v.id_centros}</th>
                    <th>{v.cantidad_recibida}</th>
                    <th>{v.cantidad_entregada}</th>
                    <th>{v.cod_tarjeta}</th>
                    <th>{v.	entregado_por}</th>
                    <th>{v.	telefono}</th>
                    <th>{v.recibido_por}</th>
                    <th>
                      <Botonacciones >
                        <div>
                          <Botonesacciones><Iconsacciones src={Editar} alt="" onClick={() => {setReHospitalactual(v);}}/></Botonesacciones>
                        </div>
                        <div>
                          <Botonesacciones onClick={()=>EliminarReHospitales(v.id)}> <Iconsacciones1 src={Eliminar} alt="" /></Botonesacciones>
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

export default Registro_hospitales
