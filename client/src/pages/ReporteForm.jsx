import React, { useState } from "react";
import styled from "styled-components";
const ReporteForm = () => {
  const [campos, setCampos] = useState([]);
  const [filtros, setFiltros] = useState({});
  const [pdfUrl, setPdfUrl] = useState("");

  const handleCheckboxChange = (event) => {
    const campo = event.target.value;
    if (event.target.checked) {
      setCampos([...campos, campo]);
    } else {
      setCampos(campos.filter((c) => c !== campo));
    }
  };

  //   const handleFiltroChange = (event) => {
  //     const filtro = event.target.value;
  //     const campo = event.target.getAttribute('name');

  //     setFiltros((prevFiltros) => ({
  //       ...prevFiltros,
  //       [campo]: filtro,
  //     }));
  //   };
  // const handleFiltroChange = (event) => {
  //     const filtro = event.target.value;
  //     const campo = event.target.getAttribute('name');

  //     const [campoPrincipal, subCampo] = campo.split('.');

  //     setFiltros((prevFiltros) => ({
  //       ...prevFiltros,
  //       [campoPrincipal]: {
  //         ...prevFiltros[campoPrincipal],
  //         [subCampo]: filtro,
  //       },
  //     }));
  //   };
  const handleFiltroChange = (event) => {
    const filtro = event.target.value;
    const campo = event.target.getAttribute("name");

    if (campo === "start" || campo === "end") {
      const fechaNacimiento = {
        start: filtros.fecha_nacimiento?.start || "",
        end: filtros.fecha_nacimiento?.end || "",
      };

      fechaNacimiento[campo] = filtro;

      setFiltros((prevFiltros) => ({
        ...prevFiltros,
        fecha_nacimiento: fechaNacimiento,
      }));
    } else {
      setFiltros((prevFiltros) => ({
        ...prevFiltros,
        [campo]: filtro,
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Enviar los campos seleccionados y los filtros al backend
    fetch("http://127.0.0.1:8000/api/Consultadinamica-pdf", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ campos, filtros }),
    })
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        setPdfUrl(url);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Report>
      <form onSubmit={handleSubmit}>
      <h1>Reporte Dinamico Pacientes</h1>

        <label>
          <input
            type="checkbox"
            value="nombre"
            onChange={handleCheckboxChange}
          />
          Nombre
        </label>
        <label>
          <input
            type="checkbox"
            value="ap_paterno"
            onChange={handleCheckboxChange}
          />
          Apellido Paterno
        </label>
        <label>
          <input
            type="checkbox"
            value="ap_materno"
            onChange={handleCheckboxChange}
          />
          Apellido Materno
        </label>
        <label>
          <input type="checkbox" value="sexo" onChange={handleCheckboxChange} />
          Sexo
        </label>
        {campos.includes("sexo") && (
          <select name="sexo" onChange={handleFiltroChange}>
            <option value="">Seleccione...</option>
            <option value="m">Masculino</option>
            <option value="f">Femenino</option>
          </select>
        )}
        <label>
          <input
            type="checkbox"
            value="fecha_nacimiento"
            onChange={handleCheckboxChange}
          />
          Fecha de Nacimiento
        </label>
        {campos.includes("fecha_nacimiento") && (
          <article>
            <label>Desde:</label>
            <input type="date" name="start" onChange={handleFiltroChange} />
            <label>Hasta:</label>
            <input type="date" name="end" onChange={handleFiltroChange} />
          </article>
        )}
        <button type="submit">Generar Reporte</button>
      </form>
      {pdfUrl && (
        <div>
          <iframe
            src={pdfUrl}
            width="50vw"
            height="500px"
            title="Vista previa del PDF"
          />
        
        </div>
      )}
    </Report>
  );
};

export default ReporteForm;
export const Report = styled.div`
  width: 95%;
  height: 100%;
  background-color: transparent;
  margin: 1em auto;
  display: flex;
  flex-direction: row;

  & form {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 34%;
    align-items: center;
    margin: auto;
    backdrop-filter: blur(7px) saturate(79%);
    -webkit-backdrop-filter: blur(7px) saturate(79%);
    background-color: #6f67d7;
    border-radius: 12px;
    border: 1px solid #0002;
    margin: 1em;
    gap: 1em;
    color: #fff;
    padding: 2%;
    
    & h1{
        width:100%;
        height:1.5em;
        font-size:1em ;
        text-transform:uppercase;

    }
    & button {
      width: 100%;
      padding: 0.6em 0;
      cursor: pointer;
      transition:all 0.5s ease;
      border-radius:5px;
      &:hover{
        background-color:#6f67d7;
        color:#fff;
        text-transform:uppercase;
        border:solid 1px #fff5;
      }
    }
    &::before {
      content: "";
      bottom: -0.8em;
      position: absolute;
      border: solid 1px #0002;
      width: 90%;
      height: 0.69em;
      background-color: #6e67d7ab;
      z-index: 1;
      border-radius: 0 0 5px 5px;
    }
    transition:all 0.5s ease-in-out;

    &:hover{
        width:34%;
        &::before {
        opacity:0;
        }
    }
& article{
    width:100%;
    font-size:0.8em;
}
  }
& div{
    margin: 1em;
    & iframe {
    width: 50vw;
    height:20em;
  }
}
`;
