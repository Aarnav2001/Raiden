import React, { useState } from 'react';
import {Button, Form} from 'react-bootstrap';
import { useDispatch } from "react-redux";
import {createProject} from "../redux/actions/Project";

const Form2 = () => {
    const c1 =0.00000854141809;
    const c2 =5.32929099;
    const c3 =3820.424430177769;
    const RMSE = 839.575204699446
    const dispatch = useDispatch();
    const initialState = { name:"", des:"",atm_name:""};
    const initialState2 = { population:"", number:"",prediction:""};
    const [formData,setformData] = useState(initialState);
    const [formData2,setformData2] = useState(initialState2);
    const handleChange2 = (e) => {
        setformData2({...formData2,[e.target.name]:e.target.value})
    };
    const handleChange = (e) => {
        setformData({...formData,[e.target.name]:e.target.value})
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        dispatch(createProject(formData))
        setformData(initialState)
    };
    return (
        <div>
            <div className="auth-form-light text-left pb-5 px-4 px-sm-5">
                <Form className="pt-3">
                    <Form.Group className="row">
                        <label htmlFor="projectname" className="col-sm-3 col-form-label">Population</label>
                        <div className="col-sm-9">
                            <Form.Control name="population" type="number" placeholder="Population" className="form-control" onChange={handleChange2} id="projectname"/>
                        </div>
                    </Form.Group>
                    <Form.Group className="row">
                        <label htmlFor="projectdes" className="col-sm-3 col-form-label">Number of ATMs</label>
                        <div className="col-sm-9">
                            <Form.Control name="number" type="number" placeholder="Number of ATMs" className="form-control" onChange={handleChange2} id="projectdes"/>
                        </div>
                    </Form.Group>
                    <Form.Group className="row">
                        <label htmlFor="projectatmname" className="col-sm-3 col-form-label">Average Monthly Transactions</label>
                        <div className="col-sm-9">
                            <Form.Control name="prediction" type="number" placeholder="Average Monthly Transactions" className="form-control" value=
                                {formData2.population? Math.round((c1*formData2.population+c2*formData2.number+c3) * 100) / 100 :""} id="projectatmname"/>
                        </div>
                    </Form.Group>
                    <Form.Group className="row">
                        <label htmlFor="projectatmname" className="col-sm-3 col-form-label">Maximum Average Monthly Transactions</label>
                        <div className="col-sm-9">
                            <Form.Control name="prediction" type="number" placeholder="Average Monthly Transactions" className="form-control" value=
                                {formData2.population? Math.round(((c1*formData2.population+c2*formData2.number+c3)+RMSE) * 100) / 100 :""} id="projectatmname"/>
                        </div>
                    </Form.Group>
                    <Form.Group className="row">
                        <label htmlFor="projectatmname" className="col-sm-3 col-form-label">Minimum Average Monthly Transactions</label>
                        <div className="col-sm-9">
                            <Form.Control name="prediction" type="number" placeholder="Average Monthly Transactions" className="form-control" value=
                                {formData2.population? Math.round(((c1*formData2.population+c2*formData2.number+c3)-RMSE) * 100) / 100 :""} id="projectatmname"/>
                        </div>
                    </Form.Group>
                </Form>
            </div>
        </div>
    )
}
export default Form2