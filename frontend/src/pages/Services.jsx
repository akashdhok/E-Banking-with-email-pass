import React from 'react'
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
const Services = () => {
  return (
    <>
     <Container className="py-5">
      <Row>
        <Col md={12}>
          <h2 className="fw-bold">Get In Touch</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic fuga
            sit illo modi aut aspernatur tempore laboriosam saepe dolores
            eveniet.
          </p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={4} className="d-flex align-items-center">
          <FaPhone className="me-2 text-primary" />
          <div>
            <h6>Call Us</h6>
            <p>+123 45 67 89</p>
          </div>
        </Col>
        <Col md={4} className="d-flex align-items-center">
          <FaEnvelope className="me-2 text-primary" />
          <div>
            <h6>Email Us</h6>
            <p>example@mail.com</p>
          </div>
        </Col>
        <Col md={4} className="d-flex align-items-center">
          <FaMapMarkerAlt className="me-2 text-primary" />
          <div>
            <h6>Address</h6>
            <p>California, #32841 block, #221DRS 75 West Rock, UK.</p>
          </div>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Subject" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control as="textarea" rows={4} placeholder="Message" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </Form>
        </Col>

        <Col md={6}>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10000!2d-0.1257!3d51.5085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b33f9d6b5f9%3A0x50b3b6f42b8b9a2c!2sLondon%2C%20UK!5e0!3m2!1sen!2s!4v1614956348972!5m2!1sen!2s"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Services