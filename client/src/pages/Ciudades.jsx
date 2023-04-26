import React from "react";
import { useState, useEffect } from "react";
import { useModal } from "../hooks/useModal";
import CiudadesForm from "../Models/CiudadesForm";
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
<<<<<<< HEAD
  Tabla,
=======
  Dippadretabla,
  Sectiontabla,
  Tabla,
  Sectionpa,
  Divreport,
  Divbotonesa
} from "../styles/crud";
import { UseFech } from "../hooks/useFech";
import { deleteCiudades, getCiudades } from "../services/Ciudades";
import { getciudadpdf } from "../reports/ciudadpdf";
const Ciudades = () => {

// solo para el select
const [isExpanded, setIsExpanded] = useState(false);
//------

  const [ciudadactual, setCiudadactual] = useState({});
  const { getApi, data: ciudades } = UseFech(getCiudades);
  const { data } = UseFech(getciudadpdf);
  const { openModal, closeModal } = useModal(
    Object.keys(ciudadactual).length > 0 ? "Editar Ciudad" : "Agregar ciudad",
    <CiudadesForm
      getApi={getApi}
      ciudadactual={ciudadactual}
      setCiudadactual={setCiudadactual}
      closeModal={() => {
        closeModal();
      }}
    />
  );
  const [filtro, setFiltro] = useState("");
  useEffect(() => {
    if (Object.keys(ciudadactual).length > 0) {
      openModal();
    }
  }, [ciudadactual]);
  const mostrarpdf = async () => {
    const response = await fetch(
      `${baseUrl}Ciudades-pdf`,
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
    <Container>
      <Sectionpa>
        {/* <Titulo>Ciudades</Titulo> */}
        <Divreport>
          <div>
          <img src="src\img\gestion.png" alt="" />
            <section>
              <h3>126</h3>
              <p>gestion</p>
            </section>
         
          </div>
          <div>
          <img src="src\img\gestion.png" alt="" />
            <section>
              <h3>126</h3>
              <p>gestion</p>
            </section>
         
          </div>
          <div>
          <img src="src\img\gestion.png" alt="" />
            <section>
              <h3>126</h3>
              <p>gestion</p>
            </section>
         
          </div>
          <div>
          <img src="src\img\gestion.png" alt="" />
            <section>
              <h3>126</h3>
              <p>gestion</p>
            </section>
         
          </div>
      
        </Divreport>
        {/* <Divbotones>
        <Botonespdf2 onClick={openModal}>
          <Img src={New} alt="" /> Nuevo
        </Botonespdf2>
        <Botonespdf1 onClick={mostrarpdf}>
          <Img src={Pdf} alt="" />
          PDF
        </Botonespdf1>
        <Botonespdf>
          <Img src={Excel} alt="" />
          Excel
        </Botonespdf>{" "}
<<<<<<< HEAD
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
            <Th>Nº</Th>
            <Th>CIUDAD</Th>
            <Th>ACCIONES</Th>
          </Thead>
          {ciudades
            .filter((v) =>
              v.ciudad.toLowerCase().includes(filtro.toLowerCase())
            )
            .map((v, i) => (
              <Tbody key={i}>
                <tr>
                  <Trdatos data-label="Nº">{i + 1}</Trdatos>
                  <Trdatos data-label="CIUDAD">{v.ciudad}</Trdatos>
                  <Trdatos data-label="ACCIONES">
                    <Botonacciones>
                      <div>
                        <Botonesacciones>
                          <Iconsacciones
                            src={Editar}
                            alt=""
                            onClick={() => {
                              setCiudadactual(v);
                            }}
                          />
                        </Botonesacciones>
                      </div>
                      <div>
                        <Botonesacciones
                          onClick={() => {
                            deleteCiudades(v.id, getApi);
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
=======
      </Divbotones> */}
        {/* <Divsearchpadre>
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
        </Divsearchpadre> */}
<Divbotonesa>
<div  onClick={() => setIsExpanded(!isExpanded)}>
 <section>
 Escoge
  <img src="src\img\abajo.png" alt="" />
  </section>
{isExpanded && (
<option onClick={openModal}> 
Nuevo
</option>
)}


</div>
</Divbotonesa>
        <Dippadretabla>
        <h2>Registros Ciudades</h2>
          <Sectiontabla>
            <Divtabla>
           
              <Tabla>
                <Thead>
                  <tr>
                    <Th>Nº</Th>
                    <Th>CIUDAD</Th>
                    <Th>ACCIONES</Th>
                  </tr>
                </Thead>
                {ciudades
                  .filter((v) =>
                    v.ciudad.toLowerCase().includes(filtro.toLowerCase())
                  )
                  .map((v, i) => (
                    <Tbody key={i}>
                      <tr>
                        <Trdatos data-label="Nº">{i + 1}</Trdatos>
                        <Trdatos data-label="CIUDAD">{v.ciudad}</Trdatos>
                        <Trdatos data-label="ACCIONES">
                          <Botonacciones>
                            <div>
                              <Botonesacciones>
                                <Iconsacciones
                                  onClick={() => {
                                    setCiudadactual(v);
                                  }}
                                >
                                  Editar
                                </Iconsacciones>
                              </Botonesacciones>
                            </div>
                            <div>
                              <Botonesacciones
                                onClick={() => {
                                  deleteCiudades(v.id, getApi);
                                }}
                              >
                                <Iconsacciones1>Eliinar</Iconsacciones1>
                              </Botonesacciones>
                            </div>
                          </Botonacciones>
                        </Trdatos>
                      </tr>
                    </Tbody>
                  ))}
              </Tabla>
            </Divtabla>
          </Sectiontabla>
        </Dippadretabla>
      </Sectionpa>
>>>>>>> 19514aa8d7739593b0b66a378791c2c255ed0071
    </Container>
  );
};
export default Ciudades;
