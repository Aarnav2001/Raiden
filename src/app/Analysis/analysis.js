import React, { Component } from 'react'
import ProjectCom from "./projectcomponent";
import {useDispatch} from "react-redux";
import {fetchProjects, getProjects} from "../redux/actions/Project";

const Dispatcher = () => {
    const dispatch = useDispatch();
    dispatch(fetchProjects());
    return null;
}

export class BasicTable extends Component {
    render() {
        return (
            <div>
                <Dispatcher/>
                <ProjectCom/>
            </div>
        )
    }
}

export default BasicTable
