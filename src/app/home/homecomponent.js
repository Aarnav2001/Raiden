import React from 'react'
import Project from "./project";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Homecomponent = () => {
    const projects = useSelector((state) => state.project);
    return (
        <div>
            <div className="p-0 m-0">
                    <div className="page-header">
                        <h3 className="page-title"> ALL Projects </h3>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                            </ol>
                        </nav>
                </div>
                <div className="d-flex">
                    <div className="col-sm-2 text-center">
                        <p>total number of projects</p>
                        <h1>
                            {projects.length}
                        </h1>
                    </div>
                    <div className="col-sm-2 text-center">
                        <p>new projects</p>
                        <h1>
                            {projects.filter((data)=>data.status? data.status.status==="new":"").length}
                        </h1>
                    </div>
                    <div className="col-sm-2 text-center">
                        <p>ongoing projects</p>
                        <h1>
                            {projects.filter((data)=>data.status? data.status.status==="ongoing":"").length}
                        </h1>
                    </div>
                    <div className="col-sm-2 text-center">
                        <p>completed projects</p>
                        <h1>
                            {projects.filter((data)=>data.status? data.status.status==="Done":"").length}
                        </h1>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
            {projects.map((project) => (
                    <Project project={project}/>
        ))}
            </div>
        </div>
    )
}

export default Homecomponent