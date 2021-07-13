import React, { useState } from 'react';
import {Button, Form} from 'react-bootstrap';
import { useDispatch } from "react-redux";
import {createProject} from "../../redux/actions/Project";
import {createSite} from "../../redux/actions/singlepro";
import {Link} from "react-router-dom";
import Project from "../project";

const Siteform = ({id ,hide}) => {
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
    const FirstHand= [
        {name:"Reference No",value:"referenceNo"},
        {name:"Offsite / Onsite/ Deemed Onsite",value:"offsite"},
        {name:"Address",value:"address"},
        {name:"City",value:"city"},
        {name:"District",value:"district"},
        {name:"State",value:"state"},
        {name:"Pincode",value:"pincode"},
        {name:"Name of Landlord",value:"landlord"},
        {name:"Contact no of Landlord",value:"landlordNo"},
        {name:"Correspondence address of Landlord",value:"landlordAddress"},
        {name:"Rent (INR)",value:"rent"},
        {name:"Advance Rental ( in months)",value:"advanceRental"},
        {name:"Shop Area",value:"shopArea"},
        {name:"Carpet Area",value:"carpetArea"},
        {name:"Width of the shop  ( from inside of walls )",value:"width"},
        {name:"Depth of the shop ( from inside of walls)",value:"depth"},
        {name:"Height of the sho",value:"height"},
        {name:"Availability of Shutter (Y/N)",value:"availabilityOfShutter"},
        {name:"Signage Size",value:"signageSize"},
        {name:"Space for AC ODU in nos",value:"space"},
        {name:"Length of V-sat wire",value:"length"},
        {name:"Power Availability",value:"powerAvailability"},
    ]
    const Area= [
        {name:"Metrol/Urban/Semi Urban/Rural",value:"areaType"},
        {name:"Type of Locality(Residential/Commercial/Others)",value:"locality"},
        {name:"Is the site in a lane/Main road/Highway/Junction",value:"laneState"},
        {name:"Area Population",value:"areaPopulation"},
        {name:"No of Household within 1 Km radius",value:"noOfHousehold"},
        {name:"Working population in the Area",value:"workingPopulation"},
        {name:"Is site visible from 50 meter distance from both side ( if not what is the visibility distance)",value:"siteVisible"},
        {name:"Duration & Frequency of Power failure in a Day",value:"durationFrequencyOfPowerFailureInADay"},
        {name:"Any New Development near our ATM (Any appartment / bldg/commercial etc) If yes, please mention",value:"anyNewDevelopmentNearOurATM"},
        {name:"Do you forsee if the site is under encroachment / legal issue (connect with neighbours)",value:"doYouForseeIfTheSiteIsUnderEncroachment"},
    ]
    const Branch=[
        {name:"How many ATMs within 500 mtrs ( both sides / all sides)",value:"howManyATMsWithin500Mtrs"},
        {name:"Mention Bank Name with No. of ATMs",value:"mentionBankNameWithNoOfATMs"},
        {name:"Average Transactions of other Bank ATMs within 500 mtrs (with ATM ID & share Txn Slip)",value:"averageTransactionsOfOtherBankATMsWithin500mtrs"},
        {name:"Distance of nearest other bank ATM from this site (Name the bank)",value:"distanceOfNearestOtherBankATMFromThisSite"},
        {name:"How many ATMs within 500 mtrs deployed by CMS Infosystems Ltd",value:"howManyATMsWithin500MtrsDeployedByCMSInfosystemsLtd"},
        {name:"Name of the bank with site ID & ATM ID (if applicable)",value:"nameOfTheBankWithSiteIDATMID"},
        {name:"How many Bank branches within 500 mtrs(please mention Bank Name)",value:"howManyBankBranchesWithin500mtrs"},
        {name:"Distance of the nearest Branch from this site(for the Bank we are Deploying)",value:"distanceOfTheNearestBranchFromThisSite"},
        {name:"Is there an Onsite ATM attached to nearest Branch",value:"isThereAnOnsiteATMAttachedToNearestBranch"},
        {name:"If Yes, Average Transaction of Onsite ATM(please share ATM ID)",value:"averageTransactionOfOnsiteATM"},
        {name:"Number of SB A/c",value:"numberOfSBAc"},
        {name:"Number of Debit Card Base",value:"numberOfDebitCardBase"},
        {name:"Expected Transactions as per Field Officer",value:"expectedTransactionsAsPerFieldOfficer"},
    ]
    const CRA =[
        {name:"CRA Name",value:"cRAName"},
        {name:"Nodal Branch Name, Address with SOL ID",value:"nodalBranchNameAddressWithSOLID"},
        {name:"Distance from ATM to Nodal Branch",value:"distanceFromATMToNodalBranch"},
        {name:"Loading Frequency",value:"loadingFrequency"},
    ]
    return (
        <div>
            <div className="auth-form-light text-left py-5 px-4">
                <h4>New Project</h4>
                <h6 className="font-weight-light">fill in the details.</h6>
                <Form className="pt-3">
                    {FirstHand.map((field) => (
                        <Form.Group className="row">
                            <label htmlFor="projectname" className="col-sm-10 col-form-label">{field.name}</label>
                            <div className="col-sm-9">
                                <Form.Control name={field.value} type="text" placeholder={field.name} className="form-control" onChange={handleChange} id="projectname"/>
                            </div>
                        </Form.Group>
                    ))}
                    {Area.map((field) => (
                        <Form.Group className="row">
                            <label htmlFor="projectname" className="col-sm-10 col-form-label">{field.name}</label>
                            <div className="col-sm-9">
                                <Form.Control name={field.value} type="text" placeholder={field.name} className="form-control" onChange={handleChange} id="projectname"/>
                            </div>
                        </Form.Group>
                    ))}
                    {Branch.map((field) => (
                        <Form.Group className="row">
                            <label htmlFor="projectname" className="col-sm-10 col-form-label">{field.name}</label>
                            <div className="col-sm-9">
                                <Form.Control name={field.value} type="text" placeholder={field.name} className="form-control" onChange={handleChange} id="projectname"/>
                            </div>
                        </Form.Group>
                    ))}
                    {CRA.map((field) => (
                        <Form.Group className="row">
                            <label htmlFor="projectname" className="col-sm-10 col-form-label">{field.name}</label>
                            <div className="col-sm-9">
                                <Form.Control name={field.value} type="text" placeholder={field.name} className="form-control" onChange={handleChange} id="projectname"/>
                            </div>
                        </Form.Group>
                    ))}
                    <div className="mt-3">
                        <Button type="submit" className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" onClick={handleSubmit} >Create</Button>
                        <Button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" onClick={hide} >Cancel</Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}
export default Siteform