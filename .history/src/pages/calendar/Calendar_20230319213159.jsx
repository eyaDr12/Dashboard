import { Calendar,dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format"
import parse from "date-fns/parse"
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css"
import React,{useState} from "react";
import DatePicker  from "react-datepicker";

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
      start: new Date(2023, 4, 0),
      end: new Date(2023, 6, 0),
  },
  {
      title: "Vacation",
      start: new Date(2023, 6, 7),
      end: new Date(2023, 6, 10),
  },
  {
      title: "Conference",
      start: new Date(2023, 6, 20),
      end: new Date(2023, 6, 23),
  },
];

function Calendrier() {
  return (
    <div>Calendar</div>
  )
}

export default Calendrier