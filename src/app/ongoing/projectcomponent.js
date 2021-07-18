import React, { Component } from 'react'
import { ProgressBar } from 'react-bootstrap';
import Projectinfo from "./projectinfo";
import {useSelector} from "react-redux";
const ProjectCom = () => {
    const projects = useSelector((state) => state.project);
        return (
            <div>
                <div className="page-header">
                    <h3 className="page-title"> Ongoing Projects </h3>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                        </ol>
                    </nav>
                </div>
                    {projects.map((project) => (
                        <Projectinfo project={project}/>
                    ))}
            </div>
        )
}

export default ProjectCom
