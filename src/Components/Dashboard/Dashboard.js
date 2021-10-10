import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import "./Dashboard.css";

const Dashboard = ({ allData }) => {
  const [malePatients, setMalePatients] = useState([]);
  const [femalePatients, setFemalePatients] = useState([]);

  useEffect(() => {
    const malePatients = allData.filter((data) => data.gender === "male");
    setMalePatients(malePatients);

    const femalePatients = allData.filter((data) => data.gender === "female");
    setFemalePatients(femalePatients);
  }, [allData]);

  return (
    <div>
      <Row>
        <Col lg={4}>
          <div className="totalappointment stats d-flex flex-row align-items-center">
            <div className="amount ">
              <p>{allData.length}</p>
            </div>
            <div className="title flex-grow-1">
              <p>Total</p>
              <p>Appointments</p>
            </div>
          </div>
        </Col>

        {/* <Col lg={3}>
        <div className="totalpatients stats d-flex flex-row align-items-center">
          <div className="amount">
            <p>42</p>
          </div>
          <div className="title flex-grow-1">
            <p>Total</p>
            <p>Patients</p>
          </div>
        </div>
      </Col> */}

        <Col lg={4}>
          <div className="TodaysAppointment stats d-flex flex-row align-items-center">
            <div className="amount">
              <p>{malePatients.length}</p>
            </div>
            <div className="title flex-grow-1">
              <p>Male</p>
              <p>Patients</p>
            </div>
          </div>
        </Col>

        <Col lg={4}>
          <div className="TodaysAppointment stats d-flex flex-row align-items-center">
            <div className="amount">
              <p>{femalePatients.length}</p>
            </div>
            <div className="title flex-grow-1">
              <p>Female</p>
              <p>Patients</p>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="appointmentByService">
        <h3 className="appointmentByService-header">
          Appointments By Services
        </h3>

        <Col md={4}>
          <div className="appointmentByService-card stats d-flex flex-row align-items-center">
            <div className="amount">
              <p>
                {
                  allData.filter((obj) => obj.subject === "Teeth Orthodontics")
                    .length
                }
              </p>
            </div>
            <div className="title flex-grow-1">
              <p>Appointment On</p>
              <p>Teeth Orthodontics</p>
            </div>
          </div>
        </Col>

        <Col md={4}>
          <div className="appointmentByService-card stats d-flex flex-row align-items-center">
            <div className="amount">
              <p>
                {
                  allData.filter((obj) => obj.subject === "Cosmetic Dentistry")
                    .length
                }
              </p>
            </div>
            <div className="title flex-grow-1">
              <p>Appointment On</p>
              <p>Cosmetic Dentistry</p>
            </div>
          </div>
        </Col>

        <Col md={4}>
          <div className="appointmentByService-card stats d-flex flex-row align-items-center">
            <div className="amount">
              <p>
                {
                  allData.filter((obj) => obj.subject === "Teeth Cleaning")
                    .length
                }
              </p>
            </div>
            <div className="title flex-grow-1">
              <p>Appointment On</p>
              <p>Teeth Cleaning</p>
            </div>
          </div>
        </Col>

        <Col md={4}>
          <div className="appointmentByService-card stats d-flex flex-row align-items-center">
            <div className="amount">
              <p>
                {
                  allData.filter((obj) => obj.subject === "Cavity Protection")
                    .length
                }
              </p>
            </div>
            <div className="title flex-grow-1">
              <p>Appointment On</p>
              <p>Cavity Protection</p>
            </div>
          </div>
        </Col>

        <Col md={4}>
          <div className="appointmentByService-card stats d-flex flex-row align-items-center">
            <div className="amount">
              <p>
                {
                  allData.filter((obj) => obj.subject === "Teeth Filling")
                    .length
                }
              </p>
            </div>
            <div className="title flex-grow-1">
              <p>Appointment On</p>
              <p>Teeth Filling</p>
            </div>
          </div>
        </Col>

        <Col md={4}>
          <div className="appointmentByService-card stats d-flex flex-row align-items-center">
            <div className="amount">
              <p>
                {
                  allData.filter((obj) => obj.subject === "Fluoride treatment")
                    .length
                }
              </p>
            </div>
            <div className="title flex-grow-1">
              <p>Appointment On</p>
              <p>Fluoride treatment</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
