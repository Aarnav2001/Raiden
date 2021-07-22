import React, {useState} from 'react'
import {Modal, ModalBody} from "react-bootstrap";
import Newform from "./newform";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import Project from "../home/project";


const Newcomponent = () =>{
    return (
            <div className="d-flex justify-content-center align-items-center">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="mt-5 ml-5">
                                <h4 className="card-title">add new Project</h4>
                                <p className="card-description"> Add new project with already known location
                                </p>
                            </div>
                            <Newform/>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Newcomponent