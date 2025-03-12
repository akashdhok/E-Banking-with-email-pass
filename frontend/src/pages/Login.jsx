import React, { useState } from 'react'
import BASE_URL from '../config/config'
import axios from 'axios'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Outlet, useNavigate } from 'react-router-dom';

const Login = () => {
  const[input , setInput] = useState({})
  const navigate  = useNavigate()
  const changeHandler = (e)=>{
    let{name , value} = e.target;
    setInput({
      ...input,
      [name] : value
      
    })
  }
  const submitHandler = async(e)=>{
    e.preventDefault()
    try {
    let api = `${BASE_URL}/customer/login`
    let res = await axios.post(api , input)
    alert("logged in successfully")
    localStorage.setItem("username" , res.data.firstname+" "+res.data.lastname)
    localStorage.setItem("userid" , res.data._id)
    localStorage.setItem("email" , res.data.email)

    navigate('/dash')
      
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
    
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <h2 className="text-center mb-4">Login Form</h2>
          <Form>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" name='email' onChange={changeHandler}  />
            </Form.Group>

            <Form.Group className="mb-3" controlId="mobile">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter your password" name='password'  onChange={changeHandler} />
            </Form.Group>

            <div className="d-grid">
              <Button variant="primary" onClick={submitHandler}>Submit</Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
    <Outlet/>
    </>
  )
}

export default Login