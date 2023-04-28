import { useState, useEffect } from "react";
import { useModal } from "../hooks/useModal";
import Registro_provinciaForm from "../Models/Registro_provinciaForm";
import New from "./../img/new.jpg";
import Pdf from "./../img/pdf.jpg";
import Excel from "./../img/doc.jpg";
import Searchicons from "./../img/search.jpg";
import Editar from "./../img/icons/Editar.jpg";
import Eliminar from "./../img/icons/Delete.jpg";
import CSVExporter from "../pages/Reportescom";

import { UseFech } from "../hooks/useFech";
import {
  deleteRegistroprovincias,
  getRegistroprovincias,
} from "../services/Registroprovincias";

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
  Sectionpa,
} from "../styles/crud";
import {
  Iconsacciones1,
  Botonesacciones,
  Divtabla,
  Thead,
  Tbody,
  Th,
  Trdatos,
  Divreport,
  Divmayor,
  Tabla,
  Sectiontabla,
} from "../styles/crud";
import { Dippadretabla } from "./Registro_hospitales";
const baseUrl = import.meta.env.VITE_BACKEND_URL;

const Registro_provincia = () => {
  const [sumaCantidadRecibida, setSumaCantidadRecibida] = useState(0);
  const [sumaCantidadEntregada, setSumaCantidadEntregada] = useState(0);

  const apiUrl = `${baseUrl}registroprovincias`;
  const csvHeaders = ["id", "ciudad"];

  const [registroactuald, setRegistroactual] = useState(1);
  const { getApi, data: registroprovincias } = UseFech(getRegistroprovincias);
  const { openModal, closeModal } = useModal(
    Object.keys(registroactuald).length > 0
      ? "Editar Registros"
      : "Agregar Registros",
    <Registro_provinciaForm
      getApi={getApi}
      registroactuald={registroactuald}
      setRegistroactual={setRegistroactual}
      closeModal={() => {
        closeModal();
      }}
    />
  );

  const [filtro, setFiltro] = useState("");
  useEffect(() => {
    if (Object.keys(registroactuald).length > 0) {
      openModal();
    }
  }, [registroactuald]);

  useEffect(() => {
    const suma = registroprovincias.reduce(
      (suma, hospital) => suma + hospital.cantidad_recibida,
      0
    );
    setSumaCantidadRecibida(suma);
  }, [registroprovincias]);
  useEffect(() => {
    const suma = registroprovincias.reduce(
      (suma, hospital) => suma + hospital.cantidad_entregada,
      0
    );
    setSumaCantidadEntregada(suma);
  }, [registroprovincias]);

  const mostrarpdf = async () => {
    const response = await fetch(`${baseUrl}RegistroP-pdf`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    window.open(url, "_blank");
    return response;
  };

  return (
    <Container>
      <Sectionpa>
        <Divreport>
          <div>
            <img src="src\img\gestion.png" alt="" />
            <section>
              <h3>{registroprovincias.length}</h3>
              <p>n° registros</p>
              <p>Registro Hospitales</p>
            </section>
          </div>
          <div>
            <img src="src\img\gestion.png" alt="" />
            <section>
              <h3>{sumaCantidadRecibida}</h3>
              <p>Cantidad Total</p>
              <p>Cartillas recividas</p>
            </section>
          </div>
          <div>
            <img src="src\img\gestion.png" alt="" />
            <section>
              <h3>{sumaCantidadEntregada}</h3>
              <p>Cantidad Total</p>
              <p>Cartillas Entregadas</p>
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
        <Dippadretabla>
          <Divmayor>
            <label>buscar</label>{" "}
            <input
              type="text"
              placeholder="Buscar"
              value={filtro}
              onChange={(e) => setFiltro(e.target.value)}
            />
          </Divmayor>
          <section>
            <button>
              <CSVExporter apiUrl={apiUrl} csvHeaders={csvHeaders} />
            </button>

            <button onClick={mostrarpdf}>Pdf</button>
            <button onClick={openModal}>+</button>
            <h2>Registro Provincias  Seguimiento</h2>
          </section>
          <Sectiontabla>
            <Divtabla>
              <Tabla>
                <Thead>
                  <tr>
                    <Th>Nº</Th>
                    <Th>HORA</Th>
                    <Th>FECHA</Th>
                    <Th>CENTRO SALUD</Th>
                    <Th>C. RECIBIDA</Th>
                    <Th>C. ENTREGADA</Th>
                    <Th>COD. TARJETA</Th>
                    <Th>ENTREADO Por</Th>
                    <Th>TELÉFONO</Th>
                    <Th>RECIBIDO Por</Th>
                    <Th>Acciones</Th>
                  </tr>
                </Thead>
                {registroprovincias
                  .filter((v) =>
                    v.entregado_por.toLowerCase().includes(filtro.toLowerCase())
                  )
                  .map((v, i) => (
                    <Tbody key={i}>
                      <tr>
                        <Trdatos>{v.id}</Trdatos>
                        <Trdatos>{v.hora}</Trdatos>
                        <Trdatos>{v.fecha}</Trdatos>
                        <Trdatos>{v.nombre_centro}</Trdatos>
                        <Trdatos>{v.cantidad_recibida}</Trdatos>
                        <Trdatos>{v.cantidad_entregada}</Trdatos>
                        <Trdatos>{v.cod_tarjeta}</Trdatos>
                        <Trdatos>{v.entregado_por}</Trdatos>
                        <Trdatos>{v.telefono}</Trdatos>
                        <Trdatos>{v.recibido_por}</Trdatos>
                        <Trdatos>
                          <Botonacciones>
                            <div>
                              <Iconsacciones
                                onClick={() => {
                                  setRegistroactual(v);
                                }}
                              >
                                Editar
                              </Iconsacciones>
                            </div>
                            <div>
                              <Iconsacciones1
                                onClick={() => {
                                  deleteRegistroprovincias(v.id, getApi);
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
        </Dippadretabla>
      </Sectionpa>
    </Container>
  );
};

export default Registro_provincia;
