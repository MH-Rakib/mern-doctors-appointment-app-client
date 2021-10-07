import React from "react";
import "./MakeAppoinment.css";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import img from "../../Assets/images/5790-removebg.png";
import { Link } from "react-router-dom";

const MakeAppoinment = () => {
  return (
    <Container className="makeAppoinment">
      <Row className="d-flex align-items-center">
        <Col lg={5}>
          <div style={{ marginTop: "-80px" }}>
            <img src={img} className="img-fluid w-100" alt="" />
          </div>
        </Col>
        <Col lg={7}>
          <div className="makeAppoinment-details">
            <h4>APPOINMENT</h4>
            <h3>Make An Appoinment Today</h3>
            {/* <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters.
            </p> */}
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy.
            </p>

            <Link to="/appointment">
              <button>LEARN MORE</button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MakeAppoinment;
