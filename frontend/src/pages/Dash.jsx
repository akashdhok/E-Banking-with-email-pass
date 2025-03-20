import React, { useEffect } from 'react'
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import {  Row, Col, Card } from "react-bootstrap";
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
const Dash = () => {
    let username = localStorage.getItem("username")
    let email = localStorage.getItem("email")
const navigate = useNavigate()

    const logout = ()=>{
        navigate("/login")
        localStorage.clear()
       
    }
    useEffect(()=>{
        if(!localStorage.getItem("email"))
            {
                navigate("/login")
            }
    },[])
  return (
    <>
  <Navbar expand="lg" bg="light" className="bg-body-tertiary">
    <Container fluid>
      <Navbar.Toggle aria-controls="navbarSupportedContent" />
      <Navbar.Brand href="#">
      <div id='logoimg'>
        <img src="./logo.png" alt="" height="40px" /> <span><h1>Banking</h1></span>
    </div>
      </Navbar.Brand>
      <Navbar.Collapse id="navbarSupportedContent">
        <Nav className="me-auto">
          <Nav.Link as={Link}  to="balanceinquiry">Balance Inquiry</Nav.Link>
          <Nav.Link as={Link} to="accountsettlement" >Account Statement</Nav.Link>
          <Nav.Link as={Link} to="deposit">Deposit Amount</Nav.Link>
          <Nav.Link as={Link} to="withdraw">Withdrawal Amount</Nav.Link>
          <Nav.Link as={Link} to="reset">Reset Password</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <div className="d-flex align-items-center">
        <NavDropdown
          title={
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
              className="rounded-circle"
              height="30"
              alt="User Avatar"
              loading="lazy"
            />
          }
          align="end"
        >
          <NavDropdown.Item href="#" onClick={logout}>Logout</NavDropdown.Item>
        </NavDropdown>
      </div>
    </Container>
  </Navbar>
  <Container className="mt-3">
    <Row className="justify-content-center">
      <Col md={8} lg={6}>
        <Card className="shadow-lg text-center p-4 border-0 rounded-4">
          <Card.Body>
            <h6 className="fw-bold text-primary">Welcome, {username}!</h6>
            <p className="text-muted fs-9">Your email is {email}</p>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>

<Outlet/>
<Footer/>
    </>
  )
}

export default Dash