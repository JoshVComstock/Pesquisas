import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Divheader>
      <Header>
        <Img src="" alt="" />
<<<<<<< HEAD
        <Linkes to='/'>login</Linkes>
        <Linkes to='/centros' >centros</Linkes>
        <Linkes to='/ciudades' >ciudades</Linkes>    
        <Linkes to='/redes' >redes</Linkes>
        <Linkes to='/laboratorios' >laboratorios</Linkes>
        <Linkes to='/provincias' >provincias</Linkes>
        <Linkes to='/registro_provincias' >registro_provincias</Linkes>
=======
        <Linkes to='/'>HOME</Linkes>
        <Linkes to='/enfermedades' >ENFERMEDADES</Linkes>
        <Linkes to='/redes' >REDES DE SALUD</Linkes>
        <Linkes to='/centros' >CENTROS DE SALUD</Linkes>
        <Linkes to='/ciudades' >CIUDADES</Linkes>
        <Linkes to='/laboratorios' >LABORATORIOS</Linkes>
        <Linkes to='/provincias' >PROVINCIAS</Linkes>
        <Linkes to='/registro_provincias' >REGISTRO DE PROVINCIAS</Linkes>
        <Linkes to='/municipios' >MUNICIPIOS</Linkes>
        <Linkes to='/registro_municipios' >REGISTRO DE MUNICIPIOS</Linkes>
>>>>>>> f8a0fa5b2d2cef230c76c979acd47c9fb26d7d5a
      </Header>
      <div></div>
       <div>
         <Outlet/>
       </div>
      
    </Divheader>
  )
};
export default Navbar;

const Divheader=styled.div`
display:flex;
overflow-x:scroll;
overflow-y:hidden;
overflow-x:hidden;    
`;
const Header=styled.header`
 
  min-width: 250px;
  height: 100vh;
  background: rgba(0,0,0,0.5);
  display: flex;
  flex-direction: column;
`;
const Linkes=styled(Link)`
 margin: 2px;
 padding: 10px 10px 10px 10px;
 font-size: 15px;
 font-weight: bold;
  cursor: pointer;
  transition: .2s;
  text-decoration: none;
  color:#fff;
  &:hover{
   background: rgba(0,0,0,.3);
  } 
`;
const Img=styled.img`
  width: 70px;
  height: 70px;
`;
