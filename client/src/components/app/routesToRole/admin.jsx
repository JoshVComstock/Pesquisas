import React, { useState } from "react";
import Centros from "../../../img/icons/Centros.jpg";
import City from "../../../img/icons/City.jpg";
import Laboratorioicons from "../../../img/icons/Laboratorio.jpg";
import Registropronviciasicons from "../../../img/icons/Registropronvicias.jpg";
import Registrohospitalesicons from "../../../img/icons/Registrohospitales.jpg";
import Pacienteicons from "../../../img/icons/Paciente.jpg";
import Usericons from "../../../img/user.jpg";
import Cartilla from "../../../assets/iconsnav/file-alt-regular.svg";
import { Linkes, Master } from "../../../styles/StylesCruds/CrudsStyle";
import Inicio from "../../../assets/iconsnav/home-solid.svg";
import Reportes from "../../../assets/iconsnav/paste-solid.svg";
import CiudadIcon from "../../../assets/iconsnav/city-solid.svg";
import CentrosIcon from "../../../assets/iconsnav/hospital-solid.svg";
import LaboratorioIcon from "../../../assets/iconsnav/vial-solid.svg";
import ProvinciasIcon from '../../../assets/iconsnav/road-solid.svg';
import HospitalesIcons from '../../../assets/iconsnav/hospital-alt-solid.svg';
import UsueriosIcons from "../../../assets/iconsnav/users-solid.svg";
import PacienteIcons from '../../../assets/iconsnav/hospital-user-solid.svg'
import PacineteUserIcons from "../../../assets/iconsnav/user-injured-solid.svg";
import ResultadosIcons from "../../../assets/iconsnav/window-restore-solid.svg"
const AdminComponent = () => {

  const [isExpandedpaciente, setIsExpandedpaciente] = useState(false);
  return (
    <Master>
      <Linkes to="/">
        <img src={Inicio} alt="" />
        Inicio
      </Linkes>
      <Linkes to="/pacientes">
        <img src={PacineteUserIcons} alt="" /> Pacientes
      </Linkes>
      <Linkes to="/cartilla">
        <img src={Cartilla} alt="" /> Cartilla
      </Linkes>
      <Linkes to="/resultados">
        <img src={ResultadosIcons} alt="" /> Resultados
      </Linkes>
      <Linkes to="/Reportes">
        <img src={Reportes} alt="" />
        Reportes
      </Linkes>
      <Linkes to="/ciudades">
        <img src={CiudadIcon} alt="" />
        Ciudad - Provincia
      </Linkes>
      <Linkes to="/centros">
        <img src={CentrosIcon} alt="" />Centros-Municipio
      </Linkes>
      <Linkes to="/laboratorios">
        <img src={LaboratorioIcon} alt="" /> Laboratorio-Red
      </Linkes>
      <Linkes to="/registro_provincias">
        <img src={ProvinciasIcon} alt="" /> Cartilla provincias
      </Linkes>
      <Linkes to="/Registro_hospitales">
        <img src={HospitalesIcons} alt="" /> Cartilla hospitales
      </Linkes>
      <Linkes to="/registro_usuario">
        <img src={UsueriosIcons} alt="" /> Registrar Usuario
      </Linkes>
    </Master>
  );
};
export default AdminComponent;
