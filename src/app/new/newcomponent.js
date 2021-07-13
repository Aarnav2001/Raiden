import React, {useState} from 'react'
import {Modal, ModalBody} from "react-bootstrap";
import Newform from "./newform";

const Newcomponent = () =>{
    const [modal,setmodal]=useState(false);
    const [modal2,setmodal2]=useState(false);
    const switchmodal = () => {
        setmodal((prevState)=>!prevState)
    };
        return (
            <div>
                <Modal show={modal} onHide={() => setmodal(false)} aria-labelledby="modal-label">
                    <ModalBody>
                        <div>
                            <Newform hide={switchmodal}/>
                        </div>
                    </ModalBody>
                </Modal>
                <div className="card m-3">
                    <div className="card-body">
                        <h4 className="card-title">add new without ml</h4>
                        <p className="card-description"> Add new project with already known location
                        </p>
                        <button type="button" className="btn btn-secondary btn-rounded btn-icon btn-lg" onClick={switchmodal}>
                            <i className="mdi mdi-plus-circle-outline"/>
                        </button>
                    </div>
                </div>
                <div className="card m-3">
                    <div className="card-body">
                        <h4 className="card-title">add new with ml</h4>
                        <p className="card-description"> Add new project with new location
                        </p>
                        <button type="button" className="btn btn-secondary btn-rounded btn-icon btn-lg">
                            <i className="mdi mdi-plus-circle-outline"/>
                        </button>
                    </div>
                </div>
            </div>
        )
}

export default Newcomponent