import React from "react";
import { UseFech } from "../../../hooks/useFech";
import { getCiudades } from "../../../services/Ciudades";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Provinciasgrafic = () => {
  const { data: ciudad } = UseFech(getCiudades);
  return (
    <ResponsiveContainer width="50%" aspect={2}>
      <AreaChart
        data={ciudad}
        width={500}
        height={400}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="ciudad" />
        <YAxis />
        <Tooltip />
        <Area type="Monotone" dataKey="id" stackId="1" stroke=""/>
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Provinciasgrafic;
