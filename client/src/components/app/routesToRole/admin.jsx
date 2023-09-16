import React, { useState } from "react";
import Centros from "../../../img/icons/Centros.jpg";
import City from "../../../img/icons/City.jpg";
import Laboratorioicons from "../../../img/icons/Laboratorio.jpg";
import Registropronviciasicons from "../../../img/icons/Registropronvicias.jpg";
import Registrohospitalesicons from "../../../img/icons/Registrohospitales.jpg";
import Pacienteicons from "../../../img/icons/Paciente.jpg";
import Usericons from "../../../img/user.jpg";
import Cartilla from "../../../img/icons/Primeramuestra.jpg";

import styled from "styled-components";
const AdminComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpandedcartilla, setIsExpandedcartilla] = useState(false);
  const [isExpandedpaciente, setIsExpandedpaciente] = useState(false);
  return (
    <Master>
      <p>Inicio</p>
      <Linkes to="/">
        <img src="src\img\home.png" alt="" />
        Analytics dashboard
      </Linkes>
      <p>Resgistros Entidades</p>
      <Diva onClick={() => setIsExpanded(!isExpanded)}>
        <Divd>
          <Img src="src\img\registro.png" alt="" />
          Registros
          <Imga src="src\img\abajo.png" alt="" />
        </Divd>
        {isExpanded && (
          <Options>
            <Linkes to="/ciudades">
              <Img src={City} alt="" />
              Ciudades - Provincia
            </Linkes>

            <Linkes to="/centros">
              <Img src={Centros} alt="" /> Centros-Municipios
            </Linkes>
            <Linkes to="/laboratorios">
              <Img src={Laboratorioicons} alt="" /> Laboratorios -Redes
            </Linkes>
          </Options>
        )}
      </Diva>
      <p>Gestion cartilla</p>
      <Diva onClick={() => setIsExpandedcartilla(!isExpandedcartilla)}>
        <Divd>
          <Img src="src\img\gestion.png" alt="" />
          Gestion
          <Imga src="src\img\abajo.png" alt="" />
        </Divd>
        {isExpandedcartilla && (
          <Options>
            <Linkes to="/registro_provincias">
              <Img src={Registropronviciasicons} alt="" /> Registro provincias
            </Linkes>
            <Linkes to="/Registro_hospitales">
              <Img src={Registrohospitalesicons} alt="" /> Registro Hospitales
            </Linkes>
          </Options>
        )}
      </Diva>
      <p>Reportes</p>
      <Linkes to="/Reportes">
        <img src="src\img\analitica.png" alt="" />
        Reportes
      </Linkes>
      <p>Paciente</p>
      <section onClick={() => setIsExpandedpaciente(!isExpandedpaciente)}>
        <div>
          <img src="src\img\paciente.png" alt="" />
          Paciente
          <img src="src\img\abajo.png" alt="" />
        </div>
        {isExpandedpaciente && (
          <aside>
            <Linkes to="/pacientes">
              <img src={Pacienteicons} alt="" /> pacientes
            </Linkes>
            <Linkes to="/cartilla">
              <img src={Cartilla} alt="" /> Cartilla
            </Linkes>
            <Linkes to="/resultados">
              <img src="" alt="" /> Resultados
            </Linkes>
          </aside>
        )}
      </section>
      <p>usuarios</p>
      <Linkes to="/registro_usuario">
        <img src={Usericons} alt="" /> Registrar Usuario
      </Linkes>
    </Master>
  );
};
export default AdminComponent;
export const Master = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.2em;
  & p {
    padding: 1.5em 0 0 2.5em;
    font-size: 0.7em;
    color: #08103fce;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    &:first-child {
      padding: 3em 0em 1em 2.5em;
    }
  }
  height: 88vh;
  overflow-y: scroll;
`;
export const Options = styled.div`
  position: relative;
  top: 0;
  left: 0;
  background-color: #c1c1c11f;
  padding: 10px;
  margin-top: 10px;
  border: solid 1px #0002;
`;

export const Diva = styled.div`
  background: rgb(245, 245, 243);
  cursor: pointer;
  text-decoration: none;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 1em 0;
`;
export const Divd = styled.div`
  background: rgb(245, 245, 243);
  cursor: pointer;
  text-decoration: none;
  color: #000000;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90%;
  font-size: 0.95em;
  margin-left: 10%;
`;
