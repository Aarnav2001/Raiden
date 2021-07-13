import React, {Component, useState} from 'react'
import {Button, Modal, ModalBody, ProgressBar} from 'react-bootstrap';
import {useSelector} from "react-redux";
import Newform from "./newform";
import {Link} from "react-router-dom";
import Project from "../project";

const ProjectCom = () => {
    const project = useSelector((state) => state.singlepro);
    const [modal,setmodal]=useState(false);
    const switchmodal = () => {
        setmodal((prevState)=>!prevState)
    };
    const [Siteinfo,setSiteinfo]=useState({show: false,id: ""});
    const switchSiteinfo = (siteid) => {
        setSiteinfo({show: true,id: siteid})
    };
    let Site = <div>no sites assigned</div>
    if(project.sites){
         Site = <div>
             <h5>Sites:</h5>
             <div className="d-flex">
            {
                project["sites"].map((site) => (
                    <div className="card m-2">
                        <div className="card-body" onClick={switchSiteinfo}>
                            <p>{site.name}</p>
                            <p>{site.des}</p>
                        </div>
                    </div>
                ))}
             </div>
        </div>
    }
    return (
        <div>
            <Modal show={modal} onHide={() => setmodal(false)} aria-labelledby="modal-label">
                <ModalBody>
                    <div>
                        <Newform hide={switchmodal} id={project.post ? project.post._id:""}/>
                    </div>
                </ModalBody>
            </Modal>
            <div className="col-md-10 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h3>{project.post ? project.post.name:""}</h3>
                        <h4>{project.post ? project.post.des:""}</h4>
                        <div className="d-xl-flex flex-column flex-lg-row">
                            <h4>{project.post ? project.post.atm_name:""} ATM</h4>
                            <h4>{project.post ? project.post.status.status:""}</h4>
                            <Button type="button" className="btn btn-secondary btn-rounded btn-icon btn-lg" onClick={switchmodal}>
                                Add Site
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            {Site}
            <div>
                {Siteinfo.show ? "hi":"ho"}
            </div>
        </div>
    )
}

export default ProjectCom
