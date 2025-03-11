import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import BASE_URL from '../config/config';
import axios from "axios"
const Registration = () => {
  const[input , setInput] = useState({})
const changeHandler = (e)=>{
  let{name , value} = e.target;
  setInput({
    ...input,
    [name] : value
    
  })
}
console.log(input)
const submitHandler = async(e)=>{
  e.preventDefault()
    let api = `${BASE_URL}/customer/registration`
  try {
  
    const res = await axios.post(api , input)
    console.log(res.data)
    alert("User Registered Successfully..!!")
  } catch (error) {
    console.log(error)
  }
}

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <h2 className="text-center mb-4">Registration Form</h2>
          <Form>
            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your first name" name='firstname' onChange={changeHandler}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your last name" name='lastname'  onChange={changeHandler} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" name='email' onChange={changeHandler}  />
            </Form.Group>

            <Form.Group className="mb-3" controlId="mobile">
              <Form.Label>Mobile</Form.Label>
              <Form.Control type="text" placeholder="Enter your mobile number" name='mobile'  onChange={changeHandler} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Enter your address" name='address' onChange={changeHandler}  />
            </Form.Group>

            <Form.Group className="mb-3" controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="Enter your city" name='city'  onChange={changeHandler} />
            </Form.Group>

            <div className="d-grid">
              <Button variant="primary" onClick={submitHandler}>Submit</Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Registration;