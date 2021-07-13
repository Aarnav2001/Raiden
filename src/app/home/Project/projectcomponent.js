import React, {Component, useState} from 'react'
import {Button, Modal, ModalBody, ProgressBar} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import Newform from "./newform";
import {getSite} from "../../redux/actions/site";
import {getsinglepro} from "../../redux/actions/singlepro";
import Siteinfo from "../Site/Siteinfo";

const ProjectCom = () => {
    const project = useSelector((state) => state.singlepro);
    const [modal,setmodal]=useState(false);
    const switchmodal = () => {
        setmodal((prevState)=>!prevState)
    };
    const [Siteinfoid,setSiteinfoid]=useState({show: false,id: ""});
    const switchSiteinfoid = (siteid) => {
        setSiteinfoid((prevState)=>
        {
            return {show: !prevState.show, id: siteid}
        });
    };
    const Dispatcher = () => {
        const dispatch = useDispatch();
        dispatch(getSite(Siteinfoid.id));
        return null;
    }
    let Site = <div>no sites assigned</div>
    if(project.sites){
         Site = <div>
             <h5>Sites:</h5>
             <div className="d-flex">
            {
                project["sites"].map((site) => (
                    <div className="card m-2">
                        <div className="card-body" onClick={()=>switchSiteinfoid(site.info)}>
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
                <Dispatcher/>
                {Siteinfoid.show ? <Siteinfo/>:""}
            </div>
        </div>
    )
}

export default ProjectCom
