import React from "react";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./BusinessInfoCard.css";

const BusinessInfoCard = ({ obj }) => {
  return (
    <div className="businessInfoCard">
      <Row className="d-flex align-items-center">
        <Col lg={4}>
          <FontAwesomeIcon
            className="businessInfoCard-icon"
            icon={obj.icon}
          ></FontAwesomeIcon>
        </Col>
        <Col lg={8}>
          <h3 className="businessInfoCard-title">{obj.title}</h3>
          <p className="businessInfoCard-description">{obj.description}</p>
        </Col>
      </Row>
    </div>
  );
};

export default BusinessInfoCard;
