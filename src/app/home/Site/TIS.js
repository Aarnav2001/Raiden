import React, { useState } from 'react';
import {Button, Dropdown, Form, Modal, ModalBody, ProgressBar} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import Siteform from "./TISform";
import {Link} from "react-router-dom";
import Project from "../project";
import {getSite} from "../../redux/actions/site";
import {addfieldman, addTISfieldman} from "../../redux/actions/sitefieldman";

const Siteinfo = () => {
    const TISS = useSelector((state) => state.TIS);
    const feildmen= useSelector((state) => state.fieldman);
    const [modal,setmodal]=useState(false);
    const[fieldmanid,setfieldmanid]=useState(TISS.fieldman);
    console.log(fieldmanid);
    const switchmodal = () => {
        setmodal((prevState)=>!prevState)
    };
    const Dispatcher = () => {
        const dispatch = useDispatch();
        const datafield={ fieldmanid:fieldmanid , siteid:TISS._id };
        dispatch(addTISfieldman(datafield));
        return null;
    }
    const Fieldmanusername = () => {
        if(!fieldmanid)
        {
            setfieldmanid(TISS.fieldman)
        }
        let username = "";
        feildmen.map((man) => {

            if (man._id === fieldmanid){
                console.log(man.username);
                username = man.username;
            }
        })
        return username;
    }
    const FirstHand= [
        {name:"Site Code",value: TISS.siteCode},
        {name:"LOI Status",value: TISS.lOIStatus},
        {name:"Old ATMID",value: TISS.oldATMID},
        {name:"Site Type (Offsite / Onsite)",value: TISS.siteType},
        {name:"Location",value: TISS.location},
        {name:"Address",value: TISS.address},
        {name:"Pin code",value: TISS.pinCode},
        {name:"City",value: TISS.city},
        {name:"District",value: TISS.district},
        {name:"State",value: TISS.state},
        {name:"Installation Type(1st ATM/2nd ATM)",value: TISS.installationType},
        {name:"Category(Metro/Urban/S-Urban/Rural)",value: TISS.category},
        {name:"Bank's ZO",value: TISS.bankZO},
        {name:"Land Lord Name",value: TISS.landLordName},
        {name:"Contact No.",value: TISS.contactNo},
        {name:"Carpet Area",value: TISS.carpetArea},
        {name:"Field Officer(F.O)",value: TISS.fieldOfficer},
        {name:"F.O. Contact No.",value: TISS.fOContactNo},
        {name:"PO No",value: TISS.pONo},
        {name:"PO Date",value: TISS.pODate},
        {name:"Tis vendor",value: TISS.tisVendor},
        {name:"TIS Request Date",value: TISS.tISRequestDate},
        {name:"SFR Date",value: TISS.sFRDate},
        {name:"Site Status",value: TISS.siteStatus},
        {name:"Start / Possesion Date",value: TISS.possesionDate},
        {name:"Completion Date",value: TISS.completionDate},
        {name:"Make",value: TISS.cDmake},
        {name:"SR No",value: TISS.cDsRNo},
        {name:"CD Order Date",value: TISS.cDOrderDate},
        {name:"CD Delivery Date",value: TISS.cDDeliveryDate},
        {name:"Tech Live Date",value: TISS.techLiveDate},
        {name:"Cash Live Date",value: TISS.cashLiveDate},
        {name:"Grouting",value: TISS.grouting},
        {name:"PO No",value: TISS.uPspONo},
        {name:"PO Date",value: TISS.uPspODate},
        {name:"Make",value: TISS.uPsmake},
        {name:"SR No",value: TISS.uPsSRNo},
        {name:"Order Date",value: TISS.uPsOrderDate},
        {name:"Delivery Date",value: TISS.uPsDeliveryDate},
        {name:"Installation Date",value: TISS.uPsinstallationDate},
        {name:"PO No",value: TISS.vSatPONo},
        {name:"PO Date",value: TISS.vSatpODate},
        {name:"Make",value: TISS.vSatmake},
        {name:"Code",value: TISS.vSatCode},
        {name:"Order Date",value: TISS.vSatOrderDate},
        {name:"Delivery Date",value: TISS.vSatDeliveryDate},
        {name:"Installation Date",value: TISS.vSatinstallationDate},
        {name:"PO No",value: TISS.aCPONo},
        {name:"PO Date	Make",value: TISS.aCpODate},
        {name:"Make",value: TISS.aCmake},
        {name:"Order Date",value: TISS.aCOrderDate},
        {name:"Delivery Date",value: TISS.aCDeliveryDate},
        {name:"Installation Date",value: TISS.aCinstallationDate},
        {name:"PO No",value: TISS.eSureillancepONo},
        {name:"PO Date	Make",value: TISS.eSureillancepODate},
        {name:"PO Make",value: TISS.eSureillancemake},
        {name:"Order Date",value: TISS.eSureillanceOrderDate},
        {name:"Live Date",value: TISS.eSureillanceLiveDate},
        {name:"PO No",value: TISS.signagepONo},
        {name:"PO Date",value: TISS.signagepODate},
        {name:" Vendor",value: TISS.signageVendor},
        {name:"Order Date",value: TISS.signageOrderDate},
        {name:"Insstallation date",value: TISS.signageinstallationDate},
        {name:"Vendor",value: TISS.distributionVendor},
        {name:"Order Date",value: TISS.distributionOrderDate},
        {name:"Delivery Date",value: TISS.distributionDeliveryDate},
        {name:"Existing ATM to be replaced",value: TISS.existingATMToBeReplaced},
        {name:"Space available in ATM lobby to deliver CMS ATM without removing existing CD",value: TISS.spaceAvailableInATMLobbyToDeliverCMSATMWithoutRemovingExistingCD},
        {name:"Backroom / Cabinate in ATM Lobby",value: TISS.backroomInATMLobby},
        {name:"Existing UPS owned by Bank or MSP",value: TISS.existingUPSOwnedByBank},
        {name:" Space available to install CMS UPS in backroom without removing existing UPS",value: TISS.spaceAvailableToInstallCMSUPS},
        {name:"Availability of Power points for UPS Input/Output ",value: TISS.availabilityOfPowerPoints},
        {name:"Proper Earthling available",value: TISS.properEarthlingAvailable},
        {name:" IO port -  Network point available for CMS ATM Installation",value: TISS.iOPort},
        {name:"Whether Bank is ready for ATM Buyback(Yes/No)",value: TISS.whetherBankIsReadyForATMBuyback},
    {name:"Refurbishment ( Annexure Attached )",value: TISS.refurbishment},
    ]
    return (
        <div>
            <Modal show={modal} onHide={() => setmodal(false)} aria-labelledby="modal-label">
                <ModalBody>
                    <div>
                        <Siteform hide={switchmodal} siteinfo={TISS}/>
                    </div>
                </ModalBody>
            </Modal>
            <div className="row">
                <div className="col-lg-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <h2 className="card-title">TIS TRACKER</h2>
                                </div>
                                <button type="button" className="btn btn-secondary btn-rounded btn-icon btn-sm my-3"
                                        onClick={switchmodal}>
                                    <i className=" mdi mdi-pencil"/>
                                </button>
                            </div>
                            <Dispatcher/>
                            <div className="d-flex mt-3">
                                <h5>FIELDMAN:</h5>
                                <Dropdown>
                                    <Dropdown.Toggle variant="btn btn-outline-info" id="dropdownMenuOutlineButton6">
                                        <Fieldmanusername/>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {feildmen.map((man) => (
                                            <Dropdown.Item
                                                onClick={() => setfieldmanid(man._id)}>{man.username}</Dropdown.Item>
                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown></div>
                            <div className="table-responsive my-2">
                                <table className="table table-hover">
                                    <tbody className="mt-2">
                                    {FirstHand.map((field) => (
                                        <tr>
                                            <td>{field.name}</td>
                                            <td> {field.value} </td>
                                            <td></td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Siteinfo