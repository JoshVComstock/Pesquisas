import React from 'react'
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useModal } from "../hooks/useModal";
import CiudadesForm from '../models/CiudadesForm';
<<<<<<< HEAD
import New from "./../img/new.jpg"
import Pdf from "./../img/pdf.jpg"
import Excel from "./../img/doc.jpg"
import Searchicons from "./../img/search.jpg"
import Editar from "./../img/icons/Editar.jpg"
import Eliminar from "./../img/icons/Delete.jpg"
=======
import '../pages/css/Ciudades.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAdd} from '@fortawesome/free-solid-svg-icons';
import {faEdit} from '@fortawesome/free-solid-svg-icons';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
>>>>>>> e5ae54d56e97279ac7c7810e01b56d218e20767f

const Ciudades = (mostrarciudades) => {
  const { openModal, closeModal } = useModal("Agregar Ciudad",<CiudadesForm mostrarciudades={mostrarciudades}/>);
  const [ciudades, setCiudades] = useState([]);

  async function mostrarciudades() {
    const response = await fetch('http://127.0.0.1:8000/api/ciudades', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "accept": "application/json",
      },
    })
    const respuesta = await response?.json();
    setCiudades(respuesta);
    closeModal();
  }
  async function eliminarciudades(id) {
    const response = await fetch('http://127.0.0.1:8000/api/ciudades/' + id, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        "accept": "application/json",
      },
    })
    if (response.ok) {
      mostrarciudades();
    }
  }
  useEffect(() => {
    mostrarciudades();
  }, [])
  return (
    <Container>
       <Titulo>Todos los Usuarios</Titulo>
      <Divbotones>
        <Botonespdf2 onClick={openModal}><Img src={New} alt="" /> Nuevo</Botonespdf2>
        <Botonespdf1><Img src={Pdf} alt="" />PDF</Botonespdf1>
        <Botonespdf><Img src={Excel} alt="" />Excel</Botonespdf>{" "}
      </Divbotones>
      <Divsearchpadre>
        <Divsearch>
          <Search type="text" placeholder="Buscar" />
           <Botonsearch><Img src={Searchicons} alt="" /> </Botonsearch>
        </Divsearch>
      </Divsearchpadre>
      <Divtabla>
        <Tabla>
          <Thead>
            <tr>
              <Td>Nº</Td>
              <Td>CIUDAD</Td>
              <Td>ACCIONES</Td>
            </tr>
          </Thead>
          {
              ciudades.map((v, i) => (
                <tbody key={i} >
                  <Trdatos>
                    <td>{v.id}</td>
                    <td>{v.ciudad}</td>
                    <td>
                      <Botonacciones >
                        <div>
                          <Botonesacciones><Iconsacciones src={Editar} alt="" /></Botonesacciones>
                        </div>
                        <div>
                          <Botonesacciones onClick={()=>eliminarciudades(v.id)}> <Iconsacciones1 src={Eliminar} alt="" /></Botonesacciones>
                        </div>
                      </Botonacciones>
                    </td>
                  </Trdatos>
                </tbody>
              ))
            }
        </Tabla>
      </Divtabla>
    </Container>
  )
}

export default Ciudades

const Container=styled.div`
    width: calc(100%-200px);
    display: flex;
    flex-direction: column;
`;
const Titulo=styled.label`
    font-size: 20px;
    margin: 20px;
    display: block;
    cursor: default;
    margin-left:50px;
`;
const Divbotones=styled.div`
display: flex;
flex-direction: row;
`;
const Botonespdf=styled.button`
    border-radius:0px 5px 5px 0px;
    padding: 10px;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: rgba(0,0,0,.1);
    &:hover{
        color: #fff;
        background: #0066ff;
    }
`;
const Botonespdf1=styled.button`
    padding: 0px 15px 0px 15px;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: rgba(0,0,0,.1);
    &:hover{
        color: #fff;
        background: #0066ff;
    }
`;
const Botonespdf2=styled.button`
    border-radius:5px 0px 0px 5px;
    padding: 10px;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: rgba(0,0,0,.1);
    margin-left:50px;
    &:hover{
        color: #fff;
        background: #0066ff;
    }
`;
const Img=styled.img`
    width: 20px;
    height: 20px;
`;
const Divsearchpadre=styled.div`
    max-width: 100%;
    display: flex;
    justify-content: flex-end;
`;
const Divsearch=styled.div`
    width: 100%;
    max-width: 700px;
    display: flex;
    align-items: center;
    border-radius: 60px;
    padding: 10px 20px;
    height: 40px;
    margin: 10px;
`;
const Search=styled.input`
   background :transparent ;
   flex: 1;
   outline: none;
   border-bottom: 1px solid rgba(0,0,0,.2);
   font-size: 16px;
   color: #000;
   &:focus{
    border-bottom: 1px solid #0066ff;
   }
   
`;
const Botonsearch=styled.button`
  border  : 0;
  border-radius: 50%;
  width: 30px;
  height: 29px;
  cursor: pointer;
  &:hover{
    background: #0066ff;
  }
`;
const Botonacciones=styled.div`
  display: flex;
  margin: 5px;
`;
const Iconsacciones=styled.img`
  cursor: pointer;
  width: 25px;
  height: 25px;
  background:transparent;
  filter: invert(74%) sepia(20%) saturate(1367%) hue-rotate(148deg) brightness(94%) contrast(89%);
`;
const Iconsacciones1=styled.img`
  cursor: pointer;
  width: 25px;
  height: 25px;
  background:transparent;
  filter: invert(57%) sepia(96%) saturate(7239%) hue-rotate(342deg) brightness(102%) contrast(80%);
`;
const Botonesacciones=styled.button`
  background: transparent;
`;
const Divtabla=styled.div`
    max-width: 100%;
    display: flex;
    justify-content: center;
    
`;
const Tabla=styled.table`
    width: 95%;
    display: flex;
    flex-direction: column;
`;
const Thead=styled.thead`
`;
const Trtitulo=styled.tr`
max-width: 100%;
display: flex;
justify-content: space-around;
border-bottom: 1px solid rgba(0,0,0,.3);
border-top: 1px solid rgba(0,0,0,.3);
margin-bottom: 15px;

`;
const Td=styled.td`
    color: #0f51b3;
    padding: 5px;
    font-weight: bold;
`;
const Trdatos=styled.tr`
display: flex;
justify-content: space-around;
border-bottom: 1px solid rgba(0,0,0,.3);

`;
