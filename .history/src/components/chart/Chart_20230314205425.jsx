import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Chart({ title, data, dataKey, grid }) {

  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1} style={{border:"none",color:"blue"}} >
        <LineChart data={data} >
          <XAxis dataKey="name" stroke="#5b5b5b  " />
          <Line type="monotone" dataKey={dataKey} stroke="#d8c25b" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer >
    </div>
  );
}
