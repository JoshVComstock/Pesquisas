
import React from 'react'
import { Linkes, Img } from '../../../styles/roles';
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


const AdminComponent = () => {
  return (
    <>
    <Linkes to="/home">
    <Img src="src\img\Home.png" alt="" /> Home
  </Linkes>
  <Linkes to="/centros">
    <Img src={Centros} alt="" /> Centros
  </Linkes>
  <Linkes to="/ciudades">
    <Img src={City} alt="" />
    Ciudades
  </Linkes>
  <Linkes to="/redes">
    <Img src={Redess} alt="" /> Redes
  </Linkes>
  <Linkes to="/laboratorios">
    {" "}
    <Img src={Laboratorioicons} alt="" /> Laboratorios
  </Linkes>
  <Linkes to="/provincias">
    <Img src={Provinciasicons} alt="" /> Provincias
  </Linkes>
  <Linkes to="/registro_provincias">
    <Img src={Registropronviciasicons} alt="" /> Registro provincias
  </Linkes>
  <Linkes to="/enfermedades">
    <Img src={Enfermedadesicons} alt="" /> Enfermedades
  </Linkes>
  <Linkes to="/registro_usuario">
    <Img src={Usericons} alt="" /> Registrar Usuario
  </Linkes>
  <Linkes to="/Municipios">
    <Img src={Municiosicons} alt="" /> Municipios
  </Linkes>
  <Linkes to="/pacientes">
    <Img src={Pacienteicons} alt="" /> Pacientes
  </Linkes>
  <Linkes to="/primera_muestra">
    <Img src={Primeramuestraicons} alt="" /> Primera Muestra
  </Linkes>
  <Linkes to="/Registro_hospitales">
    <Img src={Registrohospitalesicons} alt="" /> Registro Hospitales
  </Linkes>
  <Linkes to="/Rellamados">
    <Img src={Rellamadosicons} alt="" /> Rellamados
  </Linkes>
  <Linkes to="/redsalud">
    <Img src="" alt="" /> Red Salud
  </Linkes>
  <Linkes to="/resultados">
    <img src="" alt="" /> Resultados
  </Linkes>
 </>
  )
}

export default AdminComponent