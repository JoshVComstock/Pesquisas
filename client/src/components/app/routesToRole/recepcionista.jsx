
import React from "react";
import Cartilla from "../../../img/icons/Primeramuestra.jpg";
import { Linkes } from "../../../styles/StylesCruds/CrudsStyle";

const Recepcionista = () => {
  return (
    <>
      <Linkes to="/cartilla">
        <img src={Cartilla} alt="" /> Cartilla
      </Linkes>
    </>
  );
};

export default Recepcionista;