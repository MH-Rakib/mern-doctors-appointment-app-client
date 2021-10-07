import React from "react";
import "./Banner.css";
import { Container, Row, Col } from "react-bootstrap";
import chair from "../../Assets/images/chair.png";
import AppointmentCalander from "../AppointmentCalander/AppointmentCalander";
import { Link } from "react-router-dom";

const Banner = ({ showCalander }) => {
  return (
    <Container className="banner d-flex align-items-center">
      <Row className="d-flex align-items-center">
        {showCalander ? (
          <Col lg={5} className="banner-appoinment-calander">
            <h3>Appointment</h3>
            <AppointmentCalander></AppointmentCalander>
          </Col>
        ) : (
          <Col lg={5} className="banner-appoinment">
            <h2>Your New Smile Starts Here!</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.{" "}
            </p>
            <Link to="/appointment">
              <button>GET APPOINMENT</button>
            </Link>
          </Col>
        )}

        <Col lg={7} className="banner-image">
          <img src={chair} className="img-fluid w-100" alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
