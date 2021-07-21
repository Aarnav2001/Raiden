import React, {Component, useState} from 'react'
import { ProgressBar } from 'react-bootstrap';
import Projectinfo from "./projectinfo";
import {useSelector} from "react-redux";
import {Bar, Line} from "react-chartjs-2";
import Graph from "./Graph";

const ProjectCom = () => {
    const datas = useSelector((state) => state.data);
        return (
            <div>
                <div className="page-header">
                    <h3 className="page-title"> Analysis </h3>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                        </ol>
                    </nav>
                </div>
                <Graph datas={datas}/>
                <div className="col-lg-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Hoverable Table</h4>
                            <p className="card-description"> Add className <code>.table-hover</code>
                            </p>
                            <div className="table-responsive">
                                <table className="table table-hover">
                                    <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Status</th>
                                        <th>District</th>
                                        <th>Population</th>
                                        <th>Number</th>
                                        <th>Monthly</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {datas.map((data) => (
                                        <tr>
                                            <td>{data.Name}</td>
                                            <td>{data.Status}</td>
                                            <td>{data.District}</td>
                                            <td>{data.Population}</td>
                                            <td>{data.Number}</td>
                                            <td>
                                                <ProgressBar variant="success" now={data.Monthly} max={6000} min={2000}/>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
}

export default ProjectCom
