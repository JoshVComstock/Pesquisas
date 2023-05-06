import React, { useEffect, useState } from "react";
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
  Sectionpa,
  Tabla,
} from "../styles/crud";
import { UseFech } from "../hooks/useFech";
import { deleteRegister, getRegister } from "../services/register";
import { useModal } from "../hooks/useModal";
import Resgistrousuario from "../models/Resgistrousuario";
const Register = () => {
  const [filtro, setFiltro] = useState("");
  const { data: users, getApi } = UseFech(getRegister);
  const navigate = useNavigate();
  const { user } = useuserContext();
  const { openModal, closeModal } = useModal(
    "Crear nuevo usuario",
    <Resgistrousuario />
  );
  useEffect(() => {
    //if(user.rol != "laboratorio"){
    //  navigate("/laboratorio")
    // }
  }, []);
 console.log(user);
  return (
    <Container>
      <Sectionpa>
        <Titulo>Agregar usuarios</Titulo>
        <Divbotones>
          <Botonespdf2 onClick={openModal}>
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
          <Tabla>
            <Thead>
              <tr>
                <Th>Nº</Th>
                <Th>NOMBRE</Th>
                <Th>EMAIL</Th>
                <Th>TELEFONO</Th>
                <Th>ROL</Th>
                <Th>PASSWORD</Th>
                <Th>ACCION</Th>
              </tr>
            </Thead>
            {users
              .filter((v) =>
                v.nombre.toLowerCase().includes(filtro.toLowerCase())
              )
              .map((v, i) => (
                <Tbody key={i}>
                  <tr>
                    <Trdatos>{i + 1}</Trdatos>
                    <Trdatos>{v.nombre}</Trdatos>
                    <Trdatos>{v.email}</Trdatos>
                    <Trdatos>{v.telefono}</Trdatos>
                    <Trdatos>{v.rol}</Trdatos>
                    <Trdatos>********</Trdatos>
                    <Trdatos>
                      <Botonacciones
                        onClick={() => deleteRegister(v.id,()=> getApi())}
                      >
                        <Iconsacciones1 src={Eliminar} alt="">
                          Eliminar
                        </Iconsacciones1>
                      </Botonacciones>
                    </Trdatos>
                  </tr>
                </Tbody>
              ))}
          </Tabla>
        </Divtabla>
      </Sectionpa>
    </Container>
  );
};
export default Register;
