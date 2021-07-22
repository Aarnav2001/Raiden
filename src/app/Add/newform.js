import React, { useState } from 'react';
import {Button, Form} from 'react-bootstrap';
import { useDispatch } from "react-redux";
import {createProject} from "../redux/actions/Project";
import cogoToast from "cogo-toast";

const Newform = () => {
    const dispatch = useDispatch();
    const initialState = { name:"", des:"",atm_name:""};
    const [formData,setformData] = useState(initialState);
    const handleChange = (e) => {
        setformData({...formData,[e.target.name]:e.target.value})
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        dispatch(createProject(formData))
        setformData(initialState)
        document.getElementById("create-course-form").reset();
        cogoToast.success("new project made successfully")
    };
    return (
        <div>
            <div className="auth-form-light text-left pb-5 px-4 px-sm-5">
                <h6 className="font-weight-light">fill in the details.</h6>
                <Form className="pt-3 py-5" id="create-course-form">
                    <Form.Group className="row">
                        <label htmlFor="projectname" className="col-sm-3 col-form-label">Name</label>
                        <div className="col-sm-9">
                            <Form.Control name="name" type="text" placeholder="Name" className="form-control" onChange={handleChange} id="projectname"/>
                        </div>
                    </Form.Group>
                    <Form.Group className="row">
                        <label htmlFor="projectdes" className="col-sm-3 col-form-label">Description</label>
                        <div className="col-sm-9">
                            <Form.Control name="des" type="text" placeholder="Description" className="form-control" onChange={handleChange} id="projectdes"/>
                        </div>
                    </Form.Group>
                    <Form.Group className="row">
                        <label htmlFor="projectatmname" className="col-sm-3 col-form-label">ATM Name</label>
                        <div className="col-sm-9">
                            <Form.Control name="atm_name" type="text" placeholder="ATM Name" className="form-control" onChange={handleChange} id="projectatmname"/>
                        </div>
                    </Form.Group>
                    <div className="mt-3">
                        <Button type="submit" className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" onClick={handleSubmit} >Create</Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}
export default Newform