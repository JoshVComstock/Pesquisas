import React from "react";
import { useState, useEffect } from "react";
import { useModal } from "../hooks/useModal";
import CentroForm from "../models/CentroForm";
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
  Dippadretabla
} from "../styles/crud";
import { UseFech } from "../hooks/useFech";
import { deleteCentros, getCentros } from "../services/centros";

const Centros = () => {
  const [centroactual, setCentroactual] = useState({});
  const { getApi, data: centros } = UseFech(getCentros);
  const { openModal, closeModal } = useModal(
    Object.keys(centroactual).lengTh > 0 ? "Editar Centro de Salud" : "Agregar Centro de Salud",
    <CentroForm
      getApi={getApi}
      centroactual={centroactual}
      setCentroactual={setCentroactual}
      closeModal={() => {
        closeModal();
      }}
    />
  );
  const [filtro, setFiltro] = useState("");
  useEffect(() => {
    if (Object.keys(centroactual).lengTh > 0) {
      openModal();
    }
  }, [centroactual]);

  return (
    <Container>
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
      <Titulo>Centros de Salud</Titulo>
    <Dippadretabla>
      <Divtabla>
          <Thead>
            <tr>
              <Th>Nº</Th>
              <Th>Nombre</Th>
              <Th>Drirección</Th>
              <Th>Red</Th>
              <Th>Telefono</Th>
              <Th>Ciaudad</Th>
              <Th>Area</Th>
              <Th>Seguimientos</Th>
              <Th>Contacto</Th>
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
                  <Trdatos>{v.red}</Trdatos>
                  <Trdatos>{v.telefono}</Trdatos>
                  <Trdatos>{v.ciudad}</Trdatos>
                  <Trdatos>{v.area}</Trdatos>
                  <Trdatos>{v.seguimiento_casos}</Trdatos>
                  <Trdatos>{v.contacto}</Trdatos>
                  <Trdatos>
                    <Botonacciones>
                      <div>
                        <Botonesacciones>
                          <Iconsacciones 
                            onClick={() => {
                              setCentroactual(v);
                            }}
                          >Editar</Iconsacciones>
                        </Botonesacciones>
                      </div>
                      <div>
                        <Botonesacciones
                          onClick={() => {
                            deleteCentros(v.id, getApi);
                          }}
                        >
                          <Iconsacciones1>
                            Eliminar
                          </Iconsacciones1>
                        </Botonesacciones>
                      </div>
                    </Botonacciones>
                  </Trdatos>
                </tr>
              </Tbody>
            ))}
      </Divtabla>
      </Dippadretabla>
    </Container>
  );
};

export default Centros;
