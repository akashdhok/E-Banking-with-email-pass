import React from 'react'
import { Container, Row, Col, Card, Button, ProgressBar } from "react-bootstrap";
const About = () => {
    const teamMembers = [
        { name: 'Aaron Rossi', role: 'Bank CEO', img: './cro1.jpg' },
        { name: 'Marco Gomez', role: 'Co-Founder', img: './cro2.jpg' },
        { name: 'Brad Joe', role: 'Finance Expert', img: './cro3.webp' }
      ];
  return (

    <>
     <Container className="my-5">
        <Row>
          <Col md={12} className="text-center">
            <h2>We Are Here To Ease The Financial Obstacles</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic fuga
              sit illo modi aut aspernatur tempore laboriosam saepe dolores
              eveniet.
            </p>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={6} className="mb-3">
            <Card className="p-3">
              <Card.Body>
                <Card.Title>Professional Services</Card.Title>
                <Card.Text>
                  Mollitia placeat modi explicabo voluptatum vel unde sint error
                  placeat. Alias modi molestias blanditiis aspernatur? Ex iusto
                  nam ipsum aliquam.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-3">
            <Card className="p-3">
              <Card.Body>
                <Card.Title>Advice and Guides</Card.Title>
                <Card.Text>
                  Mollitia placeat modi explicabo voluptatum vel unde sint error
                  placeat. Alias modi molestias blanditiis aspernatur? Ex iusto
                  nam ipsum aliquam.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-3">
            <Card className="p-3">
              <Card.Body>
                <Card.Title>Live Support</Card.Title>
                <Card.Text>
                  Mollitia placeat modi explicabo voluptatum vel unde sint error
                  placeat. Alias modi molestias blanditiis aspernatur? Ex iusto
                  nam ipsum aliquam.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-3">
            <Card className="p-3">
              <Card.Body>
                <Card.Title>Super Growth</Card.Title>
                <Card.Text>
                  Mollitia placeat modi explicabo voluptatum vel unde sint error
                  placeat. Alias modi molestias blanditiis aspernatur? Ex iusto
                  nam ipsum aliquam.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <div className="text-white p-5" style={{ background: "#2b6cb0" }}>
        <Container>
          <Row>
            <Col md={6}>
              <h2>Easily grow your business save more money</h2>
              <p>A unique innovative company that will allow you to...</p>
            </Col>
            <Col md={6}>
              <div className="mb-3">
                <h5>Projects Done</h5>
                <ProgressBar now={100} label={"1000"} />
              </div>
              <div className="mb-3">
                <h5>Investments</h5>
                <ProgressBar now={75} label={"750"} />
              </div>
              <div className="mb-3">
                <h5>Awards Won</h5>
                <ProgressBar now={60} label={"600"} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="my-5">
      <Row className="align-items-center">
        <Col md={6}>
          <h2>You Can Achieve Your Financial Goals</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit inventore deleniti dolore sequi labore similique vitae.
          </p>
          <p>
            Cum quo maiores asperiores sequi error alias mollitia? Voluptatibus impedit aliquid pr Lorem ipsum dolor sit amet.
          </p>
          <Button variant="primary">Read More</Button>
        </Col>
        <Col md={6}>
          <img src="./logo.png" alt="Financial Growth" className="img-fluid rounded" />
        </Col>
      </Row>
    </Container>
    <Container className="my-5 text-center">
      <h3>Meet Our Awesome Team</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      <Row>
        {teamMembers.map((member, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="p-4 border-0 shadow">
              <Card.Img variant="top" src={member.img} className="rounded-circle w-50 mx-auto" />
              <Card.Body>
                <Card.Title>{member.name}</Card.Title>
                <Card.Text>{member.role}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </>
  )
}

export default About