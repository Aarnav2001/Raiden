import React, { Component } from 'react'
import ProjectCom from "./projectcomponent";
import {useDispatch} from "react-redux";
import {getsinglepro} from "../../redux/actions/singlepro";

const Dispatcher = ({id}) => {
    const dispatch = useDispatch();
    dispatch(getsinglepro(id));
    return null;
}

export class Project extends Component {
    render() {
        const {text, match: {params}} = this.props;

        const {id} = params;



        return (
            <React.Fragment>
                <Dispatcher id={id}/>
                <ProjectCom/>
            </React.Fragment>
        );
    }
}

export default Project
