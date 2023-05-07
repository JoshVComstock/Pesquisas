import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react";
import styled from "styled-components";

const fetchDataFromAPI = async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/consultascentro');
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
    const { nombre_centro } = item;
    
    if (!centerData[nombre_centro]) {
      centerData[nombre_centro] = {
        name: nombre_centro,
        pacientes: 0,
        madres: 0,
      };
    }

    centerData[nombre_centro].pacientes++;
    centerData[nombre_centro].madres++;
  });

  const processedData = Object.values(centerData);

  return processedData;
};

const Porcentro = () => {
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
            <Bar dataKey="pacientes" fill="rgb(148, 58, 232)" />
            <Bar dataKey="madres" fill="rgb(58, 148, 232)" />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
};

export default Porcentro;

const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  margin-top: 1em;
`;
