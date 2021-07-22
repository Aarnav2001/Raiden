import React, {useState} from 'react'
import {Modal, ModalBody} from "react-bootstrap";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import Project from "../home/project";
import Form2 from "./form2";

const Newcomponent = () =>{
    return (
            <div className="d-flex justify-content-center align-items-center">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="mt-5 ml-5">
                            <h4 className="card-title">Project monthly transactions estimator</h4>
                            <p className="card-description"> estimate monthly Transactions with help of ML
                            </p>
                            </div>
                            <Form2/>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Newcomponent