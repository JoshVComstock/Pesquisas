import React from "react";
import Redess from "../../../img/icons/Redes.jpg";
import { Linkes, Img } from "../../../styles/roles";
const LaboratorioComponent = () => {
  return (
    <>
      <Linkes to="/resultados">
        <Img src={Redess} alt="" /> Resultados
      </Linkes>
    </>
  );
};
export default LaboratorioComponent;
