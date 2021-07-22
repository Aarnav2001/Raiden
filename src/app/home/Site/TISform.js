import React, { useState } from 'react';
import {Button, Form} from 'react-bootstrap';
import { useDispatch } from "react-redux";
import {createProject} from "../../redux/actions/Project";
import {createSite} from "../../redux/actions/singlepro";
import {Link} from "react-router-dom";
import Project from "../project";
import {updatePost} from "../../redux/actions/site";
import {updateTIS} from "../../redux/actions/TIS";

const Siteform = ({hide ,siteinfo}) => {
    const dispatch = useDispatch();
    const initialState = {
        name: siteinfo.name,
        siteCode: siteinfo.siteCode,
        lOIStatus: siteinfo.lOIStatus,
        oldATMID: siteinfo.oldATMID,
        siteType: siteinfo.siteType,
        location: siteinfo.location,
        address: siteinfo.address,
        pinCode: siteinfo.pinCode,
        city: siteinfo.city,
        district: siteinfo.district,
        state: siteinfo.state,
        installationType: siteinfo.installationType,
        category: siteinfo.category,
        bankZO: siteinfo.bankZO,
        landLordName: siteinfo.landLordName,
        contactNo: siteinfo.contactNo,
        carpetArea: siteinfo.carpetArea,
        fieldOfficer: siteinfo.fieldOfficer,
        fOContactNo: siteinfo.fOContactNo,
        pONo: siteinfo.pONo,
        pODate: siteinfo.pODate,
        tisVendor: siteinfo.tisVendor,
        tISRequestDate: siteinfo.tISRequestDate,
        sFRDate: siteinfo.sFRDate,
        siteStatus: siteinfo.siteStatus,
        possesionDate: siteinfo.possesionDate,
        completionDate: siteinfo.completionDate,
        cDmake: siteinfo.cDmake,
        cDsRNo: siteinfo.cDsRNo,
        cDOrderDate: siteinfo.cDOrderDate,
        cDDeliveryDate: siteinfo.cDDeliveryDate,
        techLiveDate: siteinfo.techLiveDate,
        cashLiveDate: siteinfo.cashLiveDate,
        grouting: siteinfo.grouting,
        uPspONo: siteinfo.uPspONo,
        uPspODate: siteinfo.uPspODate,
        uPsmake: siteinfo.uPsmake,
        uPsSRNo: siteinfo.uPsSRNo,
        uPsOrderDate: siteinfo.uPsOrderDate,
        uPsDeliveryDate: siteinfo.uPsDeliveryDate,
        uPsinstallationDate: siteinfo.uPsinstallationDate,
        vSatPONo: siteinfo.vSatPONo,
        vSatpODate: siteinfo.vSatpODate,
        vSatmake: siteinfo.vSatmake,
        vSatCode: siteinfo.vSatCode,
        vSatOrderDate: siteinfo.vSatOrderDate,
        vSatDeliveryDate: siteinfo.vSatDeliveryDate,
        vSatinstallationDate: siteinfo.vSatinstallationDate,
        aCPONo: siteinfo.aCPONo,
        aCpODate: siteinfo.aCpODate,
        aCmake: siteinfo.aCmake,
        aCOrderDate: siteinfo.aCOrderDate,
        aCDeliveryDate: siteinfo.aCDeliveryDate,
        aCinstallationDate: siteinfo.aCinstallationDate,
        eSureillancepONo: siteinfo.eSureillancepONo,
        eSureillancepODate: siteinfo.eSureillancepODate,
        eSureillancemake: siteinfo.eSureillancemake,
        eSureillanceOrderDate: siteinfo.eSureillanceOrderDate,
        eSureillanceLiveDate: siteinfo.eSureillanceLiveDate,
        signagepONo: siteinfo.signagepONo,
        signagepODate: siteinfo.signagepODate,
        signageVendor: siteinfo.signageVendor,
        signageOrderDate: siteinfo.signageOrderDate,
        signageinstallationDate: siteinfo.signageinstallationDate,
        distributionVendor: siteinfo.distributionVendor,
        distributionOrderDate: siteinfo.distributionOrderDate,
        distributionDeliveryDate: siteinfo.distributionDeliveryDate,
        existingATMToBeReplaced: siteinfo.existingATMToBeReplaced,
        spaceAvailableInATMLobbyToDeliverCMSATMWithoutRemovingExistingCD: siteinfo.spaceAvailableInATMLobbyToDeliverCMSATMWithoutRemovingExistingCD,
        backroomInATMLobby: siteinfo.backroomInATMLobby,
        existingUPSOwnedByBank: siteinfo.existingUPSOwnedByBank,
        spaceAvailableToInstallCMSUPS: siteinfo.spaceAvailableToInstallCMSUPS,
        availabilityOfPowerPoints: siteinfo.availabilityOfPowerPoints,
        properEarthlingAvailable: siteinfo.properEarthlingAvailable,
        iOPort: siteinfo.iOPort,
        whetherBankIsReadyForATMBuyback: siteinfo.whetherBankIsReadyForATMBuyback,
        refurbishment: siteinfo.refurbishment,
    };
    const [formData,setformData] = useState(initialState);
    const handleChange = (e) => {
        setformData({...formData,[e.target.name]:e.target.value})
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        dispatch(updateTIS(siteinfo._id,formData))
        hide();
    };
    const FirstHand= [
        {name:"Name",value:"name",realvalue:formData.name},
        {name:"Site Code",value:"siteCode",realvalue: formData.siteCode},
        {name:"LOI Status",value:"lOIStatus",realvalue: formData.lOIStatus},
        {name:"Old ATMID",value:"oldATMID",realvalue: formData.oldATMID},
        {name:"Site Type (Offsite / Onsite)",value:"siteType",realvalue: formData.siteType},
        {name:"Location",value:"location",realvalue: formData.location},
        {name:"Address",value:"address",realvalue: formData.address},
        {name:"Pin code",value:"pinCode",realvalue: formData.pinCode},
        {name:"City",value:"city",realvalue: formData.city},
        {name:"District",value:"district",realvalue: formData.district},
        {name:"State",value:"state",realvalue: formData.state},
        {name:"Installation Type(1st ATM/2nd ATM)",value:"installationType",realvalue: formData.installationType},
        {name:"Category(Metro/Urban/S-Urban/Rural)",value:"category",realvalue: formData.category},
        {name:"Bank's ZO",value:"bankZO",realvalue: formData.bankZO},
        {name:"Land Lord Name",value:"landLordName",realvalue: formData.landLordName},
        {name:"Contact No.",value:"contactNo",realvalue: formData.contactNo},
        {name:"Carpet Area",value:"carpetArea",realvalue: formData.carpetArea},
        {name:"Field Officer(F.O)",value:"fieldOfficer",realvalue: formData.fieldOfficer},
        {name:"F.O. Contact No.",value:"fOContactNo",realvalue: formData.fOContactNo},
        {name:"PO No",value:"pONo",realvalue: formData.pONo},
        {name:"PO Date",value:"pODate",realvalue: formData.pODate},
        {name:"Tis vendor",value:"tisVendor",realvalue: formData.tisVendor},
        {name:"TIS Request Date",value:"tISRequestDate",realvalue: formData.tISRequestDate},
        {name:"SFR Date",value:"sFRDate",realvalue: formData.sFRDate},
        {name:"Site Status",value:"siteStatus",realvalue: formData.siteStatus},
        {name:"Start / Possesion Date",value:"possesionDate",realvalue: formData.possesionDate},
        {name:"Completion Date",value:"completionDate",realvalue: formData.completionDate},
        {name:"Make",value:"cDmake",realvalue: formData.cDmake},
        {name:"SR No",value:"cDsRNo",realvalue: formData.cDsRNo},
        {name:"CD Order Date",value:"cDOrderDate",realvalue: formData.cDOrderDate},
        {name:"CD Delivery Date",value:"cDDeliveryDate",realvalue: formData.cDDeliveryDate},
        {name:"Tech Live Date",value:"techLiveDate",realvalue: formData.techLiveDate},
        {name:"Cash Live Date",value:"cashLiveDate",realvalue: formData.cashLiveDate},
        {name:"Grouting",value:"grouting",realvalue: formData.grouting},
        {name:"PO No",value:"uPspONo",realvalue: formData.uPspONo},
        {name:"PO Date",value:"uPspODate",realvalue: formData.uPspODate},
        {name:"Make",value:"uPsmake",realvalue: formData.uPsmake},
        {name:"SR No",value:"uPsSRNo",realvalue: formData.uPsSRNo},
        {name:"Order Date",value:"uPsOrderDate",realvalue: formData.uPsOrderDate},
        {name:"Delivery Date",value:"uPsDeliveryDate",realvalue: formData.uPsDeliveryDate},
        {name:"Installation Date",value:"uPsinstallationDate",realvalue: formData.uPsinstallationDate},
        {name:"PO No",value:"vSatPONo",realvalue: formData.vSatPONo},
        {name:"PO Date",value:"vSatpODate",realvalue: formData.vSatpODate},
        {name:"Make",value:"vSatmake",realvalue: formData.vSatmake},
        {name:"Code",value:"vSatCode",realvalue: formData.vSatCode},
        {name:"Order Date",value:"vSatOrderDate",realvalue: formData.vSatOrderDate},
        {name:"Delivery Date",value:"vSatDeliveryDate",realvalue: formData.vSatDeliveryDate},
        {name:"Installation Date",value:"vSatinstallationDate",realvalue: formData.vSatinstallationDate},
        {name:"PO No",value:"aCPONo",realvalue: formData.aCPONo},
        {name:"PO Date	Make",value:"aCpODate",realvalue: formData.aCpODate},
        {name:"Make",value:"aCmake",realvalue: formData.aCmake},
        {name:"Order Date",value:"aCOrderDate",realvalue: formData.aCOrderDate},
        {name:"Delivery Date",value:"aCDeliveryDate",realvalue: formData.aCDeliveryDate},
        {name:"Installation Date",value:"aCinstallationDate",realvalue: formData.aCinstallationDate},
        {name:"PO No",value:"eSureillancepONo",realvalue: formData.eSureillancepONo},
        {name:"PO Date	Make",value:"eSureillancepODate",realvalue: formData.eSureillancepODate},
        {name:"PO Make",value:"eSureillancemake",realvalue: formData.eSureillancemake},
        {name:"Order Date",value:"eSureillanceOrderDate",realvalue: formData.eSureillanceOrderDate},
        {name:"Live Date",value:"eSureillanceLiveDate",realvalue: formData.eSureillanceLiveDate},
        {name:"PO No",value:"signagepONo",realvalue: formData.signagepONo},
        {name:"PO Date",value:"signagepODate",realvalue: formData.signagepODate},
        {name:" Vendor",value:"signageVendor",realvalue: formData.signageVendor},
        {name:"Order Date",value:"signageOrderDate",realvalue: formData.signageOrderDate},
        {name:"Insstallation date",value:"signageinstallationDate",realvalue: formData.signageinstallationDate},
        {name:"Vendor",value:"distributionVendor",realvalue: formData.distributionVendor},
        {name:"Order Date",value:"distributionOrderDate",realvalue: formData.distributionOrderDate},
        {name:"Delivery Date",value:"distributionDeliveryDate",realvalue: formData.distributionDeliveryDate},
        {name:"Existing ATM to be replaced",value:"existingATMToBeReplaced",realvalue: formData.existingATMToBeReplaced},
        {name:"Space available in ATM lobby to deliver CMS ATM without removing existing CD",value:"spaceAvailableInATMLobbyToDeliverCMSATMWithoutRemovingExistingCD",realvalue: formData.spaceAvailableInATMLobbyToDeliverCMSATMWithoutRemovingExistingCD},
        {name:"Backroom / Cabinate in ATM Lobby",value:"backroomInATMLobby",realvalue: formData.backroomInATMLobby},
        {name:"Existing UPS owned by Bank or MSP",value:"existingUPSOwnedByBank",realvalue: formData.existingUPSOwnedByBank},
        {name:" Space available to install CMS UPS in backroom without removing existing UPS",value:"spaceAvailableToInstallCMSUPS",realvalue: formData.spaceAvailableToInstallCMSUPS},
        {name:"Availability of Power points for UPS Input/Output ",value:"availabilityOfPowerPoints",realvalue: formData.availabilityOfPowerPoints},
        {name:"Proper Earthling available",value:"properEarthlingAvailable",realvalue: formData.properEarthlingAvailable},
        {name:" IO port -  Network point available for CMS ATM Installation",value:"iOPort",realvalue: formData.iOPort},
        {name:"Whether Bank is ready for ATM Buyback(Yes/No)",value:"whetherBankIsReadyForATMBuyback",realvalue: formData.whetherBankIsReadyForATMBuyback},
        {name:"Refurbishment ( Annexure Attached )",value:"refurbishment",realvalue: formData.refurbishment},
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