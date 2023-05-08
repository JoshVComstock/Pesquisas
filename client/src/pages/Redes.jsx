import React from "react";
import { useState, useEffect } from "react";
import { useModal } from "../hooks/useModal";

import New from "./../img/new.jpg";
import Pdf from "./../img/pdf.jpg";
import Excel from "./../img/doc.jpg";
import Searchicons from "./../img/search.jpg";
import Editar from "./../img/icons/Editar.jpg";
import Eliminar from "./../img/icons/Delete.jpg";
const baseUrl = import.meta.env.VITE_BACKEND_URL;

import {
  Container,
  Titulo,
  Divbotones,
  
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
  Tabla,Divmayor,Sectiontabla
} from "../styles/crud";
import { UseFech } from "../hooks/useFech";
import { deleteRedes, getRedes } from "../services/Redes";
import RedesForm from "../models/RedesForm";

const Redes = () => {
  const [redactual, setRedactual] = useState({});
  const { data: redes, getApi } = UseFech(getRedes);
  const { openModal, closeModal } = useModal(
    Object.keys(redactual).length > 0 ? "Editar" : "Agregar",
    <RedesForm
      getApi={getApi}
      redactual={redactual}
      setRedactual={setRedactual}
      closeModal={() => {
        closeModal();
      }}
    />
  );
  const [filtro, setFiltro] = useState("");
  useEffect(() => {
    if (Object.keys(redactual).length > 0) {
      openModal();
    }
  }, [redactual]);
  const mostrarpdf = async () => {
    const response = await fetch(
      `${baseUrl}Redes-pdf`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    window.open(url, "_blank");
    return response;
  };
  return (
    <>
      <Divmayor><label >buscar</label> <input  type="text"
            placeholder="Buscar"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)} /></Divmayor>
              <section>
        <button onClick={openModal}>Ecxel</button>
        <button onClick={mostrarpdf}>Pdf</button>
        <button onClick={openModal}>+</button>
        <h2>Registros Redes</h2>
      </section>
    <Sectiontabla>
      <Divtabla>
        <Tabla>
          <Thead>
            <tr>
              <Th>Nº</Th>
              <Th>RED</Th>
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
                      
                          <Iconsacciones
                            src={Editar}
                            alt=""
                            onClick={() => {
                              setRedactual(v);
                            }}
                          >Editar</Iconsacciones>
                   
                      </div>
                      <div>

                          <Iconsacciones1  onClick={() => {
                            deleteRedes(v.id, getApi);
                          }}>Eliminar</Iconsacciones1>
                      
                      </div>
                    </Botonacciones>
                  </Trdatos>
                </tr>
              </Tbody>
            ))}
        </Tabla>
      </Divtabla>
      </Sectiontabla>
   
    </>
  );
};

export default Redes;
