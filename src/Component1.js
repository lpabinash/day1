import * as React from "react";
// import {useState} from 'react';
import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
// import {Link} from 'react-router-dom';
// import Headers from "./Header";
import classes from './Comp.module.css'

export default function Page1() {
  // const [password]
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <div className={classes.mainDiv}>
        <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Label>First Name</Form.Label>
        <Form.Control name="First Name" ref={register} placeholder="First name" required />
        <Form.Label>Last Name</Form.Label>
        <Form.Control name="Last Name" ref={register} placeholder="Last name" required/>
        <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" ref={register} type="email" placeholder="Enter email"required />
        <Form.Text className="text-muted">
            We'll never share your email with anyone else.
        </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" ref={register} type="password" placeholder="Password" required/>
        </Form.Group>
       
        {/* <Button variant="primary" type="submit">
        <i class="fas fa-arrow-right"></i>
        <Link className={classes.btn}  to='/det1'>Address</Link>
        </Button> */}
        </Form>
        </div>
  );
}
