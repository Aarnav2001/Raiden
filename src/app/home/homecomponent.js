import React from 'react'
import Project from "./project";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Homecomponent = () => {
    const projec = useSelector((state) => state.project).filter((pro) => pro.status);
    const projects = projec.filter((pro) => pro.status.status === "ongoing");
    return (
        <div>
            <div className="row">
            {projects.reverse().map((project) => (
                    <Project project={project}/>
        ))}
            </div>
        </div>
    )
}

export default Homecomponent