import React from 'react'
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useModal } from "../hooks/useModal";
import RedesForm from '../models/RedesForm';


// clip
import New from "./../img/new.jpg";
import Pdf from "./../img/pdf.jpg";
import Excel from "./../img/doc.jpg";
import Searchicons from "./../img/search.jpg";
import Editar from "./../img/icons/Editar.jpg";
import Eliminar from "./../img/icons/Delete.jpg";
import CiudadesEdit from "../models/Editform/CiudadesEdit";
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

const Redes = () => {
  const { openModal, closeModal } = useModal("Redes de Salud",<RedesForm/>);
  
  const [redes, setRedes] = useState([]);

  async function MostrarRedes() {
    const response = await fetch('http://127.0.0.1:8000/api/redes', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "accept": "application/json",
      },
    })
    const respuesta = await response?.json();
    setRedes(respuesta);
  }
  async function EliminarRedes(id) {
    const response = await fetch('http://127.0.0.1:8000/api/redes/' + id, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        "accept": "application/json",
      },
    })
    if (response.ok) {
        MostrarRedes();
    }
  }
  useEffect(() => {
    MostrarRedes();
  }, [])
  return (
  //   <div>
  //     <div className='Titulo'>
  //         <div>Listado de Redes de Salud</div>
  //       </div>
  //       <br />
  //       <div>
  //         <button type="submit" onClick={openModal}>Registrar Nueva Red de Salud</button>
  //       </div>
  //     <table>
  //     <thead>
  //       <tr>
  //         <th>ID</th>
  //         <th>Nombre</th>

  //         <th>Acciones</th>
  //       </tr>
  //     </thead>
  //     <tbody>
  //       {
  //         redes.map((v, i) => (
  //           <body key={i} >
  //             <tr  >
  //               <th>{v.id}</th>
  //               <th>{v.nombre}</th>
  //               <th>
  //                 <div className='Acciones'>
  //                   <div className='Editar'>
  //                     <button className='BotonEditar'>Editar</button>
  //                   </div>
  //                   <div className='Eliminar'>
  //                     <button className='BotonEliminar' onClick={() => EliminarRedes(v.id)}>Eliminar</button>
  //                   </div>
  //                 </div>
  //               </th>
  //             </tr>
  //           </body>
  //         ))
  //       }
  //     </tbody>
  //     </table>
  //   </div>
  // )
<Container>
      <Titulo>REDES</Titulo>
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
            // type="text"
            // placeholder="Buscar"
            // value={filtro}
            // onChange={''}
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
              <th>RED</th>
            </tr>
          </Thead>
          {/* {ciudades
            .filter((v) =>
              v.ciudad.toLowerCase().includes(filtro.toLowerCase())
            ) */}
            {/* .map((v, i) => (
              <Tbody key={i}>
                <tr>
                  <Trdatos>{i + 1}</Trdatos>
                  <Trdatos>{v.ciudad}</Trdatos>
                  <Trdatos>
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
                        <Botonesacciones onClick={() => eliminarciudades(v.id)}>
                          <Iconsacciones1 src={Eliminar} alt="" />
                        </Botonesacciones>
                      </div>
                    </Botonacciones>
                  </Trdatos>
                </tr>
              </Tbody> */}
            {/* ))} */}
        </table>
      </Divtabla>
    </Container>
  );

}

export default Redes
