import React, { useContext, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./AppointmentCalander.css";
import { UserContext } from "./../../App";

const AppointmentCalander = () => {
  const { appointmentDate } = useContext(UserContext);
  const [selectedAppointmentDate, setSelectedAppointmentDate] = appointmentDate;
  console.log(selectedAppointmentDate);

  const [value, setValue] = useState(new Date());

  const onChange = (date) => {
    setSelectedAppointmentDate(date);
  };
  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};

export default AppointmentCalander;
