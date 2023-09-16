import React, { useState } from "react";
import Centros from "../../../img/icons/Centros.jpg";
import City from "../../../img/icons/City.jpg";
import Laboratorioicons from "../../../img/icons/Laboratorio.jpg";
import Registropronviciasicons from "../../../img/icons/Registropronvicias.jpg";
import Registrohospitalesicons from "../../../img/icons/Registrohospitales.jpg";
import Pacienteicons from "../../../img/icons/Paciente.jpg";
import Usericons from "../../../img/user.jpg";
import Cartilla from "../../../img/icons/Primeramuestra.jpg";
import { Linkes, Master } from "../../../styles/StylesCruds/CrudsStyle";
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
      <p>Reportes</p>
      <Linkes to="/Reportes">
        <img src="src\img\analitica.png" alt="" />
        Reportes
      </Linkes>
      <p>Resgistros Entidades</p>
      <section onClick={() => setIsExpanded(!isExpanded)}>
        <div>
          <img src="src\img\registro.png" alt="" />
          Registros
          <img src="src\img\abajo.png" alt="" />
        </div>
        {isExpanded && (
          <aside>
            <Linkes to="/ciudades">
              <img src={City} alt="" />
              Ciudades - Provincia
            </Linkes>
            <Linkes to="/centros">
              <img src={Centros} alt="" /> Centros-Municipios
            </Linkes>
            <Linkes to="/laboratorios">
              <img src={Laboratorioicons} alt="" /> Laboratorios -Redes
            </Linkes>
          </aside>
        )}
      </section>
      <p>Gestion cartilla</p>
      <section onClick={() => setIsExpandedcartilla(!isExpandedcartilla)}>
        <div>
          <img src="src\img\gestion.png" alt="" />
          Gestion
          <img src="src\img\abajo.png" alt="" />
        </div>
        {isExpandedcartilla && (
          <aside>
            <Linkes to="/registro_provincias">
              <img src={Registropronviciasicons} alt="" /> Registro provincias
            </Linkes>
            <Linkes to="/Registro_hospitales">
              <img src={Registrohospitalesicons} alt="" /> Registro Hospitales
            </Linkes>
          </aside>
        )}
      </section>
      
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
