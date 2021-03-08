import * as React from "react";
// import {useState} from 'react';
import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
// import {Link} from 'react-router-dom';
// import Headers from "./Header";
import classes from './Comp.module.css'

export default function Page2() {
  // const [password]
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <div className={classes.mainDiv}>
        <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Label>Address1</Form.Label>
        <Form.Control name="Address1" ref={register} placeholder="Address1" required />
        <Form.Label>Address2</Form.Label>
        <Form.Control name="Address2" ref={register} placeholder="Address2" required/>
       
       
        {/* <Button variant="primary" type="submit">
        <i class="fas fa-arrow-right"></i>
        <Link className={classes.btn}  to='/det1'>Address</Link>
        </Button> */}
        </Form>
        </div>
  );
}
