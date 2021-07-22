import React, {Component, useState} from 'react'
import {Button, Modal, ModalBody, ProgressBar} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import Newform from "./newform";
import {getSite} from "../../redux/actions/site";
import {confirmSite,done, getsinglepro} from "../../redux/actions/singlepro";
import Siteinfo from "../Site/Siteinfo";
import {fetchfieldmen} from "../../redux/actions/fieldman";
import TIS from "../Site/TIS";
import {getTIS} from "../../redux/actions/TIS";
import cogoToast from "cogo-toast";


const Confirm = ({id1, id2}) => {
    const dispatch = useDispatch();
    return (
        <Button type="button" className="btn btn-secondary btn-rounded btn-icon btn-lg" onClick={()=> {
            dispatch(confirmSite(id1, id2))
            cogoToast.success("Site selected successfully")
        }}>
        Confirm Site
    </Button>
    );
}

const Done = ({id,status}) => {
    const dispatch = useDispatch();
    return (
        <div>
            {(status.status === "Done")?"":
                <Button type="button" className="btn btn-secondary btn-rounded btn-icon btn-lg"
                                                   onClick={() => {
                                                       dispatch(done(id))
                                                       cogoToast.success("Project completed successfully")
                                                   }}>
                DONE
            </Button>}
        </div>
    );
}

const ProjectCom = () => {
    const project = useSelector((state) => state.singlepro);
    const [modal,setmodal]=useState(false);
    const dispatch = useDispatch();
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
    let finalsite= {};
    console.log(finalsite)
    if(project.finalsite){
        finalsite = project["sites"].filter((data)=>data._id===project.finalsite)
        console.log("hi")
    }

    const Dispatcher = () => {
        dispatch(getSite(Siteinfoid.id));
        if(project.post)
            dispatch(getTIS(project.post.TIS));
        dispatch(fetchfieldmen());
        return null;
    }
    let Site = <div>no sites assigned</div>
    if(project.sites){
         Site = <div>
             <h5>Sites:</h5>
             {(!project.post.finalsite)?
                 <div className="d-flex">
                 {
                     project["sites"].map((site) => (
                         <div className="card m-2">
                             <div className="card-body" onClick={()=>switchSiteinfoid(site.info,site.name,site.des,site.fieldman,site._id)}>
                                 <h4 className="mb-3">{site.name}</h4>
                                 <p>{site.des}</p>
                             </div>
                         </div>
                     ))}
             </div>
                 :
                 <div className="d-flex">
                     {
                         project["sites"].map((site) => (
                             (site._id === project.post.finalsite)?
                             <div className="card m-2">
                                 <div className="card-body" onClick={()=>switchSiteinfoid(site.info,site.name,site.des,site.fieldman,site._id)}>
                                     <h4 className="mb-3">{site.name}</h4>
                                     <p>{site.des}</p>
                                 </div>
                             </div>:""
                         ))}
             </div>}

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
                        <div className="d-flex">
                            <h3 className="col-sm-2">Name:</h3>
                            <h3>{project.post ? project.post.name : ""}</h3>
                        </div>
                        <div className="d-flex">
                            <h4 className="col-sm-2 pr-0">Description:</h4>
                            <h4>{project.post ? project.post.des : ""}</h4>
                        </div>
                        <div className="d-flex justify-content-between ml-3">
                            <div>
                                <h4>{project.post ? project.post.atm_name : ""} ATM</h4>
                                <h4>{project.post ? project.post.status.status : ""}(status)</h4>
                            </div>
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
                {Siteinfoid.show ?
                    <div>
                        <Siteinfo sitename={Siteinfoid.name} sitedes={Siteinfoid.des} siteid={Siteinfoid.siteid}
                                 sitefieldid={Siteinfoid.sitefieldid}/>
                        {(!project.post.finalsite) ? <Confirm id1={Siteinfoid.siteid} id2={project.post._id}/> : ""}
                    </div>
                    :""}
                {project.post?(project.post.finalsite) ?
                    <div>
                        <TIS/>
                        <Done id={project.post._id} status={project.post.status}/>
                    </div> : "":""}
            </div>
        </div>
    )
}

export default ProjectCom
