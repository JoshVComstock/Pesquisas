import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react";
import styled from "styled-components";
const fetchDataFromAPI = async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/resultados');
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error al obtener los datos de la API:', error);
    return [];
  }
};
const processDataForChart = (data) => {
  const counts = {
    positivos: 0,
    sospechosos: 0,
    negativos: 0,
  };
  data.forEach((item) => {
    switch (item.resultado) {
      case 'POSITIVO':
        counts.positivos++;
        break;
      case 'SOSPECHOSO':
        counts.sospechosos++;
        break;
      case 'NEGATIVO':
        counts.negativos++;
        break;
      default:
        break;
    }
  });
  const processedData = [
    { name: 'Positivos', pacientes: Math.max(0, counts.positivos), color: 'rgb(128, 26, 223)' },
    { name: 'Sospechosos', pacientes: Math.max(0, counts.sospechosos), color: 'rgb(255, 99, 71)' },
    { name: 'Negativos', pacientes: Math.max(0, counts.negativos), color: 'rgb(34, 139, 34)' },
  ];
  return processedData;
};
const Homee = () => {
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
    <>
      <ChartContainer>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={chartData} style={{ borderRadius: "0px" }}>
            <XAxis dataKey="name" />
            <YAxis fill="#1f16d0" />
            <Tooltip />
            <Legend />
            <Bar dataKey="pacientes" fill='rgb(128, 26, 223)' />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </>
  );
};
export default Homee;
const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:transparent;
  margin-top:1em;
`;