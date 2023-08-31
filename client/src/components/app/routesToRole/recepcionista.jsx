import { Linkes, Img } from "../../../styles/roles";
import React from "react";
import Cartilla from "../../../img/icons/Primeramuestra.jpg";
const Recepcionista = () => {
  return (
    <>
      <Linkes to="/cartilla">
        <Img src={Cartilla} alt="" /> Cartilla
      </Linkes>
    </>
  );
};

export default Recepcionista;