import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Sidebar from "./../../Components/Sidebar/Sidebar";
import "./adminDashboard.css";
import Dashboard from "./../../Components/Dashboard/Dashboard";
import AdminAppointments from "./../../Components/AdminAppointments/AdminAppointments";
import { Switch, Route, useRouteMatch } from "react-router-dom";

const AdminDashboard = () => {
  let { path, url } = useRouteMatch();

  const [allData, setAllData] = useState([]);
  // console.log(allData);
  const [adminDashboard, setAdminDashboard] = useState("dashboard");
  const handleDashboard = (string) => {
    setAdminDashboard(string);
  };

  useEffect(() => {
    fetch("http://localhost:5000/getAllAppointments")
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, []);

  return (
    <Container>
      <Row className="adminDashboard">
        <Col lg={2}>
          <Sidebar
            handleDashboard={handleDashboard}
            adminDashboard={adminDashboard}
          ></Sidebar>
        </Col>

        <Col lg={10}>
          {adminDashboard === "dashboard" && (
            <Dashboard allData={allData}></Dashboard>
          )}
          {adminDashboard === "appointments" && (
            <AdminAppointments data={[allData, setAllData]}></AdminAppointments>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
