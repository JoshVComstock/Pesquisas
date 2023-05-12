import React, { useState } from 'react';

const Reporte3Form = () => {
  const [campos, setCampos] = useState([]);
  const [pdfUrl, setPdfUrl] = useState("");


  const handleCheckboxChange = (event) => {
    const campo = event.target.value;
    if (event.target.checked) {
      setCampos([...campos, campo]);
    } else {
      setCampos(campos.filter((c) => c !== campo));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Enviar los campos seleccionados al backend
    fetch('http://127.0.0.1:8000/api/Consultadinamica3-pdf', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ campos }),
    })
      .then((response) => response.blob())
      .then((blob) => {
        // Descargar el reporte generado
        const url = URL.createObjectURL(blob);
        setPdfUrl(url);
        // const url = URL.createObjectURL(blob);
        // const link = document.createElement('a');
        // link.href = url;
        // link.setAttribute('download', 'reporte.pdf');
        // document.body.appendChild(link);
        // link.click();
        // document.body.removeChild(link);
        // URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
  <>
    <form onSubmit={handleSubmit}>
      <label>
        <input type="checkbox" value="pacientes.nombre" onChange={handleCheckboxChange} />
        Nombre
      </label>
      <label>
        <input type="checkbox" value="pacientes.ap_paterno" onChange={handleCheckboxChange} />
        Apellido Paterno
      </label>
      <label>
        <input type="checkbox" value="pacientes.ap_materno" onChange={handleCheckboxChange} />
        Apellido Materno
      </label>
      <label>
        <input type="checkbox" value="pacientes.sexo" onChange={handleCheckboxChange} />
        Sexo
      </label>
      <label>
        <input type="checkbox" value
="pacientes.fecha_nacimiento" onChange={handleCheckboxChange} />
Fecha de Nacimiento
</label>
<label>
<input type="checkbox" value="madres.ci" onChange={handleCheckboxChange} />
CI Madre
</label>
<label>
<input type="checkbox" value="madres.telefono1" onChange={handleCheckboxChange} />
Teléfono Madre
</label>
<button type="submit">Generar Reporte</button>
</form>
  {pdfUrl && (
        <div>
          <iframe
            src={pdfUrl}
            width="100%"
            height="500px"
            title="Vista previa del PDF"
          />
        </div>
      )}</>
);
};
export default Reporte3Form;