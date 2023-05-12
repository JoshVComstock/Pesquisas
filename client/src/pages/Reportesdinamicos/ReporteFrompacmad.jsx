import React, { useState } from "react";
import styled from "styled-components";
import { Report } from "./ReporteForm";

const ReporteFormpacmad = () => {
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
    fetch("http://127.0.0.1:8000/api/Consultadinamica2-pdf", {
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
        <h1>Reporte Dinámico de Pacientes</h1>
        <label>
          <input
            type="checkbox"
            value="pacientes.nombre"
            onChange={handleCheckboxChange}
          />
          Nombre (Pacientes)
        </label>
        <label>
          <input
            type="checkbox"
            value="pacientes.ap_paterno"
            onChange={handleCheckboxChange}
          />
          Apellidos (Pacientes)
        </label>
        {/* ... otros campos de pacientes ... */}

        <label>
          <input
            type="checkbox"
            value="madres.nombre"
            onChange={handleCheckboxChange}
          />
          Nombre
        </label>
        <label>
          <input
            type="checkbox"
            value="madres.apellidos"
            onChange={handleCheckboxChange}
          />
          Apellidos
        </label>
        <label>
          <input
            type="checkbox"
            value="madres.ci"
            onChange={handleCheckboxChange}
          />
          CI
        </label>
        <label>
          <input
            type="checkbox"
            value="madres.direccion"
            onChange={handleCheckboxChange}
          />
          Dirección
        </label>
        <label>
          <input
            type="checkbox"
            value="madres.telefono1"
            onChange={handleCheckboxChange}
          />
          Teléfono1
        </label>
        <label>
          <input
            type="checkbox"
            value="madres.enfermedad"
            onChange={handleCheckboxChange}
          />
          Enfermedad
        </label>
        {campos.includes("enfermedad") && (
          <select
            name="enfermedad"
            onChange={handleFiltroChange}
            defaultValue=""
          >
            <option value="">Seleccione...</option>
            <option value="si">Si</option>
            <option value="no">No
            </option>
            <option value="especifica">Específica</option>
          </select>
        )}
        <label>
          <input
            type="checkbox"
            value="madres.detalle_direccion"
            onChange={handleCheckboxChange}
          />
          Detalle de Dirección
        </label>
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
export default ReporteFormpacmad;