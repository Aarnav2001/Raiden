import React from 'react'
import Project from "./project";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Homecomponent = () => {
    const projects = useSelector((state) => state.project);
    return (
        <div>
            {projects.map((project) => (
                <Link to={`/Project/${project._id}`}>
                     <Project project={project}/>
                </Link>
        ))}
        </div>
    )
}

export default Homecomponent