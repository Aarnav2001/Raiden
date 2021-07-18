import React from 'react'

const Projectinfo = ({project}) => {
        return (
                <div className="w-100">
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

