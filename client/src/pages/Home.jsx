import React from "react";
import styled from "styled-components";
import Homee from "./graficos/Graficoshome";
import Porcentro from "./graficos/Graficoporcentro";
import Rescentro from "./graficos/Graficoresultadocentro";
import Rescentroradar from "./graficos/Grificoradar";
import Resulciudad from "./graficos/Graficoresultadociudad";
import Porciudad from "./graficos/Graficospociudad";
import { getPacientes } from "../services/pacientes";
import { getCiudades } from "../services/Ciudades";
import { getLaboratorios } from "../services/Laboratorios";
import { getMunicipios } from "../services/Municipios";
import { getRedes } from "../services/Redes";
import { getRegistroprovincias } from "../services/Registroprovincias";
import { getRegistrohospitales } from "../services/RegistrosHospitales";
import { getCartillas } from "../services/cartilla";
import { UseFech } from "../hooks/useFech";
import { DivMayor, DivReport, Grafia } from "../styles/StylesCruds/StyleHome";
const baseUrl = import.meta.env.VITE_BACKEND_URL;
const Home = () => {
  const { data: pacientes } = UseFech(getPacientes);
  const { data: ciudades } = UseFech(getCiudades);
  const { data: laboratorios } = UseFech(getLaboratorios);
  const { data: municipios } = UseFech(getMunicipios);
  const { data: redes } = UseFech(getRedes);
  const { data: regpro } = UseFech(getRegistroprovincias);
  const { data: reghosp } = UseFech(getRegistrohospitales);
  const { data: cartilla } = UseFech(getCartillas);
  const mostrarpdf = async () => {
    const response = await fetch(`${baseUrl}Grapciudad-pdf`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    window.open(url, "_blank");
    return response;
  };
  const mostrarpdf2 = async () => {
    const response = await fetch(`${baseUrl}Grapcentro-pdf`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    window.open(url, "_blank");
    return response;
  };
  const mostrarpdf3 = async () => {
    const response = await fetch(`${baseUrl}Grapresultadocentro-pdf`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    window.open(url, "_blank");
    return response;
  };
  const mostrarpdf4 = async () => {
    const response = await fetch(`${baseUrl}Grapresultadociudad-pdf`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    window.open(url, "_blank");
    return response;
  };
  const casos = async () => {
    const response = await fetch(`${baseUrl}Casostotales-pdf`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    window.open(url, "_blank");
    return response;
  };
  return (
    <DivMayor>
      <DivReport>
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
            <p> Provincias</p>
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
      </DivReport>
      <Grafia>
        <section>
          <article>
            <h1>casos totales de resultados</h1>
            <button onClick={casos}>Generar Export</button>
          </article>
          <Homee />
        </section>

        <section>
          <Rescentroradar />
        </section>
        <section>
          <article>
            <h1>Cantidad de Pacientes por Centro</h1>
            <button onClick={mostrarpdf2}>Generar Export</button>
          </article>
          <Porcentro />
        </section>
        <section>
          <article>
            <h1>Cantidad de casos por Centro</h1>
            <button onClick={mostrarpdf3}>Generar Export</button>
          </article>
          <Rescentro />
        </section>
        {/*  */}
        <section>
          <article>
            <h1>Cantidad de Pacientes por ciudad</h1>
            <button onClick={mostrarpdf}>Generar Export</button>
          </article>
          <Porciudad />
        </section>
        <section>
          <article>
            <h1>Cantidad de casos por Ciudad</h1>
            <button onClick={mostrarpdf4}>Generar Export</button>
          </article>
          <Resulciudad />
        </section>
      </Grafia>
    </DivMayor>
  );
};

export default Home;