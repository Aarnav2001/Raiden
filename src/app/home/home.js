import React, { Component } from 'react'
import Homecomponent from "./homecomponent";
import Dispatcher from "./helper";

export class home
    extends Component {

    render() {
        return (
            <div>
            <Dispatcher/>
            <Homecomponent/>
            </div>
        )
    }
}

export default home