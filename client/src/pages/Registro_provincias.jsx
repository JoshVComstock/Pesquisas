import React from 'react'
import { useState, useEffect } from "react";
import { useModal } from "../hooks/useModal";
import Registro_provinciaForm from "../models/Registro_provinciaForm";
import New from "./../img/new.jpg";
import Pdf from "./../img/pdf.jpg";
import Excel from "./../img/doc.jpg";
import Searchicons from "./../img/search.jpg";
import Editar from "./../img/icons/Editar.jpg";
import Eliminar from "./../img/icons/Delete.jpg";

import { UseFech } from "../hooks/useFech";
import { deleteRegistroprovincias,getRegistroprovincias } from "../services/Registroprovincias";

import { useuserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
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
} from "../styles/crud";
import {
  Iconsacciones1,
  Botonesacciones,
  Divtabla,
  Thead,
  Tbody,
  Th,
  Trdatos,
} from "../styles/crud";

const Registro_provincia = () => {

    const [registroactual, setRegistroactual] = useState({});
    const { getApi, data: registroprovincias } = UseFech(getRegistroprovincias);
    const { openModal, closeModal } = useModal(
      Object.keys(registroactual).length > 0 ? "Editar Registros" : "Agregar Registros",
      <Registro_provinciaForm
        getApi={getApi}
        registroactual={registroactual}
        setRegistroactual={setRegistroactual}
        closeModal={() => {
          closeModal();
        }}
      />
    );
    
  const [filtro, setFiltro] = useState("");
  useEffect(() => {
    if (Object.keys(registroactual).length > 0) {
      openModal();
    }
  }, [registroactual]);


//   const [registroprovinciaactual, setReProvinciaactual] = useState({});
//   const { user } = useuserContext();
//   const navegate = useNavigate();
//   const { openModal: editarOpen, closeModal: editarClose } = useModal(
//     "Editar Registro Provincias",
//     <RegistroProvinciasEdit
//       registroprovinciaactual={registroprovinciaactual}
//       mostrarRegistroPro={mostrarRegistroPro}
//     />
//   );

//   const { openModal, closeModal } = useModal(
//     "Registro de provincias",
//     <Registro_provinciaForm mostrarRegistroPro={mostrarRegistroPro} />
//   );
//   const [registroprovincias, setRegistroprovincias] = useState([]);
//   const [filtro, setFiltro] = useState("");

//   async function mostrarRegistroPro  () {
//     const response = await fetch(
//       "http://127.0.0.1:8000/api/registro_provincias",
//       {
//         method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         accept: "application/json",
//       },
//       }
//     );
//     const respuesta = await response?.json();
//     setRegistroprovincias(respuesta);
//     closeModal();
//     editarClose();
//   }

//   async function eliminarregistro(id) {
//     const response = await fetch(
//       "http://127.0.0.1:8000/api/registro_provincias/" + id,
//       {
//         method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//         accept: "application/json",
//       },
//       }
//     );
//     if (response.ok) {
//       mostrarRegistroPro();
//     }
//   }
//   useEffect(() => {
//     mostrarRegistroPro();
//   }, []);
//   useEffect(() => {
//     if (Object.keys(registroprovinciaactual).length != 0) {
//       editarOpen();
//     }
//   }, [registroprovinciaactual]);
//   useEffect(() => {}, []);
  return (
    <Container>
      <Titulo>Registro de Provincias</Titulo>
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
        <table className='table'>
          <Thead>
            <tr>
              <th>Nº</th>
              <th>HORA</th>
              <th>FECHA</th>
              <th>PROVINCIA</th>
              <th>MUNICIPIO</th>
              <th>CENTRO SALUD</th>
              <th>C. RECIBIDA</th>
              <th>C. ENTREGADA</th>
              <th>COD. TARJETA</th>
              <th>ENTREADO Por</th>
              <th>TELÉFONO</th>
              <th>RECIBIDO Por</th>
              <Th>Acciones</Th>
            </tr>
          </Thead>
          {
              registroprovincias.map((v, i) => (
                <tbody key={i} >
                  <tr>
                    <th>{v.id}</th>
                    <th>{v.hora}</th>
                    <th>{v.fecha}</th>
                    <th>{v.id_provincias}</th>
                    <th>{v.id_municipios}</th>
                    <th>{v.id_centros}</th>
                    <th>{v.cantidad_recibida}</th>
                    <th>{v.cantidad_entregada}</th>
                    <th>{v.cod_tarjeta}</th>
                    <th>{v.	entregado_por}</th>
                    <th>{v.	telefono}</th>
                    <th>{v.recibido_por}</th>
                    <th>
                      <Botonacciones >
                        <div>
                          <Botonesacciones><Iconsacciones src={Editar} alt="" onClick={() => {setReProvinciaactual(v);}}/></Botonesacciones>
                        </div>
                        <div>
                          <Botonesacciones onClick={()=>eliminarregistro(v.id)}> <Iconsacciones1 src={Eliminar} alt="" /></Botonesacciones>
                        </div>
                      </Botonacciones>
                    </th>
                  </tr>
                </tbody>
              ))
            }
        </table>
      </Divtabla>
    </Container>
  )
}

export default Registro_provincia;

