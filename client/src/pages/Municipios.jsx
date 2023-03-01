import React from "react";
import { useState, useEffect } from "react";
import { useModal } from "../hooks/useModal";
import MunicipiosForm from "../models/MunicipiosForm";
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
import { deleteMunicipios, getMunicipios } from "../services/Municipios";

const Municipios = () => {
  const [municipioactual, setMunicipioactual] = useState({});
  const { getApi, data: municipios } = UseFech(getMunicipios);
  const { openModal, closeModal } = useModal(
    Object.keys(municipioactual).length > 0 ? "Editar m" : "Agregar m",
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
  return (
<Container>
      <Titulo>Municipios</Titulo>
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
              <th>MUNICIPIO</th>
              <th>CIUDAD</th>
              <Th>ACCIONES</Th>
            </tr>
          </Thead>
          {municipios
            .filter((v) =>
              v.municipio.toLowerCase().includes(filtro.toLowerCase())
            )
            .map((v, i) => (
              <Tbody key={i}>
                <tr>
                  <Trdatos>{i + 1}</Trdatos>
                  <Trdatos>{v.municipio}</Trdatos>
                  <Trdatos>{v.id_ciudades}</Trdatos>
                  <Trdatos>
                    <Botonacciones>
                      <div>
                        <Botonesacciones>
                          <Iconsacciones
                            src={Editar}
                            alt=""
                            onClick={() => {setMunicipioactual(v);}}
                          />
                        </Botonesacciones>
                      </div>
                      <div>
                        <Botonesacciones onClick={() => {
                            deleteMunicipios(v.id, getApi);
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
  );
};

export default Municipios;
