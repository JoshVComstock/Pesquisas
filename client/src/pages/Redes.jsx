import React from "react";
import { useState, useEffect } from "react";
import { useModal } from "../hooks/useModal";
import RedesForm from "../models/RedesForm";
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
  Tabla,
} from "../styles/crud";
import { UseFech } from "../hooks/useFech";
import { deleteRedes, getRedes } from "../services/Redes";
import RedesForm from "../models/RedesForm"
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
        <Tabla>
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
                            onClick={() => {
                              setRedactual(v);
                            }}
                          />
                        </Botonesacciones>
                      </div>
                      <div>
                        <Botonesacciones
                          onClick={() => {
                            deleteRedes(v.id, getApi);
                          }}
                        >
                          <Iconsacciones1 src={Eliminar} alt="" />
                        </Botonesacciones>
                      </div>
                    </Botonacciones>
                  </Trdatos>
                </tr>
              </Tbody>
            ))}
        </Tabla>
      </Divtabla>
    </Container>
  );
};

export default Redes;
