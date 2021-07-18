import React, { useState } from 'react';
import {Button, Form} from 'react-bootstrap';
import { useDispatch } from "react-redux";
import {createProject} from "../../redux/actions/Project";
import {createSite} from "../../redux/actions/singlepro";
import {Link} from "react-router-dom";
import Project from "../project";
import {updatePost} from "../../redux/actions/site";

const Siteform = ({hide ,siteinfo}) => {
    const dispatch = useDispatch();
    const initialState = {
        name: siteinfo.name,
        referenceNo: siteinfo.referenceNo,
        offsite: siteinfo.offsite,
        address: siteinfo.address,
        city: siteinfo.city,
        district: siteinfo.district,
        state: siteinfo.state,
        pincode: siteinfo.pincode,
        landlord: siteinfo.landlord,
        landlordNo: siteinfo.landlordNo,
        landlordAddress: siteinfo.landlordAddress,
        rent: siteinfo.rent,
        advanceRental: siteinfo.advanceRental,
        shopArea: siteinfo.shopArea,
        rentFreePerid: siteinfo.rentFreePerid,
        floorAtWhichShop: siteinfo.floorAtWhichShop,
        carpetArea: siteinfo.carpetArea,
        width: siteinfo.width,
        depth: siteinfo.depth,
        height: siteinfo.height,
        availabilityOfShutter: siteinfo.availabilityOfShutter,
        signageSize: siteinfo.signageSize,
        space: siteinfo.space,
        length: siteinfo.length,
        powerAvailability: siteinfo.powerAvailability,
        areaType: siteinfo.areaType,
        locality: siteinfo.locality,
        laneState: siteinfo.laneState,
        areaPopulation: siteinfo.areaPopulation,
        noOfHousehold: siteinfo.noOfHousehold,
        workingPopulation: siteinfo.workingPopulation,
        siteVisible: siteinfo.siteVisible,
        durationFrequencyOfPowerFailureInADay: siteinfo.durationFrequencyOfPowerFailureInADay,
        anyNewDevelopmentNearOurATM: siteinfo.anyNewDevelopmentNearOurATM,
        doYouForseeIfTheSiteIsUnderEncroachment: siteinfo.doYouForseeIfTheSiteIsUnderEncroachment,
        howManyATMsWithin500Mtrs: siteinfo.howManyATMsWithin500Mtrs,
        mentionBankNameWithNoOfATMs: siteinfo.mentionBankNameWithNoOfATMs,
        averageTransactionsOfOtherBankATMsWithin500mtrs: siteinfo.averageTransactionsOfOtherBankATMsWithin500mtrs,
        distanceOfNearestOtherBankATMFromThisSite: siteinfo.distanceOfNearestOtherBankATMFromThisSite,
        howManyATMsWithin500MtrsDeployedByCMSInfosystemsLtd: siteinfo.howManyATMsWithin500MtrsDeployedByCMSInfosystemsLtd,
        nameOfTheBankWithSiteIDATMID: siteinfo.nameOfTheBankWithSiteIDATMID,
        howManyBankBranchesWithin500mtrs: siteinfo.howManyBankBranchesWithin500mtrs,
        distanceOfTheNearestBranchFromThisSite: siteinfo.distanceOfTheNearestBranchFromThisSite,
        isThereAnOnsiteATMAttachedToNearestBranch: siteinfo.isThereAnOnsiteATMAttachedToNearestBranch,
        averageTransactionOfOnsiteATM: siteinfo.averageTransactionOfOnsiteATM,
        numberOfSBAc: siteinfo.numberOfSBAc,
        numberOfDebitCardBase: siteinfo.numberOfDebitCardBase,
        expectedTransactionsAsPerFieldOfficer: siteinfo.expectedTransactionsAsPerFieldOfficer,
        cRAName: siteinfo.cRAName,
        nodalBranchNameAddressWithSOLID: siteinfo.nodalBranchNameAddressWithSOLID,
        distanceFromATMToNodalBranch: siteinfo.distanceFromATMToNodalBranch,
        loadingFrequency: siteinfo.loadingFrequency,
        anyOtherObservation: siteinfo.anyOtherObservation
    };
    const [formData,setformData] = useState(initialState);
    const handleChange = (e) => {
        setformData({...formData,[e.target.name]:e.target.value})
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        dispatch(updatePost(siteinfo._id,formData))
        hide();
    };
    const FirstHand= [
        {name:"Reference No",value:"referenceNo",realvalue:formData.referenceNo},
        {name:"Offsite / Onsite/ Deemed Onsite",value:"offsite",realvalue:formData.offsite},
        {name:"Address",value:"address",realvalue:formData.address},
        {name:"City",value:"city",realvalue:formData.city},
        {name:"District",value:"district",realvalue:formData.district},
        {name:"State",value:"state",realvalue:formData.state},
        {name:"Pincode",value:"pincode",realvalue:formData.pincode},
        {name:"Name of Landlord",value:"landlord",realvalue:formData.landlord},
        {name:"Contact no of Landlord",value:"landlordNo",realvalue:formData.landlordNo},
        {name:"Correspondence address of Landlord",value:"landlordAddress",realvalue:formData.landlordAddress},
        {name:"Rent (INR)",value:"rent",realvalue:formData.rent},
        {name:"Advance Rental ( in months)",value:"advanceRental",realvalue:formData.advanceRental},
        {name:"Shop Area",value:"shopArea",realvalue:formData.shopArea},
        {name:"Rent Free Period ( in days)",value:"rentFreePerid",realvalue:formData.rentFreePerid},
        {name:"Floor at which shop ( Ground / First )",value:"floorAtWhichShop",realvalue:formData.floorAtWhichShop},
        {name:"Carpet Area",value:"carpetArea",realvalue:formData.carpetArea},
        {name:"Width of the shop  ( from inside of walls )",value:"width",realvalue:formData.width},
        {name:"Depth of the shop ( from inside of walls)",value:"depth",realvalue:formData.depth},
        {name:"Height of the sho",value:"height",realvalue:formData.height},
        {name:"Availability of Shutter (Y/N)",value:"availabilityOfShutter",realvalue:formData.availabilityOfShutter},
        {name:"Signage Size",value:"signageSize",realvalue:formData.signageSize},
        {name:"Space for AC ODU in nos",value:"space",realvalue:formData.space},
        {name:"Length of V-sat wire",value:"length",realvalue:formData.length},
        {name:"Power Availability",value:"powerAvailability",realvalue:formData.powerAvailability},
    ]
    const Area= [
        {name:"Metrol/Urban/Semi Urban/Rural",value:"areaType",realvalue:formData.areaType},
        {name:"Type of Locality(Residential/Commercial/Others)",value:"locality",realvalue:formData.locality},
        {name:"Is the site in a lane/Main road/Highway/Junction",value:"laneState",realvalue:formData.laneState},
        {name:"Area Population",value:"areaPopulation",realvalue:formData.areaPopulation},
        {name:"No of Household within 1 Km radius",value:"noOfHousehold",realvalue:formData.noOfHousehold},
        {name:"Working population in the Area",value:"workingPopulation",realvalue:formData.workingPopulation},
        {name:"Is site visible from 50 meter distance from both side ( if not what is the visibility distance)",value:"siteVisible",realvalue:formData.siteVisible},
        {name:"Duration & Frequency of Power failure in a Day",value:"durationFrequencyOfPowerFailureInADay",realvalue:formData.durationFrequencyOfPowerFailureInADay},
        {name:"Any New Development near our ATM (Any appartment / bldg/commercial etc) If yes, please mention",value:"anyNewDevelopmentNearOurATM",realvalue:formData.anyNewDevelopmentNearOurATM},
        {name:"Do you forsee if the site is under encroachment / legal issue (connect with neighbours)",value:"doYouForseeIfTheSiteIsUnderEncroachment",realvalue:formData.doYouForseeIfTheSiteIsUnderEncroachment},
    ]
    const Branch=[
        {name:"How many ATMs within 500 mtrs ( both sides / all sides)",value:"howManyATMsWithin500Mtrs",realvalue:formData.howManyATMsWithin500Mtrs},
        {name:"Mention Bank Name with No. of ATMs",value:"mentionBankNameWithNoOfATMs",realvalue:formData.mentionBankNameWithNoOfATMs},
        {name:"Average Transactions of other Bank ATMs within 500 mtrs (with ATM ID & share Txn Slip)",value:"averageTransactionsOfOtherBankATMsWithin500mtrs",realvalue:formData.averageTransactionsOfOtherBankATMsWithin500mtrs},
        {name:"Distance of nearest other bank ATM from this site (Name the bank)",value:"distanceOfNearestOtherBankATMFromThisSite",realvalue:formData.distanceOfNearestOtherBankATMFromThisSite},
        {name:"How many ATMs within 500 mtrs deployed by CMS Infosystems Ltd",value:"howManyATMsWithin500MtrsDeployedByCMSInfosystemsLtd",realvalue:formData.howManyATMsWithin500MtrsDeployedByCMSInfosystemsLtd},
        {name:"Name of the bank with site ID & ATM ID (if applicable)",value:"nameOfTheBankWithSiteIDATMID",realvalue:formData.nameOfTheBankWithSiteIDATMID},
        {name:"How many Bank branches within 500 mtrs(please mention Bank Name)",value:"howManyBankBranchesWithin500mtrs",realvalue:formData.howManyBankBranchesWithin500mtrs},
        {name:"Distance of the nearest Branch from this site(for the Bank we are Deploying)",value:"distanceOfTheNearestBranchFromThisSite",realvalue:formData.distanceOfTheNearestBranchFromThisSite},
        {name:"Is there an Onsite ATM attached to nearest Branch",value:"isThereAnOnsiteATMAttachedToNearestBranch",realvalue:formData.isThereAnOnsiteATMAttachedToNearestBranch},
        {name:"If Yes, Average Transaction of Onsite ATM(please share ATM ID)",value:"averageTransactionOfOnsiteATM",realvalue:formData.averageTransactionOfOnsiteATM},
        {name:"Number of SB A/c",value:"numberOfSBAc",realvalue:formData.numberOfSBAc},
        {name:"Number of Debit Card Base",value:"numberOfDebitCardBase",realvalue:formData.numberOfDebitCardBase},
        {name:"Expected Transactions as per Field Officer",value:"expectedTransactionsAsPerFieldOfficer",realvalue:formData.expectedTransactionsAsPerFieldOfficer},
    ]
    const CRA =[
        {name:"CRA Name",value:"cRAName",realvalue:formData.cRAName},
        {name:"Nodal Branch Name, Address with SOL ID",value:"nodalBranchNameAddressWithSOLID",realvalue:formData.nodalBranchNameAddressWithSOLID},
        {name:"Distance from ATM to Nodal Branch",value:"distanceFromATMToNodalBranch",realvalue:formData.distanceFromATMToNodalBranch},
        {name:"Loading Frequency",value:"loadingFrequency",realvalue:formData.loadingFrequency},
        {name:"Any other observation",value:"anyOtherObservation",realvalue:formData.anyOtherObservation}
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
                                <Form.Control name={field.value} type="text" placeholder={field.name} className="form-control" onChange={handleChange} id="projectname" value={field.realvalue}/>
                            </div>
                        </Form.Group>
                    ))}
                    {Area.map((field) => (
                        <Form.Group className="row">
                            <label htmlFor="projectname" className="col-sm-10 col-form-label">{field.name}</label>
                            <div className="col-sm-9">
                                <Form.Control name={field.value} type="text" placeholder={field.name} className="form-control" onChange={handleChange} id="projectname" value={field.realvalue}/>
                            </div>
                        </Form.Group>
                    ))}
                    {Branch.map((field) => (
                        <Form.Group className="row">
                            <label htmlFor="projectname" className="col-sm-10 col-form-label">{field.name}</label>
                            <div className="col-sm-9">
                                <Form.Control name={field.value} type="text" placeholder={field.name} className="form-control" onChange={handleChange} id="projectname" value={field.realvalue}/>
                            </div>
                        </Form.Group>
                    ))}
                    {CRA.map((field) => (
                        <Form.Group className="row">
                            <label htmlFor="projectname" className="col-sm-10 col-form-label">{field.name}</label>
                            <div className="col-sm-9">
                                <Form.Control name={field.value} type="text" placeholder={field.name} className="form-control" onChange={handleChange} id="projectname" value={field.realvalue}/>
                            </div>
                        </Form.Group>
                    ))}
                    <div className="mt-3">
                        <Button type="submit" className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" onClick={handleSubmit} >SAVE</Button>
                        <Button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" onClick={hide} >Cancel</Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}
export default Siteform