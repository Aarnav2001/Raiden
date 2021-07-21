import React, { Component } from 'react'
import Newcomponent from "./newcomponent";
import Dispatcher from "../home/helper";

export class newProject
    extends Component {
    render() {
        return (
            <div>
                <Dispatcher/>
                <Newcomponent/>
            </div>
        )
    }
}

export default newProject