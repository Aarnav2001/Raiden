import React from 'react'
import Project from "./project";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Homecomponent = () => {
    const projec = useSelector((state) => state.project).filter((pro) => pro.status);
    const projects = projec.filter((pro) => pro.status.status === "ongoing");
    return (
        <div>
            {projects.reverse().map((project) => (
                <Link to={`/Project/${project._id}`}>
                     <Project project={project}/>
                </Link>
        ))}
        </div>
    )
}

export default Homecomponent