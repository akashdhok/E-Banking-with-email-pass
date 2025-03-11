import React from "react";
import { Carousel, Container , Image , Row , Col } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Container fluid className="p-0">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid"
              src="./cro1.jpg"
              alt="Slide 1"
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid"
              src="./cro2.jpg"
              alt="Slide 2"
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid"
              src="./cro3.webp"
              alt="Slide 3"
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
          </Carousel.Item>
        </Carousel>
      </Container>
      <Container className="py-5">
      <Row className="align-items-center">
    
        <Col lg={6} className="text-center text-lg-start mb-4 mb-lg-0">
          <h1 className="fw-bold">
            What makes <Image src="./logo.png" alt="Logo" height="40" className="mx-2" />
            Banking Unique?
          </h1>
        </Col>

        <Col lg={6}>
          <p className="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget faucibus est. 
            Suspendisse auctor urna blandit ultricies maximus. Sed accumsan auctor lacus ac mattis. 
            Mauris at nibh purus. Nullam vulputate, urna id facilisis eleifend, nisl turpis suscipit augue, 
            eget tincidunt velit nunc ut lectus. Morbi rutrum ut risus sed hendrerit.
          </p>
        </Col>
      </Row>
    </Container>
    <main>
        <img src="./mainHome.png" alt="" width="100%" />
    </main>
    </>
  );
};

export default Home;
