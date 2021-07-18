import { FETCH_FIELD,CREATE_FIELD} from '../actionTypes';
import * as api from '../api.js';

export const fetchfieldmen = () => async (dispatch) => {
    try {
        const { data } = await api.fetchfieldmen();

        dispatch({ type: FETCH_FIELD, payload: data });
    } catch (error) {
        console.log(error);
    }
};

// export const fetchProjects = () => async (dispatch) => {
//     try {
//         const { data } = await api.fetchProjects();
//
//         dispatch({ type: FETCH_ALL, payload: data });
//     } catch (error) {
//         console.log(error);
//     }
// };

export const createfieldman = (project) => async (dispatch) => {
    try {
        const { data } = await api.createfieldman(project);

        dispatch({ type: CREATE_FIELD, payload: data.result });
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