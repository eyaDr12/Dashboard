import { Calendar,dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format"
import parse from "date-fns/parse"
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css"
import React,{useState} from "react";
import DatePicker  from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../calendar/Calendar.css'
const locales = {
  "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
      title: "Big Meeting",
      allDay: true,
      start: new Date(2023, 4, 5),
      end: new Date(2023, 4, 5),
  },
  {
      title: "Vacation",
      start: new Date(2023, 6, 10),
      end: new Date(2023, 6, 15),
  },
  {
      title: "Conference",
      start: new Date(2023, 4, 20),
      end: new Date(2023, 4, 20),
  },
];

function Calendrier() {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);

  function handleAddEvent() {
        
    for (let i=0; i<allEvents.length; i++){

        const d1 = new Date (allEvents[i].start);
        const d2 = new Date(newEvent.start);
        const d3 = new Date(allEvents[i].end);
        const d4 = new Date(newEvent.end);
 

         if (
          ( (d1  <= d2) && (d2 <= d3) ) || ( (d1  <= d4) &&
            (d4 <= d3) )
          )
        {   
            alert("CLASH"); 
            break;
         }

    }
    
    
    setAllEvents([...allEvents, newEvent]);
}

  return (
    <div>
      <h1>Calendar</h1>
    <div style={{display:'flex',backgroundColor:'white' ,marginLeft:'30px' }}>
 

            
          
              
          
                 
               
                
            
<Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px",marginLeft:'20px',width:'900px' }} />
    </div>
    </div>
  )
}

export default Calendrier