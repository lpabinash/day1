import * as React from "react";
// import {useState} from 'react';
import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
// import {Link} from 'react-router-dom';
// import Headers from "./Header";
import classes from './Comp.module.css'

export default function Page3() {
  // const [password]
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <div className={classes.mainDiv}>
        <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Label>Company Name</Form.Label>
        <Form.Control name="Company Name" ref={register} placeholder="Company name" required />
        <Form.Label>Company Address</Form.Label>
        <Form.Control name="Company Address" ref={register} placeholder="Company Address" required/>
      
       
        {/* <Button variant="primary" type="submit">
        <i class="fas fa-arrow-right"></i>
        <Link className={classes.btn}  to='/det1'>Address</Link>
        </Button> */}
        </Form>
        </div>
  );
}
