import React, {useState} from 'react'
import {Modal, ModalBody} from "react-bootstrap";
import Newform from "./newform";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import Project from "../home/project";

const Newcomponent = () =>{
    const [modal,setmodal]=useState(false);
    const [modal2,setmodal2]=useState(false);
    const switchmodal = () => {
        setmodal((prevState)=>!prevState)
    };
    const projec = useSelector((state) => state.project).filter((pro) => pro.status);
    const projects = projec.filter((pro) => pro.status.status === "new");
    return (
            <div>
                <div className="page-header">
                    <h3 className="page-title"> New Projects </h3>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                        </ol>
                    </nav>
                </div>
                <div className="row">
                    {projects.map((project) => (
                            <Project project={project}/>
                    ))}
                </div>
            </div>
        )
}

export default Newcomponent