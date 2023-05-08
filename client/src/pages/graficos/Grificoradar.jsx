import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
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

const Rescentroradar = () => {
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
          <PieChart>
            <Pie
              data={chartData}
              dataKey="pacientes"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
};

export default Rescentroradar;

const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:transparent;
  margin-top: 1em;
`;

const COLORS = ['#302b9e', '#731a87', '#ffc658'];
