import React, { useEffect, useState } from "react";
import data from "../../Assets/Data/BusinessKeyInfo";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import BusinessInfoCard from "./../BusinessInfoCard/BusinessInfoCard";
import "./BusinessInfo.css";

const BusinessInfo = () => {
  const [businessInfo, setBusinessInfo] = useState([]);

  useEffect(() => {
    setBusinessInfo(data);
  }, []);

  return (
    <Container className="businessInfo">
      <Row>
        {businessInfo.map((obj) => (
          <Col lg={4}>
            <BusinessInfoCard obj={obj} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BusinessInfo;
