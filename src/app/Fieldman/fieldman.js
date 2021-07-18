import React, { Component } from 'react'
import ProjectCom from "./projectcomponent";
import {useDispatch} from "react-redux";
import {fetchfieldmen} from "../redux/actions/fieldman";

const Dispatcher = () => {
    const dispatch = useDispatch();
    dispatch(fetchfieldmen());
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
