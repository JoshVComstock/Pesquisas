import React from "react";
import { UseFech } from "../hooks/useFech";
import { getCiudades } from "../services/Ciudades";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import Provinciasgrafic from "../components/app/Grafic/Provinciasgrafic";
import styled from "styled-components";
import Ciudadgrafic from "../components/app/Grafic/Ciudadgrafic";
const Home = () => {
  const { data:ciudad } = UseFech(getCiudades);
  return (
    <Divgrafic>
      <h2>Ciudad</h2>
      <ResponsiveContainer width="50%" aspect={2}>
        <BarChart
          data={ciudad}
          width={500}
          height={300}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="4 1 2"/>
          <XAxis dataKey="ciudad"/>
          <YAxis/>
          <Tooltip/>
          <Legend/>
          <Bar dataKey="id" fill="#6b48ff"/>
          <Bar dataKey="id" fill="#1ee3cf"/>
        </BarChart>
      </ResponsiveContainer>
      <Provinciasgrafic/>
      <Ciudadgrafic/>
    </Divgrafic>
  );
};

export default Home;
const Divgrafic=styled.div`
  display: flex;
`;
