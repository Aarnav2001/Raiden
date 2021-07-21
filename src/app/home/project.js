import React from 'react'
import {Link} from "react-router-dom";


const project = ({project}) => {
        return (
                <div className="col-md-4 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <Link to={`/Project/${project._id}`}>
                                <h4 className="card-title">{project.name}</h4>
                                <p className="card-description"> {project.des}
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
        )
}

export default project