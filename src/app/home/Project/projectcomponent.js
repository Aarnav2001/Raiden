import React, {Component, useState} from 'react'
import {Button, Modal, ModalBody, ProgressBar} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import Newform from "./newform";
import {getSite} from "../../redux/actions/site";
import {getsinglepro} from "../../redux/actions/singlepro";
import Siteinfo from "../Site/Siteinfo";
import {fetchfieldmen} from "../../redux/actions/fieldman";

const ProjectCom = () => {
    const project = useSelector((state) => state.singlepro);
    const [modal,setmodal]=useState(false);
    const switchmodal = () => {
        setmodal((prevState)=>!prevState)
    };
    const [Siteinfoid,setSiteinfoid]=useState({show: false,id: "",name:"",des:"",sitefieldid:"",siteid:""});
    const switchSiteinfoid = (siteid,name,des,sitefieldid,id) => {
        setSiteinfoid((prevState)=>
        {
            return {show: !prevState.show, id: siteid, name: name, des: des,sitefieldid: sitefieldid, siteid: id}
        });
    };
    const Dispatcher = () => {
        const dispatch = useDispatch();
        dispatch(getSite(Siteinfoid.id));
        dispatch(fetchfieldmen())
        return null;
    }
    let Site = <div>no sites assigned</div>
    if(project.sites){
         Site = <div>
             <h5>Sites:</h5>
             <div className="d-flex">
            {
                project["sites"].reverse().map((site) => (
                    <div className="card m-2">
                        <div className="card-body" onClick={()=>switchSiteinfoid(site.info,site.name,site.des,site.fieldman,site._id)}>
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
                {Siteinfoid.show ? <Siteinfo sitename={Siteinfoid.name} sitedes={Siteinfoid.des} siteid={Siteinfoid.siteid} sitefieldid={Siteinfoid.sitefieldid}/>:""}
            </div>
        </div>
    )
}

export default ProjectCom
