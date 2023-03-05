import React, {useEffect} from "react";
import styled from "styled-components";
import New from "./../img/new.jpg"
import Pdf from "./../img/pdf.jpg"
import Excel from "./../img/doc.jpg"
import Searchicons from "./../img/search.jpg"
import { useuserContext } from "../context/userContext";
import {useNavigate} from "react-router-dom";

const Register = () => {
  const navigate = useNavigate()
  const { user } = useuserContext();

  useEffect(()=>{
    //if(user.rol != "laboratorio"){
    //  navigate("/laboratorio")
   // }
  },[])

  return (
    <Container>
      <Titulo>Todos los Usuarios</Titulo>
      <Divbotones>
        <Botonespdf2><Img src={New} alt="" /> Nuevo</Botonespdf2>
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
          <thead>
            <Trtitulo>
              <Td>Nº</Td>
              <Td>NOMBRE</Td>
              <Td>CORREO</Td>
              <Td>CONTRASEÑA</Td>
              <Td>TELEFONO</Td>
              <Td>ROL</Td>
              <Td>CI</Td>
              <Td>ACCIONES </Td>
            </Trtitulo>
          </thead>
          <tbody>
            <Trdatos>
              <td>1</td>
              <td>JOSE DANIEL</td>
              <td>JOSE@GMAIL.COM</td>
              <td>123PEPITO</td>
              <td>68545420</td>
              <td>ADMIN</td>
              <td>9412007</td>
              <td><button>Editar</button><button>Eliminar</button> </td>
            </Trdatos>
          </tbody>
        </Tabla>
      </Divtabla>
    </Container>
  );
};

export default Register;

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
const Botonespdf2=styled.button`
    border-radius:5px 0px 0px 5px;
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