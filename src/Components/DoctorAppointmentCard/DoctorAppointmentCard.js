import React, { useState } from "react";
import "./DoctorAppointmentCard.css";
import AppointmentForm from "./../AppointmentForm/AppointmentForm";

const DoctorAppointmentCard = ({ value, date }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="doctorAppointmentCard">
      <h4>{value.title}</h4>
      <h3>{value.time}</h3>
      <button onClick={openModal}>BOOK APPOINTMENT</button>
      <AppointmentForm
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        value={value}
        date={date}
      ></AppointmentForm>
    </div>
  );
};

export default DoctorAppointmentCard;
