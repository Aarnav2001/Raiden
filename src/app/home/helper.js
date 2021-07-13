import React from 'react'
import {getProjects} from "../redux/actions/Project";
import {useDispatch} from "react-redux";

const Dispatcher = () => {
    const dispatch = useDispatch();
    dispatch(getProjects());
    return null;
}

export default Dispatcher