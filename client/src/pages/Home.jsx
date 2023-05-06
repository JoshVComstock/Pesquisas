import React from "react";
import styled from "styled-components";
import { Divreport } from "../styles/crud";
import Homee from "./Graficoshome";

import { getPacientes } from "../services/pacientes";
import { UseFech } from "../hooks/useFech";


const Home = () => {
  const { data: pacientes } = UseFech(getPacientes);
  return (
    <>
      <Divmayor>
        <Divreport>
          <div>
            <img src="src\img\paciente.png" alt="" />
            <section>
              <h3>{pacientes.length}</h3>
              <p>n° registros</p>
              <p>De Pacientes</p>
            </section>
          </div>
          <div>
            <img src="src\img\gestion.png" alt="" />
            <section>
              <h3>3</h3>
              <p>n° registros</p>
              <p>Provincia</p>
            </section>
          </div>
        </Divreport>
        <Grafia>
          <section>
          <Homee />
          </section>
    
         <section>
         <Homee />
         </section>
        </Grafia>
      </Divmayor>
    </>
  );
};

export default Home;
const Divmayor = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 1em auto;

`;

const Grafia = styled.div`
  display: flex;
  width: 90%;
  flex-direction:row;
  gap:1em;
  & section{
    display: flex;
    width:40%;
    flex-direction:column;
    border:solid 1px #0002;
  }

`;
