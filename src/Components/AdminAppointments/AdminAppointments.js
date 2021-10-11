import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import "./AdminAppointments.css";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const AdminAppointments = ({ data }) => {
  const [allData, setAllData] = data;
  const handleDeleteAppointments = (val) => {
    // const id = obj._id;
    console.log(val);
    console.log(typeof val);
    fetch(`http://localhost:5000/deleteAppointment/${val}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          alert("Deleted Successfully!");
          // setAllData([]);
        }
      });
  };

  return (
    <div>
      <Row className="adminAppointmentsList-header">
        <Col md={2}>
          <p>Name </p>
        </Col>
        <Col md={3}>
          <p>Email </p>
        </Col>
        <Col md={1}>
          <p>Age </p>
        </Col>
        <Col md={3}>
          <p>Subject </p>
        </Col>
        <Col md={1}>
          <p>Gender </p>
        </Col>
        <Col md={2}>
          <p>Delete </p>
        </Col>
      </Row>
      {allData.map((obj) => (
        <Row className="adminAppointmentsList">
          <Col md={2}>
            <p>{obj.name}</p>
          </Col>
          <Col md={3}>
            <p>{obj.email}</p>
          </Col>
          <Col md={1}>
            <p>{obj.age}</p>
          </Col>
          <Col md={3}>
            <p>{obj.subject}</p>
          </Col>
          <Col md={1}>
            <p>{obj.gender}</p>
          </Col>
          <Col
            md={2}
            style={{ cursor: "pointer" }}
            onClick={() => handleDeleteAppointments(obj._id)}
          >
            <p className="text-danger">
              {" "}
              <MdDeleteOutline /> &nbsp; delete
            </p>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default AdminAppointments;
