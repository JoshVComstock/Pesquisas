import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react";
import styled from "styled-components";
const fetchDataFromAPI = async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/resultados');
    const data = await response.json();
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
        case 'positivo':
          counts.positivos++;
          break;
        case 'sospechoso':
          counts.sospechosos++;
          break;
        case 'negativo':
          counts.negativos++;
          break;
        default:
          break;
      }
    });
  
    const processedData = [
      { name: 'Positivos', pacientes: Math.max(0, counts.positivos) },
      { name: 'Sospechosos', pacientes: Math.max(0, counts.sospechosos) },
      { name: 'Negativos', pacientes: Math.max(0, counts.negativos) },
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
    <div>
        
        <ChartContainer>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={chartData}  style={{ borderRadius: "0px" }}>
        
          <XAxis dataKey="name" />
          <YAxis  fill="#1b158e" />
          <Tooltip />
          <Legend />
          <Bar dataKey="pacientes" fill="rgb(148, 58, 232)" />
        </BarChart>
      </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
};

export default Homee;
const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:#fff;
  margin-top:1em;
`;