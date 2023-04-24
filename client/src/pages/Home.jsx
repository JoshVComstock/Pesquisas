import React from "react";
import { UseFech } from "../hooks/useFech";
import { getCiudades } from "../services/Ciudades";
const baseUrl = import.meta.env.VITE_BACKEND_URL;
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Provinciasgrafic from "../components/app/Grafic/Provinciasgrafic";
import styled from "styled-components";
import Ciudadgrafic from "../components/app/Grafic/Ciudadgrafic";
const Home = () => {
  const { data: ciudad } = UseFech(getCiudades);
  const mostrarpdf = async () => {
    const response = await fetch(`${baseUrl}cartilla-pdf`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    window.open(url, "_blank");
    return response;
  };
  return (
    <div>
      <Divgrafic>
        <h2>Ciudad</h2>
        <ResponsiveContainer width="50%" aspect={2}>
          <BarChart
            data={ciudad}
            width={500}
            height={300}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="4 1 2" />
            <XAxis dataKey="ciudad" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="id" fill="#6b48ff" />
            <Bar dataKey="id" fill="#1ee3cf" />
          </BarChart>
        </ResponsiveContainer>
        <Provinciasgrafic />
        <Ciudadgrafic />
      </Divgrafic>
      <Botones>
        <button onClick={mostrarpdf}>Ver reporte de cartillas</button>
        <button>Ver reporte Paciente</button>
      </Botones>
    </div>
  );
};

export default Home;
const Divgrafic = styled.div`
  display: flex;
`;
const Botones = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
