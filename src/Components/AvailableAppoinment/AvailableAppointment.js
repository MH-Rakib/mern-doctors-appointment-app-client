import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { UserContext } from "./../../App";
import data from "./../../Assets/Data/DoctorAppointment";
import DoctorAppointmentCard from "./../DoctorAppointmentCard/DoctorAppointmentCard";
import "./AvailableAppointment.css";

const AvailableAppointment = () => {
  const { appointmentDate } = useContext(UserContext);
  const [selectedAppointmentDate, setSelectedAppointmentDate] = appointmentDate;

  return (
    <div className="availableAppointment">
      <Container>
        <Row>
          <Col>
            <h4 className="availableAppointment-header">
              Available Appointment on {selectedAppointmentDate.toDateString()}
            </h4>
          </Col>
        </Row>
        <Row>
          {data.map((obj) => (
            <Col lg={4}>
              <DoctorAppointmentCard
                value={obj}
                date={selectedAppointmentDate}
              ></DoctorAppointmentCard>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AvailableAppointment;
