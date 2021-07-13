import React, { Component } from 'react'
import Newcomponent from "./newcomponent";

export class newProject
    extends Component {
    render() {
        return (
            <div className="col-lg-6 grid-margin stretch-card">
                <Newcomponent/>
            </div>
        )
    }
}

export default newProject