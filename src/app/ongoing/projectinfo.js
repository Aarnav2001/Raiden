import React from 'react'

const Projectinfo = ({project}) => {
        return (
                <div className="col-lg-6 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">{project.name}</h4>
                            <p className="card-description"> {project.des}
                            </p>
                        </div>
                    </div>
                </div>
        )
}

export default Projectinfo

