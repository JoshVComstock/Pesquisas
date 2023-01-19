import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Divheader>
      <Header>
        <Img src="" alt="" />
        <Linkes to='/'>home</Linkes>
        <Linkes to='/centros' >centros</Linkes>
        <Linkes to='/ciudades' >ciudades</Linkes>    
        <Linkes to='/redes' >redes</Linkes>
        <Linkes to='/laboratorios' >laboratorios</Linkes>
        <Linkes to='/provincias' >provincias</Linkes>
        <Linkes to='/registro_provincias' >registro_provincias</Linkes>
      </Header>
      
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
 margin: 5px;
 padding: 20px 20px 20px 15px;
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
