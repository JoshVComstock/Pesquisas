
import React from 'react'

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

import { Linkes, Img} from '../../../styles/roles';

const LaboratorioComponent = () => {
  return (
    <>
     <Linkes to="/laboratorios">
                {" "}
                <Img src={Laboratorioicons} alt="" /> Laboratorios
              </Linkes>
 </>
  )
}

export default LaboratorioComponent