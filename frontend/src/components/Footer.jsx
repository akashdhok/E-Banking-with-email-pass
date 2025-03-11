import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer mt-5" id="footer">
      <div className="footer-top">
        <Container>
          <Row className="py-4">
            <Col md={6} className="footer-links">
              <ul className="list-inline">
                <li className="list-inline-item"><a href="#">Home</a></li>
                <li className="list-inline-item"><a href="#">About</a></li>
                <li className="list-inline-item"><a href="#">Services</a></li>
                <li className="list-inline-item"><a href="#">Gallery</a></li>
                <li className="list-inline-item"><a href="#">Contact Us</a></li>
              </ul>
              <p>
                Vivamus sed porttitor felis. Pellentesque habitant morbi tristique 
                senectus et netus et cetur adipiscing elit. Cras rutrum iaculis.
              </p>
            </Col>
            <Col md={6} className="text-md-end text-center">
              <p>Click the link below to start the subscription service</p>
              <a href="#" className="subscribe-link">Subscribe</a>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-bottom">
        <Container>
          <Row>
            <Col className="text-center">
              <p>© 2017 E-Banking. All rights reserved | Design by <a href="#">Akash</a></p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
