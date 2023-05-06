import React, { useState } from "react";
import styled from "styled-components";
import { postRegister } from "../services/register";
import { Inputs } from "../styles/crud";
const Resgistrousuario = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState();
  const [rol, setRol] = useState("");
  const [password, setPassword] = useState("");
  const [conpassword, setConpassword] = useState("");
  const Enviar = () => {
    postRegister(nombre, email, telefono, rol, password, conpassword, () => {
      setNombre("");
      setEmail("");
      setTelefono("");
      setRol("");
      setPassword("");
      setConpassword("");
    });
  };
  return (
    <>
      <Container>
        <Divhijocon>
          <div>
            <Divinput>
              <Label htmlFor="">NOMBRE</Label>
              <Inputs
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </Divinput>
            <Divinput>
              <Label htmlFor="">EMAIL</Label>
              <Inputs
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Divinput>
            <Divinput>
              <Label htmlFor="">TELEFONO</Label>
              <Inputs
                type="number"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                required
              />
            </Divinput>
          </div>
          <div>
            <Divinput>
              <Label htmlFor="">ROL</Label>
              <Select name="" onChange={(e) => setRol(e.target.value)} required>
                <option value="">SELECCIONE ROL</option>
                <option value="administrador">ADMINISTRADOR</option>
                <option value="laboratorio">LABORATORIO</option>
                <option value="recepcionista">RECEPCIONISTA</option>
                <option value="pagina">MODIFICACION PAGINA INFORMATIVA</option>
              </Select>
            </Divinput>
            <Divinput>
              <Label htmlFor="">CONTRASEÑA</Label>
              <Inputs
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Divinput>
            <Divinput>
              <Label htmlFor="">CONFIRMACION DE CONTRASEÑA</Label>
              <Inputs
                type="password"
                value={conpassword}
                onChange={(e) => setConpassword(e.target.value)}
                required
              />
            </Divinput>
          </div>
        </Divhijocon>
        <Boton onClick={() => Enviar()}>Registrar</Boton>
      </Container>
    </>
  );
};

export default Resgistrousuario;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Divhijocon = styled.div`
  display: flex;
`;
const Label = styled.label``;
const Divinput = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;
const Select = styled.select`
  margin-top: 5px;
  margin-bottom: 5px;
  width: 100%;
  height: 35px;
  border-radius: 10px;
  box-shadow: 0px 0.5px 0px 1px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.3);
  outline: none;
  font-size: 13px;
`;
const Boton = styled.button`
  background: #0e3392c9;
  border-radius: 20px;
  height: 40px;
  color: #fff;
  cursor: pointer;
  width: 100%;
  margin: 10px;
`;
