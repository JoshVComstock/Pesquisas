import React from "react";
import styled from "styled-components";

import Homee from "./graficos/Graficoshome";
import Porcentro from "./graficos/Graficoporcentro";
import Rescentro from "./graficos/Graficoresultadocentro";
import { getPacientes } from "../services/pacientes";
import { getCiudades } from "../services/Ciudades";
import { getLaboratorios } from "../services/Laboratorios";
import { getMunicipios } from "../services/Municipios";
import { getRedes } from "../services/Redes";
import { getRegistroprovincias } from "../services/Registroprovincias";
import { getRegistrohospitales } from "../services/RegistrosHospitales";
import { getCartillas } from "../services/cartilla";
import { getCentros } from "../services/centros";
import { getProvincias} from "../services/provincias";


import { UseFech } from "../hooks/useFech";

const Home = () => {
  const { data: pacientes } = UseFech(getPacientes);
  const { data: ciudades } = UseFech(getCiudades);
  const { data: laboratorios } = UseFech(getLaboratorios);
  const { data: municipios } = UseFech(getMunicipios);
  const { data: redes } = UseFech(getRedes);
  const { data: regpro } = UseFech(getRegistroprovincias);
  const { data: reghosp } = UseFech(getRegistrohospitales);
  const { data: cartilla } = UseFech(getCartillas);
  const { data: centro } = UseFech(getCentros);
  const { data: provincia } = UseFech(getProvincias);
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
            <img src="src\img\icons\City.jpg" alt="" />
            <section>
              <h3>{ciudades.length}</h3>
              <p>n° registros</p>
              <p>Ciudades</p>
            </section>
          </div>
          <div>
          <img src="src\img\icons\Laboratorio.jpg" alt="" />

            <section>
              <h3>{laboratorios.length}</h3>
              <p>n° registros</p>
              <p>Laboratorios</p>
            </section>
          </div>
          <div>
          <img src="src\img\icons\municipio.jpg" alt="" />
           
            <section>
              <h3>{municipios.length}</h3>
              <p>n° registros</p>
              <p>Municipios</p>
            </section>
          </div>
          
        </Divreport>
        <Divreport>
          <div>
            <img src="src\img\icons\Redes.jpg" alt="" />
            <section>
              <h3>{redes.length}</h3>
              <p>n° registros</p>
              <p>De redes</p>
            </section>
          </div>
          <div>
            <img src="src\img\registro.png" alt="" />
            <section>
              <h3>{regpro.length}</h3>
              <p>n° Registro</p>
              <p>Por Provincias</p>
            </section>
          </div>
          <div>
          <img src="src\img\registro.png" alt="" />

            <section>
              <h3>{reghosp.length}</h3>
              <p>n° registros</p>
              <p>Hospitales</p>
            </section>
          </div>
          <div>
          <img src="src\img\icons\municipio.jpg" alt="" />
           
            <section>
              <h3>{cartilla.length}</h3>
              <p>n° registros</p>
              <p>cartilla</p>
            </section>
          </div>
          
        </Divreport>
        <Divreport>
          <div>
          <img src="src\img\analitica.png" alt="" />
            <section>
              <h3>{centro.length}</h3>
              <p>registro</p>
              <p> centros</p>
            </section>
          </div>
          <div>
            <img src="src\img\analitica.png" alt="" />
            <section>
              <h3>{provincia.length}</h3>
              <p>n° registros</p>
              <p>Provincias</p>
            </section>
          </div>
        
          
        </Divreport>
        <Grafia>
          <section>
            <article><h1>casos totales de resultados</h1></article>
          <Homee />
          </section>
    
         <section>
         <article><h1>Cantidad de Pacientes por Centro</h1></article>
         <Porcentro />
         </section>
         <section>
          <Homee />
          </section>
    
         <section>
         <article><h1>Cantidad de casos por Centro</h1></article>

         <Rescentro/>
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
  margin: 2em auto;

`;

const Grafia = styled.div`
  display: flex;
  width: 100%;
  flex-direction:row;
  gap:1em;
  flex-wrap:wrap;
  & section{
    display: flex;
    width:38%;
    flex-direction:column;
    border:solid 1px #0002;
    border-radius:15px;
    padding-bottom:1em;
    &:nth-child(2n){
      width:60%;
    }
  & article{
    width:100%;
    background-color:rgb(16, 45, 210);
    border-radius:15px 15px 0 0;
    display:flex;
    justify-content:center;
    align-items:center;
    color:#fff;
    & h1{

    }
  }
  }

`;
export const Divreport = styled.div`
  width: 100%;
  height: 8em;
  display: flex;
  flex-wrap: nowrap;
  gap: 2em;
  & div {
    color:#fff;
    /* &:nth-child(2n) {
  background-color: #fff;
  color:#000;
}

  &:nth-child(2n+1) {
  background-color: #30A9DE; } */
    width: calc(100% / 4);
    height: 80%;
    display: flex;
    flex-direction: row;
    transition: all 0.2s ease-in-out;
    border: solid 1px #0002;
    justify-content: space-around;
    padding: 1em;
    position: relative;
    z-index: 1;
    color:#000;
    border-radius: 5px;
    background-color:#fff;
    &::before {
      content: "";
      bottom: -0.8em;
      position: absolute;
      border: solid 1px #0002;
      width: 90%;
      height: 0.69em;
      background-color: #fff;
      z-index: 1;
      border-radius: 0 0 5px 5px;
    }

    &:hover {
      &::before {
        display: none;
      }
      transform: scale(1.02);
      border: solid 1px #0000;
      box-shadow: 0 0 5px #0003;
    }
    & img {
      width: 50px;
      height: 50px;
    }
    & section {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 50%;
      & h3 {
        background-color: rgb(34, 152, 202);
        width: 100%;
        height: 50%;
        color: #fff;
        text-align: center;
        font-size:1em;
        border: solid 1px #0002;
        &::first-letter {
          font-size: 1.6em;
        }
      }
    }
  }
`;