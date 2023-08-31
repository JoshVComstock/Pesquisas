import React, { useState } from "react";
import { Report } from "../../styles/StylesCruds/StyleReportes";

const ReporteFromCartilla = () => {
  const [campos, setCampos] = useState([]);
  const [filtros, setFiltros] = useState({});
  const [pdfUrl, setPdfUrl] = useState("");
  const [mostrarFiltros, setMostrarFiltros] = useState(false);

  const handleCheckboxChange = (event) => {
    const campo = event.target.value;
    if (event.target.checked) {
      setCampos([...campos, campo]);
    } else {
      setCampos(campos.filter((c) => c !== campo));
    }
    if (campo === "transfusion" || campo === "peso_nacimiento" || campo === "codigo_barras") {
      setMostrarFiltros(event.target.checked);
    }
  };

  const handleFiltroChange = (event) => {
    const filtro = event.target.value;
    const campo = event.target.getAttribute("name");

    if (campo === "start" || campo === "end") {
      const fechaTomaMuestra = {
        start: filtros.fecha_toma_muestra?.start || "",
        end: filtros.fecha_toma_muestra?.end || "",
      };

      fechaTomaMuestra[campo] = filtro;

      setFiltros((prevFiltros) => ({
        ...prevFiltros,
        fecha_toma_muestra: fechaTomaMuestra,
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
    fetch("http://localhost:8000/api/Consultadinamica-pdf-cartillas", {
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
        <h1>Reporte Dinámico de Cartillas</h1>

     <article>
     <label>
          <input
            type="checkbox"
            value="codigo_barras"
            onChange={handleCheckboxChange}
          />
          Código de Barras
        </label>

        {mostrarFiltros && campos.includes("codigo_barras") && (
          <input
            type="text"
            name="codigo_barras"
            onChange={handleFiltroChange}
            placeholder="Ingrese el código de barras"
          />
        )}

<label>
          <input
            type="checkbox"
            value="fecha_toma_muestra"
            onChange={handleCheckboxChange}
          />
          Fecha de Toma de Muestra
        </label>

        {campos.includes("fecha_toma_muestra") && (
          <article>
            <label>Desde:</label>
            <input type="date" name="start" onChange={handleFiltroChange} />
            <label>Hasta:</label>
            <input type="date" name="end" onChange={handleFiltroChange} />
          </article>
        )}
    <label>
      <input
        type="checkbox"
        value="peso_nacimiento"
        onChange={handleCheckboxChange}
      />
      Peso al Nacimiento
    </label>

    {mostrarFiltros && campos.includes("peso_nacimiento") && (
      <input
        type="text"
        name="peso_nacimiento"
        onChange={handleFiltroChange}
        placeholder="Ingrese el peso al nacimiento"
      />
    )}

    <label>
      <input
        type="checkbox"
        value="transfusion"
        onChange={handleCheckboxChange}
      />
      Transfusión
    </label>

    {mostrarFiltros && campos.includes("transfusion") && (
      <input
        type="text"
        name="transfusion"
        onChange={handleFiltroChange}
        placeholder="Ingrese la información de la transfusión"
      />
    )}
     </article>

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

export default ReporteFromCartilla;