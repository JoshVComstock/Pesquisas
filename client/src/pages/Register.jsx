import React, { useEffect, useState } from "react";
import styled from "styled-components";
import New from "./../img/new.jpg";
import Pdf from "./../img/pdf.jpg";
import Excel from "./../img/doc.jpg";
import Searchicons from "./../img/search.jpg";
import Editar from "./../img/icons/Editar.jpg";
import Eliminar from "./../img/icons/Delete.jpg";
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
  Botonacciones,
  Iconsacciones,
  Iconsacciones1,
  Botonesacciones,
  Divtabla,
  Thead,
  Tbody,
  Th,
  Trdatos,
} from "../styles/crud";
import { UseFech } from "../hooks/useFech";
import { getRegister } from "../services/register";

const Register = () => {
  const [filtro, setFiltro] = useState("");
  const { data: users } = UseFech(getRegister);
  const navigate = useNavigate();
  const { user } = useuserContext();
 console.log(users);
  useEffect(() => {
    //if(user.rol != "laboratorio"){
    //  navigate("/laboratorio")
    // }
  }, []);

  return (
    <Container>
      <Titulo>Agregar usuarios</Titulo>
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
      </Divbotones>
      <Divsearchpadre>
        <Divsearch>
          <Search
            type="text"
            placeholder="Buscar"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
          />
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
              <th>EMAIL</th>
              <th>TELEFONO</th>
              <th>ROL</th>
              <th>PASSWORD</th>
              <Th>ACCIONES</Th>
            </tr>
          </Thead>
          {users
            .filter((v) =>
              v.nombre.toLowerCase().includes(filtro.toLowerCase())
            )
            .map((v, i) => (
              <Tbody key={i}>
                <tr>
                  <Trdatos>{i+1}</Trdatos>
                  <Trdatos>{v.nombre}</Trdatos>
                  <Trdatos>{v.email}</Trdatos>
                  <Trdatos>{v.telefono}</Trdatos>
                  <Trdatos>{v.rol}</Trdatos>
                  <Trdatos>{v.password}</Trdatos>
                  <Trdatos>
                    <Botonacciones>
                      <div>
                        <Botonesacciones>
                          <Iconsacciones src={Editar} alt="" />
                        </Botonesacciones>
                      </div>
                      <div>
                        <Botonesacciones>
                          <Iconsacciones1 src={Eliminar} alt="" />
                        </Botonesacciones>
                      </div>
                    </Botonacciones>
                  </Trdatos>
                </tr>
              </Tbody>
            ))}
        </table>
      </Divtabla>
    </Container>
  );
};
export default Register;
