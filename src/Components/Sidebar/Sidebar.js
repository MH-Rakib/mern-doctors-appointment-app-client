import React from "react";
import { MdDashboardCustomize } from "react-icons/md";
import { MdOutlineCalendarToday } from "react-icons/md";
import { MdOutlinePersonPin } from "react-icons/md";
import { MdExitToApp } from "react-icons/md";
import "./Sidebar.css";
import { Link, useRouteMatch } from "react-router-dom";

const Sidebar = ({ handleDashboard, adminDashboard }) => {
  let { path, url } = useRouteMatch();
  return (
    <div className="adminSidebar d-flex flex-column justify-content-between">
      <div className="menu">
        <p
          className={
            adminDashboard === "dashboard"
              ? "active-sidebar-items"
              : "sidebar-items"
          }
          onClick={() => handleDashboard("dashboard")}
        >
          {" "}
          <span>
            <MdDashboardCustomize className="icon" />
          </span>{" "}
          Dashboard
        </p>

        <p
          className={
            adminDashboard === "appointments"
              ? "active-sidebar-items"
              : "sidebar-items"
          }
          onClick={() => handleDashboard("appointments")}
        >
          {" "}
          <span>
            <MdOutlineCalendarToday className="icon" />
          </span>{" "}
          Appointments
        </p>

        {/* <p
          className="sidebar-items"
          onClick={() => handleDashboard("patients")}
        >
          {" "}
          <span>
            <MdOutlinePersonPin className="icon" />
          </span>{" "}
          Patients
        </p> */}
      </div>
      <div className="logout ">
        <Link to={`/`} style={{ textDecoration: "none" }}>
          <p className="sidebar-items">
            {" "}
            <span>
              <MdExitToApp className="icon" />
            </span>{" "}
            Log Out
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
