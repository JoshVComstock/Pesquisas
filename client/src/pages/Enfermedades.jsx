import React from 'react'
import { useState, useEffect } from "react";
import { useModal } from "../hooks/useModal";
import EnfermedadesForm from "../models/EnfermedadesForm";
import New from "./../img/new.jpg";
import Pdf from "./../img/pdf.jpg";
import Excel from "./../img/doc.jpg";
import Searchicons from "./../img/search.jpg";
import Editar from "./../img/icons/Editar.jpg";
import Eliminar from "./../img/icons/Delete.jpg";
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
  Iconsacciones1,
  Botonesacciones,
  Divtabla,
  Thead,
  Tbody,
  Th,
  Trdatos,
} from "../styles/crud";
import { UseFech } from "../hooks/useFech";
import { deleteEnfermedades, getEnfermedades } from "../services/Enfermedades";

const Enfermedades = () => {
  const [enfermedadactual, setEnfermedadactual] = useState({});
  const { getApi, data: enfermedades } = UseFech(getEnfermedades);
  const { openModal, closeModal } = useModal(
    Object.keys(enfermedadactual).length > 0 ? "Editar Enfermedad" : "Agregar Enfermedad",
    <EnfermedadesForm
      getApi={getApi}
      enfermedadactual={enfermedadactual}
      setEnfermedadactual={setEnfermedadactual}
      closeModal={() => {
        closeModal();
      }}
    />
  );
  const [filtro, setFiltro] = useState("");
  useEffect(() => {
    if (Object.keys(enfermedadactual).length > 0) {
      openModal();
    }
  }, [enfermedadactual]);


  return (
    <Container>
      <Titulo>Enfermedades</Titulo>
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
              <th>DESCRIPCIÓN</th>
              <th>EXTRA</th>
              <Th>ACCIONES</Th>
            </tr>
          </Thead>
          {enfermedades
            .filter((v) =>
              v.nombre.toLowerCase().includes(filtro.toLowerCase())
            )
            .map((v, i) => (
              <Tbody key={i}>
                <tr>
                  <Trdatos>{i + 1}</Trdatos>
                  <Trdatos>{v.nombre}</Trdatos>
                  <Trdatos>{v.descripcion}</Trdatos>
                  <Trdatos>{v.extra}</Trdatos>
                  <Trdatos>
                    <Botonacciones>
                      <div>
                        <Botonesacciones>
                          <Iconsacciones
                            src={Editar}
                            alt=""
                            onClick={(
                              
                            ) => {
                              setEnfermedadactual(v);
                            }}
                          />
                        </Botonesacciones>
                      </div>
                      <div>
                        <Botonesacciones onClick={() => {
                            deleteEnfermedades(v.id, getApi);
                          }}>
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

export default Enfermedades