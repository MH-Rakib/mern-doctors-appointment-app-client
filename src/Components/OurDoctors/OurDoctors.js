import React, { useEffect, useState } from "react";
import data from "../../Assets/Data/OurDoctors";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import DoctorCard from "./../DoctorCard/DoctorCard";
import "./OurDoctors.css";

const OurDoctors = () => {
  const [ourDoctors, setOurDoctors] = useState([]);
  useEffect(() => {
    setOurDoctors(data);
  }, []);

  return (
    <div>
      <Container className="ourDoctor">
        <Row>
          <Col>
            <div className="ourDoctors-heading">
              <p>OUR DOCTORS</p>
            </div>
          </Col>
        </Row>
        <Row>
          {ourDoctors.map((obj) => (
            <Col lg={3}>
              <DoctorCard obj={obj}></DoctorCard>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default OurDoctors;
