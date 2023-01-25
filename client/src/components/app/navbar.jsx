import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import Centros from "../../img/icons/Centros.jpg";
import Logos from "../../img/icons/logo.jpg";
import City from "../../img/icons/City.jpg";
import Redess from "../../img/icons/Redes.jpg";
import Laboratorioicons from "../../img/icons/Laboratorio.jpg";
import Provinciasicons from "../../img/icons/Provincias.jpg";
import Registropronviciasicons from "../../img/icons/Registropronvicias.jpg";
import Enfermedadesicons from "../../img/icons/Enfermedades.jpg";
import Registrohospitalesicons from "../../img/icons/Registrohospitales.jpg"
import Municiosicons from "../../img/icons/Municipio.jpg"
import Primeramuestraicons from "../../img/icons/Primeramuestra.jpg"
import Rellamadosicons from "../../img/icons/Rellamados.jpg";
import Madresicons from "../../img/icons/Madre.jpg";
import Pacienteicons from "../../img/icons/Paciente.jpg";
import Usericons from "../../img/user.jpg";
const Navbar = () => {
  return (
    <Divheader>
      <Header>
        <Logo>
          <Imge src={Logos} alt="" />
        </Logo>
        <Linkes to="/">
          <Img src="src\img\Home.png" alt="" /> Home
        </Linkes>
        <Linkes to="/centros"><Img src={Centros} alt="" /> Centros</Linkes>
        <Linkes to="/ciudades">
          <Img src={City} alt="" />
          Ciudades
        </Linkes>
        <Linkes to="/redes"><Img src={Redess} alt="" /> Redes</Linkes>
        <Linkes to="/laboratorios"> <Img src={Laboratorioicons} alt="" /> Laboratorios</Linkes>
        <Linkes to="/provincias"><Img src={Provinciasicons} alt="" /> Provincias</Linkes>
        <Linkes to="/registro_provincias"><Img src={Registropronviciasicons} alt="" /> Registro provincias</Linkes>
        <Linkes to="/"><Img src={Enfermedadesicons} alt="" /> Enfermedades</Linkes>
        <Linkes to="/registro_usuario"><Img src={Usericons} alt="" /> Registrar Usuario</Linkes>
        <Linkes to="/"><Img src={Municiosicons} alt="" /> Municipios</Linkes>
        <Linkes to="/"><Img src={Pacienteicons} alt="" /> Pacientes</Linkes>
        <Linkes to="/"><Img src={Primeramuestraicons} alt="" /> Primera Muestra</Linkes>
        <Linkes to="/"><Img src={Registrohospitalesicons} alt="" /> Registro Hospitales</Linkes>
        <Linkes to="/"><Img src={Rellamadosicons} alt="" /> Rellamados</Linkes>
        <Linkes to="/"><img src="" alt="" /> Resultados</Linkes>
      </Header>
      <Navuser>
        <Topnav>
          <Logout>Logout</Logout>
          <User>
            <Topnavimg src="src\img\avatar.png" alt="" />
            <Nameuser>Name use</Nameuser>
          </User>
        </Topnav>
        <Outlet />
      </Navuser>
    </Divheader>
  );
};
export default Navbar;

const Divheader = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  overflow-x: hidden;
`;
const Header = styled.header`
  max-width: 200px;
  height: 100vh;
  background: #034078;
  display: flex;
  flex-direction: column;
`;
const Img = styled.img`
  width: 25px;
  height: 25px;
  margin: 0 10px;
  filter: invert(99%) sepia(6%) saturate(2%) hue-rotate(92deg) brightness(112%) contrast(100%);
`;
const Linkes = styled(Link)`
  margin: 2px 15px;
  padding: 10px 10px 10px 30px;
  cursor: pointer;
  text-decoration: none;
  color: #aeaeae;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  &:hover {
    background: #0066ff;
    color: #fff;
  }
  &:hover + Img {
    filter: invert(100%) sepia(98%) saturate(0%) hue-rotate(352deg)
      brightness(103%) contrast(103%);
  }
`;
const Imge = styled.img`
`;
const Logo=styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin:5px 0px ;
`;
const Navuser = styled.div`
  min-width: calc(100% - 200px);
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Topnav = styled.div`
  max-width: 100%;
  background: #fff;
  display: flex;
  justify-content: flex-end;
  border-bottom: 0.5px solid rgba(0,0,0,.1);
`;
const Topnavimg = styled.img`
  width: 33px;
  height: 33px;
  margin: 3px;
`;
const Logout = styled.button`
  background: none;
  margin:0 15px;
  cursor: pointer;
  &:hover {
    color: #0066ff;
    text-decoration: underline;
  }
`;
const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 35px;
`;
const Nameuser=styled.label`
   cursor: pointer;
   margin: 2px;
   &:hover{
    color:#0066ff;
   }
`;
