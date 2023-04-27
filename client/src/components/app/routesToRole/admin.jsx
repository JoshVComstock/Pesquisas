import React, { useState } from "react";
import { Linkes, Img, Imga } from "../../../styles/roles";
import Centros from "../../../img/icons/Centros.jpg";
import Logos from "../../../img/logoo.jpg";
import City from "../../../img/icons/City.jpg";
import Redess from "../../../img/icons/Redes.jpg";
import Laboratorioicons from "../../../img/icons/Laboratorio.jpg";
import Provinciasicons from "../../../img/icons/Provincias.jpg";
import Registropronviciasicons from "../../../img/icons/Registropronvicias.jpg";
import Enfermedadesicons from "../../../img/icons/Enfermedades.jpg";
import Registrohospitalesicons from "../../../img/icons/Registrohospitales.jpg";
import Municiosicons from "../../../img/icons/Municipio.jpg";
import Primeramuestraicons from "../../../img/icons/Primeramuestra.jpg";
import Rellamadosicons from "../../../img/icons/Rellamados.jpg";
import Madresicons from "../../../img/icons/Madre.jpg";
import Pacienteicons from "../../../img/icons/Paciente.jpg";
import Usericons from "../../../img/user.jpg";
import Cartilla from "../../../img/icons/Primeramuestra.jpg";

import styled from "styled-components";

const AdminComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpandedcartilla, setIsExpandedcartilla] = useState(false);
  const [isExpandedreportes, setIsExpandedreportes] = useState(false);
  const [isExpandedpaciente, setIsExpandedpaciente] = useState(false);

  return (
    <Master>
      <p>Inicio</p>
      <Linkes to="/home">
        <Img src="src\img\home.png" alt="" />
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
            <Linkes to="/redes">
              <Img src={Redess} alt="" /> Redes
            </Linkes>

          

            <Linkes to="/centros">
              <Img src={Centros} alt="" /> Centros-Municipios
            </Linkes>
<<<<<<< HEAD
            <Linkes to="/provincias">
              <Img src={Provinciasicons} alt="" /> Provincias
            </Linkes>
            <Linkes to="/laboratorios">
              {" "}
              <Img src={Laboratorioicons} alt="" /> Laboratorios
            </Linkes>
=======
      <Linkes to="/laboratorios">
        <Img src={Laboratorioicons} alt="" /> Laboratorios
      </Linkes>
>>>>>>> 0326b6feeee85d28df0942a7550f2866c25a122c
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
            <Linkes to="/Registro_hospitales">
              <Img src={Registrohospitalesicons} alt="" /> /Registro Hospitales
            </Linkes>
            <Linkes to="/registro_provincias">
              <Img src={Registropronviciasicons} alt="" /> Registro provincias
            </Linkes>
          </Options>
        )}
      </Diva>
      <p>Reportes</p>
      <Diva onClick={() => setIsExpandedreportes(!isExpandedreportes)}>
        <Divd>
          <Img src="src\img\analitica.png" alt="" />
          Reportes
          <Imga src="src\img\abajo.png" alt="" />
        </Divd>
        {isExpandedreportes && <Options></Options>}
      </Diva>
      <p>Paciente</p>
      <Diva onClick={() => setIsExpandedpaciente(!isExpandedpaciente)}>
        <Divd>
          <Img src="src\img\paciente.png" alt="" />
          Paciente
          <Imga src="src\img\abajo.png" alt="" />
        </Divd>
        {isExpandedpaciente && (
          <Options>
            <Linkes to="/pacientes">
              <Img src={Pacienteicons} alt="" /> /Pacientes
            </Linkes>
            <Linkes to="/cartilla">
              <Img src={Cartilla} alt="" /> Cartilla
            </Linkes>
            <Linkes to="/resultados">
              <Img src="" alt="" /> /Resultados
            </Linkes>
          </Options>
        )}
      </Diva>
      <p>usuarios</p>
      <Linkes to="/registro_usuario">
        <Img src={Usericons} alt="" /> Registrar Usuario
      </Linkes>
      {/* <Linkes to="/primera_muestra">
        <Img src={Primeramuestraicons} alt="" /> /Primera Muestra
      </Linkes> */}
      {/*  <Linkes to="/Registro_hospitales">
    <Img src={Registrohospitalesicons} alt="" /> /Registro Hospitales
  </Linkes> */}
      {/*  <Linkes to="/Rellamados">
    <Img src={Rellamadosicons} alt="" /> /Rellamados
  </Linkes> */}
      {/* <Linkes to="/rellamados">
    <Img src={Rellamadosicons} alt="" /> Rellamados
<<<<<<< HEAD
  </Linkes>*/}
      <Linkes to="/resultados">
        <Img src={Cartilla} alt="" />
        Resultados
      </Linkes>
=======
  </Linkes>
 
</>*/}
>>>>>>> 0326b6feeee85d28df0942a7550f2866c25a122c
    </Master>
  );
};

export default AdminComponent;

export const Master = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.2em;
  & p {
    padding: 1em 0 0 2.5em;
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
  background: #fff;
  cursor: pointer;
  text-decoration: none;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 1em 0;
`;
export const Divd = styled.div`
  background: #fff;
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
