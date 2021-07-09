import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Button} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router';
import { signUp} from "../redux/actions/auth";

const Register = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const initialState = { username:"",email:"", password:"", confirmpassword:""};
  const [formData,setformData] = useState(initialState);
  const handleChange = (e) => {
    setformData({...formData,[e.target.name]:e.target.value})
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(signUp(formData,history))
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
                <h4>New here?</h4>
                <h6 className="font-weight-light">Signing up is easy. It only takes a few steps</h6>
                <form className="pt-3">
                  <div className="form-group">
                    <input type="text" className="form-control form-control-lg" name="username" id="exampleInputUsername1" placeholder="Username" onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control form-control-lg" name="email" id="exampleInputEmail1" placeholder="Email" onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control form-control-lg" name="Password" id="exampleInputPassword1" placeholder="Password" onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control form-control-lg" name="confirmPassword" id="exampleInputPassword1" placeholder="confirm Password" onChange={handleChange}/>
                  </div>
                  <div className="mt-3">
                    <Button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" onClick={handleSubmit}>SIGN UP</Button>
                  </div>
                  <div className="text-center mt-4 font-weight-light">
                    Already have an account? <Link to="/user-pages/login" className="text-primary">Login</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Register
