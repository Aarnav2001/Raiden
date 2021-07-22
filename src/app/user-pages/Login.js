/* eslint-disable */
import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {Button, Form} from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router';
import {signIn} from "../redux/actions/auth";

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const initialState = { email:"", password:""};
    const [formData,setformData] = useState(initialState);
    const handleChange = (e) => {
        setformData({...formData,[e.target.name]:e.target.value})
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signIn(formData,history))
    };
    return (
      <div>
        <div className="d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                  <img src={require("../../assets/images/logo.svg")} alt="logo" />
                </div>
                <h4>Hello! let's get started</h4>
                <h6 className="font-weight-light">Sign in to continue.</h6>
                <Form className="pt-5">
                  <Form.Group className="d-flex search-field">
                    <Form.Control name="email" type="email" placeholder="email" size="lg" className="h-auto" onChange={handleChange} />
                  </Form.Group>
                  <Form.Group className="d-flex search-field">
                    <Form.Control name="password" type="password" placeholder="Password" size="lg" className="h-auto" onChange={handleChange}/>
                  </Form.Group>
                  <div className="mt-3">
                    <Button type="submit" className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" onClick={handleSubmit} >SIGN IN</Button>
                  </div>
                  <div className="text-center mt-4 font-weight-light">
                    Don't have an account? <Link to="/user-pages/register-1" className="text-primary">Create</Link>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>  
      </div>
    )
}
// to={ this.state.authentication ? "/map" : "/user-pages/login-1"}
export default withRouter(Login)
/* eslint-disable */