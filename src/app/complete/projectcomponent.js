import React, { Component } from 'react'
import { ProgressBar } from 'react-bootstrap';
import {useSelector} from "react-redux";
import Project from "../home/project";
const ProjectCom = () => {
    const projec = useSelector((state) => state.project).filter((pro) => pro.status);
    const projects = projec.filter((pro) => pro.status.status === "Done");
        return (
            <div>
                <div className="page-header">
                    <h3 className="page-title"> Completed Projects </h3>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                        </ol>
                    </nav>
                </div>
                <div className="row">
                    {projects.map((project) => (
                    <Project project={project}/>
                ))}
                </div>
            </div>
        )
}

export default ProjectCom
