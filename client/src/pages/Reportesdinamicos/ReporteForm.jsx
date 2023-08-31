import React, { useState } from "react";
import { Report } from "../../styles/StylesCruds/StyleReportes";
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

       <article>
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
       </article>
        <button type="submit">Generar Reporte</button>
      </form>

      <div>
        {pdfUrl ? (
          <iframe
            src={pdfUrl}
            title="Vista previa del PDF"
            style={{ width: "100%", height: "500px" }}
          />
        ) : (
          <p>
            Preciona el botón de <strong>GENERAR REPORTE</strong> si deseas ver todos los datos.
          </p>
        )}
      </div>
    </Report>
  );
};

export default ReporteForm;
