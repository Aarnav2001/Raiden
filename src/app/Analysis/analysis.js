import React, { Component } from 'react'
import ProjectCom from "./projectcomponent";
import {useDispatch} from "react-redux";
import {fetchProjects, getProjects} from "../redux/actions/Project";
import {getdata} from "../redux/actions/data";

export const Dispatcher = () => {
    const dispatch = useDispatch();
    dispatch(getdata());
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

export default BasicTable;
