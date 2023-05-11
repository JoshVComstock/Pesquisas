import React from "react";
import MunicipiosForm from "../models/MunicipiosForm";
import { useState, useEffect } from "react";
import { useModal } from "../hooks/useModal";
import New from "./../img/new.jpg";
import Pdf from "./../img/pdf.jpg";
import Excel from "./../img/doc.jpg";
import Searchicons from "./../img/search.jpg";
import Editar from "./../img/icons/Editar.jpg";
import Eliminar from "./../img/icons/Delete.jpg";
import {
  Container,Divmayor,
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
  Tabla,
  Sectiontabla,
} from "../styles/crud";
import { UseFech } from "../hooks/useFech";

import { deleteMunicipios, getMunicipios } from "../services/Municipios";
const baseUrl = import.meta.env.VITE_BACKEND_URL;

const Municipios = () => {
  const [municipioactual, setMunicipioactual] = useState({});
  const { getApi, data: mnicipios } = UseFech(getMunicipios);
  const { openModal, closeModal } = useModal(
    Object.keys(municipioactual).length > 0
      ? "Editar Municipio"
      : "Agregar Municipio",
    <MunicipiosForm
      getApi={getApi}
      municipioactual={municipioactual}
      setMunicipioactual={setMunicipioactual}
      closeModal={() => {
        closeModal();
      }}
    />
  );
  const [filtro, setFiltro] = useState("");
  useEffect(() => {
    if (Object.keys(municipioactual).length > 0) {
      openModal();
    }
  }, [municipioactual]);

  const mostrarpdf = async () => {
    const response = await fetch(
      `${baseUrl}Municipios-pdf`,
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
        <button >Excel</button>
        <button onClick={mostrarpdf}>Pdf</button>
        <button onClick={openModal}>+</button>
        <h2>Registros Municipio</h2>
      </section>
      <Sectiontabla>
        <Divtabla>
          <Tabla>
            <Thead>
              <tr>
                <Th>Nº</Th>
                <Th>MUNICIPIO</Th>
                <Th>Provincias</Th>
                <Th>ACCIONES</Th>
              </tr>
            </Thead>
            {mnicipios
              .filter((v) =>
                v.municipio.toLowerCase().includes(filtro.toLowerCase())
              )
              .map((v, i) => (
                <Tbody key={i}>
                  <tr>
                    <Trdatos>{i + 1}</Trdatos>
                    <Trdatos>{v.municipio}</Trdatos>
                    <Trdatos>{v.provincia}</Trdatos>
                    <Trdatos>
                      <Botonacciones>
                        <div>
                            <Iconsacciones
                              onClick={() => {
                                setMunicipioactual(v);
                              }}
                            >
                              Editar
                            </Iconsacciones>
                        </div>
                        <div>
                          <Iconsacciones1
                            onClick={() => {
                              deleteMunicipios(v.id, getApi);
                            }}
                          >
                            Eliminar
                          </Iconsacciones1>
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

export default Municipios;
