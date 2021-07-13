import React, { useState } from 'react';
import {Button, Form, Modal, ModalBody, ProgressBar} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import {createProject} from "../../redux/actions/Project";
import {createSite} from "../../redux/actions/singlepro";
import {Link} from "react-router-dom";
import Project from "../project";
import Siteform from "./form";

const Siteinfo = ({id ,hide}) => {
    const siteinfo = useSelector((state) => state.site);
    const dispatch = useDispatch();
    const initialState = { name:"", des:""};
    const [formData,setformData] = useState(initialState);
    const handleChange = (e) => {
        setformData({...formData,[e.target.name]:e.target.value})
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        dispatch(createSite(id,formData))
        hide();
    };
    const [modal,setmodal]=useState(false);
    const [modal2,setmodal2]=useState(false);
    const switchmodal = () => {
        setmodal((prevState)=>!prevState)
    };
    const FirstHand= [
    {name:"Reference No",value: siteinfo.referenceNo},
    {name:"Offsite / Onsite/ Deemed Onsite",value: siteinfo.offsite},
    {name:"Address",value: siteinfo.address},
    {name:"City",value: siteinfo.city},
    {name:"District",value: siteinfo.district},
    {name:"State",value: siteinfo.state},
    {name:"Pincode",value: siteinfo.pincode},
    {name:"Name of Landlord",value: siteinfo.landlord},
    {name:"Contact no of Landlord",value: siteinfo.landlordNo},
    {name:"Correspondence address of Landlord",value: siteinfo.landlordAddress},
    {name:"Rent (INR)",value: siteinfo.rent},
    {name:"Advance Rental ( in months)",value: siteinfo.advanceRental},
    {name:"Shop Area",value: siteinfo.shopArea},
    {name:"Carpet Area",value: siteinfo.carpetArea},
    {name:"Width of the shop  ( from inside of walls )",value: siteinfo.width},
    {name:"Depth of the shop ( from inside of walls)",value: siteinfo.depth},
    {name:"Height of the sho",value: siteinfo.height},
    {name:"Availability of Shutter (Y/N)",value: siteinfo.availabilityOfShutter},
    {name:"Signage Size",value: siteinfo.signageSize},
    {name:"Space for AC ODU in nos",value: siteinfo.space},
    {name:"Length of V-sat wire",value: siteinfo.length},
    {name:"Power Availability",value: siteinfo.powerAvailability},
    ]
    const Area= [
     {name:"Metrol/Urban/Semi Urban/Rural",value: siteinfo.areaType},
     {name:"Type of Locality(Residential/Commercial/Others)",value: siteinfo.locality},
     {name:"Is the site in a lane/Main road/Highway/Junction",value: siteinfo.laneState},
     {name:"Area Population",value: siteinfo.areaPopulation},
     {name:"No of Household within 1 Km radius",value: siteinfo.noOfHousehold},
     {name:"Working population in the Area",value: siteinfo.workingPopulation},
     {name:"Is site visible from 50 meter distance from both side ( if not what is the visibility distance)",value: siteinfo.siteVisible},
     {name:"Duration & Frequency of Power failure in a Day",value: siteinfo.durationFrequencyOfPowerFailureInADay},
     {name:"Any New Development near our ATM (Any appartment / bldg/commercial etc) If yes, please mention",value: siteinfo.anyNewDevelopmentNearOurATM},
     {name:"Do you forsee if the site is under encroachment / legal issue (connect with neighbours)",value: siteinfo.doYouForseeIfTheSiteIsUnderEncroachment},
    ]
    const Branch=[
     {name:"How many ATMs within 500 mtrs ( both sides / all sides)",value: siteinfo.howManyATMsWithin500Mtrs},
     {name:"Mention Bank Name with No. of ATMs",value: siteinfo.mentionBankNameWithNoOfATMs},
     {name:"Average Transactions of other Bank ATMs within 500 mtrs (with ATM ID & share Txn Slip)",value: siteinfo.averageTransactionsOfOtherBankATMsWithin500mtrs},
     {name:"Distance of nearest other bank ATM from this site (Name the bank)",value: siteinfo.distanceOfNearestOtherBankATMFromThisSite},
     {name:"How many ATMs within 500 mtrs deployed by CMS Infosystems Ltd",value: siteinfo.howManyATMsWithin500MtrsDeployedByCMSInfosystemsLtd},
     {name:"Name of the bank with site ID & ATM ID (if applicable)",value: siteinfo.nameOfTheBankWithSiteIDATMID},
     {name:"How many Bank branches within 500 mtrs(please mention Bank Name)",value: siteinfo.howManyBankBranchesWithin500mtrs},
     {name:"Distance of the nearest Branch from this site(for the Bank we are Deploying)",value: siteinfo.distanceOfTheNearestBranchFromThisSite},
     {name:"Is there an Onsite ATM attached to nearest Branch",value: siteinfo.isThereAnOnsiteATMAttachedToNearestBranch},
     {name:"If Yes, Average Transaction of Onsite ATM(please share ATM ID)",value: siteinfo.averageTransactionOfOnsiteATM},
     {name:"Number of SB A/c",value: siteinfo.numberOfSBAc},
     {name:"Number of Debit Card Base",value: siteinfo.numberOfDebitCardBase},
     {name:"Expected Transactions as per Field Officer",value: siteinfo.expectedTransactionsAsPerFieldOfficer},
    ]
    const CRA =[
    {name:"CRA Name",value: siteinfo.cRAName},
    {name:"Nodal Branch Name, Address with SOL ID",value: siteinfo.nodalBranchNameAddressWithSOLID},
    {name:"Distance from ATM to Nodal Branch",value: siteinfo.distanceFromATMToNodalBranch},
    {name:"Loading Frequency",value: siteinfo.loadingFrequency},
    ]
    return (
        <div>
            <Modal show={modal} onHide={() => setmodal(false)} aria-labelledby="modal-label">
                <ModalBody>
                    <div>
                        <Siteform hide={switchmodal}/>
                    </div>
                </ModalBody>
            </Modal>
                <div className="row">
                    <div className="col-lg-12 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Hoverable Table</h4>
                                <p className="card-description"> Add className <code>.table-hover</code>
                                </p>
                                <button type="button" className="btn btn-secondary btn-rounded btn-icon btn-lg" onClick={switchmodal}>
                                    <i className="mdi mdi-plus-circle-outline"/>
                                </button>
                                <div className="table-responsive my-2">
                                    <table className="table table-hover">
                                        <thead>
                                        <tr>
                                            <th><h4>First Hand Information</h4></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {FirstHand.map((field) => (
                                            <tr>
                                                <td>{field.name}</td>
                                                <td className="text-danger"> {field.value} </td>
                                                <td></td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="table-responsive my-2">
                                    <table className="table table-hover">
                                        <thead>
                                        <tr>
                                            <th><h4>Area Survey</h4></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {Area.map((field) => (
                                            <tr>
                                                <td>{field.name}</td>
                                                <td className="text-danger"> {field.value} </td>
                                                <td></td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="table-responsive my-2">
                                    <table className="table table-hover">
                                        <thead>
                                        <tr>
                                            <th><h4>Branch/ATM Survey</h4></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {Branch.map((field) => (
                                            <tr>
                                                <td>{field.name}</td>
                                                <td className="text-danger"> {field.value} </td>
                                                <td></td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="table-responsive my-2">
                                    <table className="table table-hover">
                                        <thead>
                                        <tr>
                                            <th><h4>CRA</h4></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {CRA.map((field) => (
                                            <tr>
                                                <td>{field.name}</td>
                                                <td className="text-danger"> {field.value} </td>
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