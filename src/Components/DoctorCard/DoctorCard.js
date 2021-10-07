import React from "react";
import "./DoctorCard.css";

const DoctorCard = ({ obj }) => {
  return (
    <div className="doctorCard">
      <div className="doctorCard-image">
        <img src={obj.image} className="img-fluid w-70" alt="" />
      </div>
      <div className="doctorCard-info">
        <h3>{obj.name}</h3>
        <p>{obj.designation}</p>
      </div>
    </div>
  );
};

export default DoctorCard;
