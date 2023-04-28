import React from "react";
import { useState, useEffect } from "react";
import { useModal } from "../hooks/useModal";
import ProvinciasForm from "../models/ProvinciasForm";
const baseUrl = import.meta.env.VITE_BACKEND_URL;
import New from "./../img/new.jpg";
import Pdf from "./../img/pdf.jpg";
import Excel from "./../img/doc.jpg";
import Searchicons from "./../img/search.jpg";
import Editar from "./../img/icons/Editar.jpg";
import Eliminar from "./../img/icons/Delete.jpg";
import { UseFech } from "../hooks/useFech";
import { deleteProvincias, getProvincias } from "../services/provincias";
import {
  Container,
  Botonacciones,
  Iconsacciones,
  Iconsacciones1,
  Divtabla,
  Thead,
  Tbody,
  Th,
  Trdatos,
  Tabla,
  Sectiontabla,Divmayor
} from "../styles/crud";
import CSVExporter from "../pages/Reportescom";

const Provincias = () => {

// para ecxel
const apiUrl = `${baseUrl}provincias`;
    const csvHeaders = ["id", "provincia","id_ciudades"];

  const [provinciaactual, setProviciaactual] = useState({});
  const { getApi, data: provicias } = UseFech(getProvincias);
  const { openModal, closeModal } = useModal(
    Object.keys(provinciaactual).length > 0 ? "Editar" : "Agregar",
    <ProvinciasForm
      getApi={getApi}
      provinciaactual={provinciaactual}
      setProviciaactual={setProviciaactual}
      closeModal={() => {
        closeModal();
      }}
    />
  );
  const [filtro, setFiltro] = useState("");
  useEffect(() => {
    if (Object.keys(provinciaactual).length != 0) {
      openModal();
    }
  }, [provinciaactual]);
  
  const mostrarpdf = async () => {
    const response = await fetch(
      `${baseUrl}Provincias-pdf`,
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
    <button >
    <CSVExporter apiUrl={apiUrl} csvHeaders={csvHeaders} />
    </button>

      <button onClick={mostrarpdf}>Pdf</button>

        <button onClick={openModal}>+</button>
        <h2>Registros Provincia</h2>
      </section>
  <Sectiontabla>
      <Divtabla>
        <Tabla >
          <Thead>
            <tr>
              <Th>Nº</Th>
              <Th>PROVINCIA</Th>
              <Th>CIUDAD</Th>
              <Th>ACCIONES</Th>
            </tr>
          </Thead>
          {provicias
            .filter((v) =>
              v.provincia.toLowerCase().includes(filtro.toLowerCase())
            )
            .map((v, i) => (
              <Tbody key={i}>
                <tr>
                  <Trdatos>{i + 1}</Trdatos>
                  <Trdatos>{v.provincia}</Trdatos>
                  <Trdatos>{v.ciudad}</Trdatos>
                  <Trdatos>
                    <Botonacciones>
                      <div>
                     
                          <Iconsacciones
                           onClick={() => {
                            setProviciaactual(v);
                          }}
                          >Editar</Iconsacciones>
                      
                      </div>
                      <div>
                          <Iconsacciones1  onClick={() => deleteProvincias(v.id, getApi)}>
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

export default Provincias;
  
