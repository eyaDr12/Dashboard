import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import AppCurrentVisits from '../sections/@dashboard/app/AppCurrentVisits'
import { Grid} from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function Chart({ title, data, dataKey, grid }) {
  const theme = useTheme();

  return (
    <div className="chart">
  
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}  >
        <LineChart data={data} >
          <XAxis dataKey="name" stroke="#5b5b5b  " />
          <Line type="monotone" dataKey={dataKey} stroke="#d8c25b" />
          <Tooltip style={{borderStyle:"none"}} />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer >
     
    </div>
  );
}
