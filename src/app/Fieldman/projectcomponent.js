import React, {Component, useState} from 'react'
import {Button, Form, ProgressBar} from 'react-bootstrap';
import Projectinfo from "./projectinfo";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router";
import {signUp} from "../redux/actions/auth";
import {createfieldman} from "../redux/actions/fieldman";
const ProjectCom = () => {
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
        dispatch(createfieldman(formData))
    };
    const fieldmen = useSelector((state) => state.fieldman);
        return (
            <div>
                <div className="page-header">
                    <h3 className="page-title"> Fieldmen </h3>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                        </ol>
                    </nav>
                </div>
                <h4>new:</h4>
                <div className="d-flex m-3 align-items-center justify-content-center">
                    <div className="card">
                        <div className="card-body">
                            <h3>Add A Fieldman Account</h3>
                            <Form className="pt-3">
                            <Form.Group className="d-flex px-4">
                                <label htmlFor="projectname" className="col-sm-4 col-form-label">UserName</label>
                                <div className="col-sm-8">
                                    <Form.Control name="username" type="text" placeholder="UserName" className="form-control"
                                                  onChange={handleChange} id="projectname"/>
                                </div>
                            </Form.Group>
                            <Form.Group className="d-flex px-4">
                                <label htmlFor="projectdes" className="col-sm-4 col-form-label">Email</label>
                                <div className="col-sm-8">
                                    <Form.Control name="email" type="text" placeholder="Email"
                                                  className="form-control"
                                                  onChange={handleChange} id="projectdes"/>
                                </div>
                            </Form.Group>
                            <Form.Group className="d-flex px-4">
                                <label htmlFor="projectatmname" className="col-sm-4 col-form-label">Password</label>
                                <div className="col-sm-8">
                                    <Form.Control name="password" type="password" placeholder="Password"
                                                  className="form-control" onChange={handleChange} id="projectatmname"/>
                                </div>
                            </Form.Group>
                                <Form.Group className="d-flex px-4">
                                    <label htmlFor="projectatmname" className="col-sm-4 col-form-label">Confirm Password</label>
                                    <div className="col-sm-8">
                                        <Form.Control name="confirmpassword" type="password" placeholder="Confirm Password"
                                                      className="form-control" onChange={handleChange} id="projectatmname"/>
                                    </div>
                                </Form.Group>
                            <div className="mt-3">
                                <Button type="submit"
                                        className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                                        onClick={handleSubmit}>Create</Button>
                            </div>
                        </Form></div></div>
                </div>
                <div className="col-sm-8">
                    <h4>existing :</h4>
                    <div>
                        <div className="d-flex justify-content-between">
                            {fieldmen.map((project) => (
                                <Projectinfo project={project}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default ProjectCom
