import React from "react";
import styled from "styled-components";
const CSVExporter = ({ apiUrl, csvHeaders, getData }) => {
  const [data, setData] = React.useState([]);

  const fetchAndExportData = async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    setData(data);
    generateCSV(data);
  };

  const generateCSV = (data) => {
    let csvContent = "data:text/csv;charset=utf-8,";

    // Agregar la cabecera del archivo CSV
    csvContent += "Pesquisas neonatales\n";
    csvContent += "Reporte Personalizado\n";
    csvContent += "\n";
    csvContent += "Fecha: " + new Date().toLocaleDateString() + "\n";
    csvContent += "\n";

    // Agregar los encabezados del archivo CSV
    csvContent += csvHeaders.join(",") + "\n";

    // Agregar los datos del reporte
    data.forEach((item) => {
      const row = csvHeaders.map((header) => item[header]).join(",");
      csvContent += row + "\n";
    });

    // Crear un objeto URL para descargar el archivo CSV
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "reporte.csv");
    document.body.appendChild(link);
    link.click();
  };

  return <Abutton onClick={fetchAndExportData}>Excel</Abutton>;
};

export default CSVExporter;
export const Abutton = styled.div`
width:100%;
height:100%;
background-color:transparent;
display:flex;
justify-content:center;
align-items:center; 

`;