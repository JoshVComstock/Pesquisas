import React from "react";
import {
  Container,
  Titulo,
  Divbotones,
  Divsearchpadre,
  Divsearch,
  Search,
  Botonsearch,
  Botonacciones,
  Iconsacciones,
  Iconsacciones1,
  Botonesacciones,
  Divtabla,
  Thead,
  Tbody,
  Th,
  Trdatos,
  Tabla,
  Divreport,
  Sectionpa,
  Botonespdf2,
  Botonespdf1,
  Botonespdf,
  Img,
} from "../styles/crud";
import { UseFech } from "../hooks/useFech";
import { getPacientes } from "../services/pacientes";
const Pacientes = () => {
  const { data: pacientes } = UseFech(getPacientes);
  return (
    <Divtabla>
      <Tabla>
        <Thead>
          <Th>Nº</Th>
          <Th>PACIENTE</Th>
          <Th>PRIMER APELLIDO</Th>
          <Th>SEGUNDO APELLIDO</Th>
          <Th>SEXO</Th>
          <Th>MADRE</Th>
          <Th>TELEFONO NORMAL</Th>
          <Th>TELEFONO EMERGENCIA</Th>
        </Thead>
        {pacientes
          
          .map((v, i) => (
            <Tbody key={i}>
              <tr>
                 
                <Trdatos data-label="Nº">{i + 1}</Trdatos>
                <Trdatos data-label="CIUDAD">{v.nombre}</Trdatos>
               <Trdatos>{v.ap_paterno}</Trdatos>
               <Trdatos>{v.ap_materno}</Trdatos>
               <Trdatos>{v.sexo}</Trdatos>
               <Trdatos>{v.madre}</Trdatos>
               <Trdatos>{v.telefono1}</Trdatos>
               <Trdatos>{v.telefono2}</Trdatos>
              </tr>
            </Tbody>
          ))}
      </Tabla>
    </Divtabla>
  );
};

export default Pacientes;
