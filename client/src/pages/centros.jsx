import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useModal } from "../hooks/useModal";
import CentroForm from "../Models/CentroForm";
import New from "./../img/new.jpg";
import Pdf from "./../img/pdf.jpg";
import Excel from "./../img/doc.jpg";
import Searchicons from "./../img/search.jpg";
import Editar from "./../img/icons/Editar.jpg";
import Eliminar from "./../img/icons/Delete.jpg";
import CentrosEdit from "../Models/Editform/CiudadesEdit";
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

const Centros = () => {
  const [centroactual, setCentroactual] = useState({});
  const { user } = useuserContext();
  const navegate = useNavigate();
  
  const { openModal: editarOpen, closeModal: editarClose } = useModal(
    "Editar Centro de Salud",
    <CentrosEdit
      centroactual={centroactual}
      MostrarCentros={MostrarCentros}
    />
  );
  const { openModal, closeModal } = useModal(
    "Agregar Centro",
    <CentroForm MostrarCentros={MostrarCentros} />
  );

  const [centros, setCentros] = useState([]);
  const [filtro, setFiltro] = useState("");

  async function MostrarCentros() {
    const response = await fetch("http://127.0.0.1:8000/api/centros", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
    const respuesta = await response?.json();
    setCentros(respuesta);
    closeModal();
    editarClose();
  }
  async function EliminarCentros(id) {
    const response = await fetch("http://127.0.0.1:8000/api/centros/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
    if (response.ok) {
      MostrarCentros();
    }
  }
  useEffect(() => {
    MostrarCentros();
  }, []);
  useEffect(() => {
    if (Object.keys(centroactual).length != 0) {
      editarOpen();
    }
  }, [centroactual]);
  useEffect(() => {}, []);

  return (
    <Container>
      <Titulo>Centros</Titulo>
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
          <Search type="text" placeholder="Buscar" />
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
              <th>RED</th>
              <th>TELEFONO</th>
              <th>CIUDAD</th>
              <th>AREA</th>
              <th>SEGUIMIENTO</th>
              <th>CONTACTO</th>
              <Th>ACCIONES</Th>
            </tr>
          </Thead>
          {centros
            .filter((v) =>
              v.nombre.toLowerCase().includes(filtro.toLowerCase())
            )
            .map((v, i) => (
              <Tbody key={i}>
                <tr>
                  <Trdatos>{i + 1}</Trdatos>
                  <Trdatos>{v.nombre}</Trdatos>
                  <Trdatos>{v.direccion}</Trdatos>
                  <Trdatos>{v.id_redes}</Trdatos>
                  <Trdatos>{v.telefono}</Trdatos>
                  <Trdatos>{v.id_ciudades}</Trdatos>
                  <Trdatos>{v.area}</Trdatos>
                  <Trdatos>{v.seguimiento_casos}</Trdatos>
                  <Trdatos>{v.contacto}</Trdatos>
                  <Trdatos>
                    <Botonacciones>
                      <div>
                        <Botonesacciones>
                          <Iconsacciones
                            src={Editar}
                            alt=""
                            onClick={() => {
                              setCentroactual(v);
                            }}
                          />
                        </Botonesacciones>
                      </div>
                      <div>
                        <Botonesacciones onClick={() => EliminarCentros(v.id)}>
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

export default Centros;
