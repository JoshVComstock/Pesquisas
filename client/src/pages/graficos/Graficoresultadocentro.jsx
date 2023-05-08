import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react";
import styled from "styled-components";

const fetchDataFromAPI = async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/consultasresultadocentro');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener los datos de la API:', error);
    return [];
  }
};

const processDataForChart = (data) => {
  const centerData = {};

  data.forEach((item) => {
    const { nombre_centro, resultado } = item;

    if (!centerData[nombre_centro]) {
      centerData[nombre_centro] = {
        name: nombre_centro,
        positivos: 0,
        negativos: 0,
        sospechosos: 0,
      };
    }

    switch (resultado) {
      case 'positivo':
        centerData[nombre_centro].positivos++;
        break;
      case 'negativo':
        centerData[nombre_centro].negativos++;
        break;
      case 'sospechoso':
        centerData[nombre_centro].sospechosos++;
        break;
      default:
        break;
    }
  });

  const processedData = Object.values(centerData);

  return processedData;
};

const Rescentro = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDataFromAPI();
      const processedData = processDataForChart(data);
      setChartData(processedData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <ChartContainer>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={chartData} style={{ borderRadius: "0px" }}>
            <XAxis dataKey="name" />
            <YAxis fill="#1b158e" />
            <Tooltip />
            <Legend />
            <Bar dataKey="positivos" fill="rgb(148, 58, 232)" />
            <Bar dataKey="negativos" fill="rgb(58, 148, 232)" />
            <Bar dataKey="sospechosos" fill="rgb(232, 58, 148)" />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
};

export default Rescentro;

const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:transparent;

  margin-top: 1em;
`;
