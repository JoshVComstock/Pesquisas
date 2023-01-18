import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";


const Divheader=styled.div`
display:flex;
overflow-x:scroll;
overflow-y:hidden;
overflow-x:hidden;    
`;
const Header=styled.header`
 
  min-width: 300px;
  height: 100vh;
  background: #f8f8f8f8;
  display: flex;
  flex-direction: column;
  box-shadow: 10px 10px 10px  rgba(0,0,0,.1),
              -10px -10px 10px  rgba(255,255,255,1),
              inset 10px 10px 10px  rgba(0,0,0,.1),
              inset -10px -10px 10px  rgba(255,255,255,1)
              ;
  

`;
const Linkes=styled(Link)`
 margin: 10px;
 padding: 20px 20px 20px 15px;
  background: #22577a;
  cursor: pointer;
  transition: .2s;
  border-radius: 7px;
  text-decoration: none;
  color:#fff;
  &:hover{
    color:#fff;
  } 
`;
const Img=styled.img`
width: 80px;
height: 80px;
margin-left: 35%;
`;
const Navbar = () => {
  return (
    <Divheader>
      <Header>
        <Img src="src\img\odontologia.png" alt="" />
        <Linkes to='/' >Inicio</Linkes>
        <Linkes to='/consultas' >Consultas</Linkes>
        <Linkes to='/citas' >Citas</Linkes>    
        <Linkes to='/pacientes' >Pacientes</Linkes>
        <Linkes to='/profesional' >Profesional</Linkes>
        <Linkes to='/tratamiento' >Tratamientos</Linkes>
        <Linkes to='/insumos' >Insumos</Linkes>
      </Header>
      <Divbarra>
        <Divlogout>
          
          <Alogout href="#">Logout</Alogout>
          <Imglogout src="src/img/cerrarsesion.svg" alt="" />
        </Divlogout>
       <div>
         <Outlet/>
       </div>
      </Divbarra>
      
    </Divheader>
  )
};
export default Navbar;
const Divbarra=styled.div`
position: relative;
 display: flex;
 flex-direction: column;
  width: 100%;
  height: 50px;
  background: #f8f8f8;
  box-shadow: 10px 10px 10px  rgba(0,0,0,.1),
              -10px -10px 10px  rgba(255,255,255,1),
              inset 10px 10px 10px  rgba(0,0,0,.1),
              inset -10px -10px 10px  rgba(255,255,255,1)
              ;
              
     
`;
const Divlogout=styled.div`
 display: flex;
 justify-content: flex-end;
 position: relative;
 align-items: center;
`;
const Imglogout=styled.img`
 width: 50px;
 height: 50px;
 margin-left: 10px;
`;
const Alogout=styled.a`
text-decoration: none;
`;
