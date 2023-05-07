import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react";
import styled from "styled-components";

const fetchDataFromAPI = async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/consultasresultadociudad');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener los datos de la API:', error);
    return [];
  }
};

const processDataForChart = (data) => {
  const cityData = {};

  data.forEach((item) => {
    const { ciudad_pertenencia, resultado } = item;

    if (!cityData[ciudad_pertenencia]) {
      cityData[ciudad_pertenencia] = {
        name: ciudad_pertenencia,
        positivos: 0,
        negativos: 0,
        sospechosos: 0,
      };
    }

    switch (resultado) {
      case 'positivo':
        cityData[ciudad_pertenencia].positivos++;
        break;
      case 'negativo':
        cityData[ciudad_pertenencia].negativos++;
        break;
      case 'sospechoso':
        cityData[ciudad_pertenencia].sospechosos++;
        break;
      default:
        break;
    }
  });

  const processedData = Object.values(cityData);

  return processedData;
};

const Resulciudad = () => {
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
            <CartesianGrid vertical={false} horizontal={true} stroke="#3700ff71" strokeDasharray="2 2" />
            <Bar dataKey="positivos" fill="rgb(148, 58, 232)" barSize={20} />
            <Bar dataKey="negativos" fill="rgb(58, 148, 232)" barSize={20} />
            <Bar dataKey="sospechosos" fill="rgb(255, 189, 68)" barSize={20} />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
};

export default Resulciudad;

const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  margin-top: 1em;
`;
