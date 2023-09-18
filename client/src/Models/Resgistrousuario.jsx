import React, { useState } from "react";
import { postRegister } from "../services/register";
const Resgistrousuario = ({ closemodal, getapi }) => {
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
      closemodal();
      getapi();
    });
  };
  return (
    <>
      <form>
        <section>
          <label htmlFor="">NOMBRE</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </section>
        <section>
          <label htmlFor="">EMAIL</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </section>
        <section>
          <label htmlFor="">TELEFONO</label>
          <input
            type="number"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
          />
        </section>
        <section>
          <label htmlFor="">ROL</label>
          <select name="" onChange={(e) => setRol(e.target.value)} required>
            <option value="">SELECCIONE ROL</option>
            <option value="administrador">ADMINISTRADOR</option>
            <option value="laboratorio">LABORATORIO</option>
            <option value="recepcionista">RECEPCIONISTA</option>
            <option value="pagina">MODIFICACION PAGINA INFORMATIVA</option>
          </select>
        </section>
        <section>
          <label htmlFor="">CONTRASEÑA</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </section>
        <section>
          <label htmlFor="">CONFIRMACION DE CONTRASEÑA</label>
          <input
            type="password"
            value={conpassword}
            onChange={(e) => setConpassword(e.target.value)}
            required
          />
        </section>
        <article>
          <button onClick={() => Enviar()}>Registrar</button>
        </article>
      </form>
    </>
  );
};

export default Resgistrousuario;
