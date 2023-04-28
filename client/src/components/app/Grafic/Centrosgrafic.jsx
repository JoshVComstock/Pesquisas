import React from "react";
import { UseFech } from "../../../hooks/useFech";
import { getCentros} from "../../../services/centros";
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

const Centrografic = () => {
  const { data:centros } = UseFech(getCentros);
  const COLOR = ["blue", "6bec", "#ce93d3", "#5c6bc0"];
  return (
    <ResponsiveContainer width="50%" aspect={2}>
    <AreaChart
      data={centros}
      width={800}
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

export default Centrografic;
