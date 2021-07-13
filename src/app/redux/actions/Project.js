import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE,FETCH } from '../actionTypes';
import * as api from '../api.js';

export const getProjects = () => async (dispatch) => {
    try {
        const { data } = await api.getprojects();

        dispatch({ type: FETCH, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const fetchProjects = () => async (dispatch) => {
    try {
        const { data } = await api.fetchProjects();

        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const createProject = (project) => async (dispatch) => {
    try {
        const { data } = await api.createProject(project);

        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error);
    }
};

// export const updatePost = (id, post) => async (dispatch) => {
//     try {
//         const { data } = await api.updatePost(id, post);
//
//         dispatch({ type: UPDATE, payload: data });
//     } catch (error) {
//         console.log(error);
//     }
// };
//
// export const likePost = (id) => async (dispatch) => {
//     const user = JSON.parse(localStorage.getItem('profile'));
//
//     try {
//         const { data } = await api.likePost(id, user?.token);
//
//         dispatch({ type: LIKE, payload: data });
//     } catch (error) {
//         console.log(error);
//     }
// };
//
// export const deletePost = (id) => async (dispatch) => {
//     try {
//         await await api.deletePost(id);
//
//         dispatch({ type: DELETE, payload: id });
//     } catch (error) {
//         console.log(error);
//     }
// };