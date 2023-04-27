import React from "react";
import { useState, useEffect } from "react";
import { useModal } from "../hooks/useModal";
import ProvinciasForm from "../models/ProvinciasForm";
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
  Sectiontabla,
} from "../styles/crud";

const Provincias = () => {
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
  
  return (
    <>
    <section>
        <button onClick={openModal}>+</button>
        <h2>Registros Provincia</h2>
      </section>

  <Sectiontabla>
      <Divtabla>
        <Tabla >
          <Thead>
            <tr>
              <th>Nº</th>
              <th>PROVINCIA</th>
              <th>CIUDAD</th>
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
  
