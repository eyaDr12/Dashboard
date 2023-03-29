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
      <div>
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
      <div style={{width:"400px",height:'300px' ,marginLeft}}>
      <Grid item xs={12} md={6} lg={8} >
            <AppCurrentVisits
              title="Current product"
              chartData={[
                { label: 'product 1', value: 3344 },
                { label: 'product 2', value: 4435 },
                { label: 'product 3', value: 1443 },
                { label: 'product 4', value: 4443 },
                { label: 'product 5', value: 2043 },
                { label: 'product 6', value: 3043 },

              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />
              </Grid >
              </div>
    </div>
  );
}
