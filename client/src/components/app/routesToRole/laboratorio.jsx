import React from "react";

import Redess from "../../../img/icons/Redes.jpg";
import { Linkes } from "../../../styles/StylesCruds/CrudsStyle";

const LaboratorioComponent = () => {
  return (
    <>
      <Linkes to="/resultados">
        <img src={Redess} alt="" /> Resultados
      </Linkes>
    </>
  );
};

export default LaboratorioComponent;
