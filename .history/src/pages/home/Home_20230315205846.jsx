
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import AppCurrentVisits from '../../components/sections/@dashboard/app/AppCurrentVisits.js';
import AppConversionRates from '../../components/sections/@dashboard/app/AppConversionRates.js';
import { useTheme } from '@mui/material/styles';
import Chart from "../../components/chart/Chart";
import { userData } from "../../Data";

import { Grid} from '@mui/material';

export default function Home() {
  const theme = useTheme();
  return (
    
    <div className="home">
       
      

       <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
        {cardList.map((card, index) => (
          <Grid item lg={3} xs={6} key={index}>
            <SaaSCard card={card} />
          </Grid>
        ))}
      </Grid>
      
       <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets"></div>

      <div className="homeWidgets">
      <WidgetSm/>
      <div className="grid1">
      <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates
              title="Conversion Rates"
              subheader="(+43%) than last year"
              chartData={[
                { label: 'Zaghouen', value: 1470 },
                { label: 'Sousse', value: 430 },
                { label: 'Djerba', value: 1448 },        
                { label: 'Bizert', value: 800 },
                { label: 'Tunis', value: 1000 },
                { label: 'Autre', value: 480 },
                { label: 'Sfax', value: 1340 },
                { label: 'Kef', value: 690 },

                
              ]}
            />
          </Grid>
          </div>
       

      </div>

      <div className="homeWidgets">   
          <div className="grid2">


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
              <div className="homeWidgets2">
              <WidgetLg />
                </div>
              
     </div>
      




          
       
        
          </div>
      
    
    
  );
}
