import React, { useState } from "react";
import Footer from "./../../Components/Footer/Footer";
import HeaderBanner from "./../../Components/HeaderBanner/HeaderBanner";
import AvailableAppointment from "./../../Components/AvailableAppoinment/AvailableAppointment";

const Appoinment = () => {
  // const [selectedAppointmentDate, setSelectedAppointmentDate] = useState({});
  // console.log(selectedAppointmentDate);

  return (
    <div>
      <HeaderBanner showCalander={true} />
      <AvailableAppointment />
      <Footer></Footer>
    </div>
  );
};

export default Appoinment;
