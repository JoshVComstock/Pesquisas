import React, { useState } from "react";
import styled from "styled-components";
import { Report } from "./ReporteForm";
const ReportemadreForm = () => {
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

  const handleFiltroChange = (event) => {
    const filtro = event.target.value;
    const campo = event.target.getAttribute("name");

    if (campo === "created_at_start" || campo === "created_at_end") {
      const createdAt = {
        start: filtros.created_at?.start || "",
        end: filtros.created_at?.end || "",
      };
      if (campo === "created_at_start") {
        // Agregar hora inicial al rango de fechas
        createdAt.start = `${filtro} 00:00:00`;
      } else {
        // Agregar hora final al rango de fechas
        createdAt.end = `${filtro} 23:59:59`;
      }
      createdAt[campo] = filtro;

      setFiltros((prevFiltros) => ({
        ...prevFiltros,
        created_at: createdAt,
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
    fetch("http://127.0.0.1:8000/api/Consultadinamica-pdf-madres", {
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
      <article>
      <form onSubmit={handleSubmit}>
        <h1>Reporte Dinámico Madres</h1>

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
            value="apellidos"
            onChange={handleCheckboxChange}
          />
          Apellidos
        </label>
        <label>
          <input type="checkbox" value="ci" onChange={handleCheckboxChange} />
          CI
        </label>
        <label>
          <input
            type="checkbox"
            value="direccion"
            onChange={handleCheckboxChange}
          />
          Dirección
        </label>
        <label>
          <input
            type="checkbox"
            value="telefono1"
            onChange={handleCheckboxChange}
          />
          Teléfono 1
        </label>
        <label>
          <input
            type="checkbox"
            value="telefono2"
            onChange={handleCheckboxChange}
          />
          Teléfono 2
        </label>
        <label>
          <input
            type="checkbox"
            value="tratamiento_hipertiroidismo"
            onChange={handleCheckboxChange}
          />
          Tratamiento de Hipertiroidismo
        </label>
        <label>
          <input
            type="checkbox"
            value="tratamiento_hipotiroidismo"
            onChange={handleCheckboxChange}
          />
          Tratamiento de Hipotiroidismo
        </label>
        <label>
          <input
            type="checkbox"
            value="enfermedad"
            onChange={handleCheckboxChange}
          />
          Enfermedad
        </label>
        {campos.includes("enfermedad") && (
          <input type="text" name="enfermedad" onChange={handleFiltroChange} />
        )}
        <label>
          <input
            type="checkbox"
            value="created_at"
            onChange={handleCheckboxChange}
          />
          Fecha de Creación
        </label>
        {campos.includes("created_at") && (
          <div>
            <label>Desde:</label>
            <input
              type="date"
              name="created_at_start"
              onChange={handleFiltroChange}
            />
            <label>Hasta:</label>
            <input
              type="date"
              name="created_at_end"
              onChange={handleFiltroChange}
            />
          </div>
        )}
        <button type="submit">Generar Reporte</button>
      </form>
      </article>
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

export default ReportemadreForm;
