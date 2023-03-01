import React, { useState } from "react";
import New from "./../img/new.jpg";
import Pdf from "./../img/pdf.jpg";
import Excel from "./../img/doc.jpg";
import Searchicons from "./../img/search.jpg";
import Editar from "./../img/icons/Editar.jpg";
import Eliminar from "./../img/icons/Delete.jpg";
import CentrosEdit from "../Models/Editform/CiudadesEdit";
import { useuserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Titulo,
  Divbotones,
  Botonespdf,
  Botonespdf1,
  Botonespdf2,
  Img,
  Divsearchpadre,
  Divsearch,
  Search,
  Botonsearch,
  Divtabla,
  Thead,
  Th,
} from "../styles/crud";
import { UseFech } from "../hooks/useFech";
import { getcentros } from "../services/centros";

const Centros = () => {
  const { data } = UseFech(getcentros);
  const [sexo, setSexo] = useState("");
  console.log(sexo);

  const date = new Date();
  const mes =
    date.getMonth() < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
  const dia = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  const Actualdate = date.getFullYear() + "-" + mes + "-" + dia;
  const hora = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  const minutos =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  const horaactual = hora + ":" + minutos;
  console.log(horaactual);
  const [fecha, setFecha] = useState(Actualdate);
  return (
    <Container>
      <Titulo>Centros de Salud</Titulo>
      <Divbotones>
        <Botonespdf2>
          <Img src={New} alt="" /> Nuevo
        </Botonespdf2>
        <Botonespdf1>
          <Img src={Pdf} alt="" />
          PDF
        </Botonespdf1>
        <Botonespdf>
          <Img src={Excel} alt="" />
          Excel
        </Botonespdf>{" "}
        <input
          type="radio"
          value="femenuno"
          name="sexo"
          onChange={(e) => setSexo(e.target.value)}
        />
        <input
          type="radio"
          value="Masculino"
          name="sexo"
          onChange={(e) => setSexo(e.target.value)}
        />
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
        <input type="time" value={horaactual} />
        <input type="text" value={horaactual} />
      </Divbotones>
      <Divsearchpadre>
        <Divsearch>
          <Search type="text" placeholder="Buscar" />
          <Botonsearch>
            <Img src={Searchicons} alt="" />{" "}
          </Botonsearch>
        </Divsearch>
      </Divsearchpadre>
      <Divtabla>
        <table className="table">
          <Thead>
            <tr>
              <th>Nº</th>
              <th>NOMBRE</th>
              <th>DIRECCIÓN</th>
              <th>RED</th>
              <th>TELEFONO</th>
              <th>CIUDAD</th>
              <th>AREA</th>
              <th>SEGUIMIENTO</th>
              <th>CONTACTO</th>
              <Th>ACCIONES</Th>
            </tr>
          </Thead>
          <tbody>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </tbody>
        </table>
      </Divtabla>
    </Container>
  );
};

export default Centros;
