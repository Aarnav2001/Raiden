import React from 'react'

const Projectinfo = ({project}) => {
        return (
                <div className="col-sm-3 m-3">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">{project.username}</h4>
                            <p className="card-description"> {project.email}
                            </p>
                        </div>
                    </div>
                </div>
        )
}

export default Projectinfo

