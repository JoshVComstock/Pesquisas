import React from "react";
import { UseFech } from "../../../hooks/useFech";
import { getCiudades } from "../../../services/Ciudades";
import {
  Pie,
  PieChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Cell,
} from "recharts";

const Ciudadgrafic = () => {
  const { data: ciudad } = UseFech(getCiudades);
  const COLOR = ["blue", "6bec", "#ce93d3", "#5c6bc0"];
  return (
    
      <div>
        <h1>sdfsd
          
        </h1>
        <ResponsiveContainer width="50%" aspect={2}>
          <PieChart>
            <Pie dataKey="id" data={ciudad} innerRadius={5} >
              {ciudad.map((v, i) => (
                <Cell key={`cell- ${i}`} fill={COLOR[i % COLOR.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    
  );
};

export default Ciudadgrafic;
