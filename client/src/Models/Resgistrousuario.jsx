import React from "react";

const Resgistrousuario = () => {
  return (
    <>
      <div>
        <div>
          <label htmlFor="">NOMBRE</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">EMAIL</label>
          <input type="email" />
        </div>
        <div>
          <label htmlFor="">TELEFONO</label>
          <input type="number" readOnly />
        </div>
        <div>
          <label htmlFor="">ROL</label>
          <select name="" id="">
            <option value="">ADMINISTRADOR</option>
            <option value="">LABORATORIO</option>
            <option value="">RECEPCIONISTA</option>
            <option value="">MODIFICACION PAGINA INFORMATIVA</option>
          </select>
        </div>
        <div>
          <label htmlFor="">CONTRASEÑA</label>
          <input type="password" />
        </div>
        <div>
          <label htmlFor="">CONFIRMACION DE CONTRASEÑA</label>
        </div>
        <button>Registrar</button>
      </div>
    </>
  );
};

export default Resgistrousuario;
