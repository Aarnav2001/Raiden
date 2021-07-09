import { AUTH } from '../actionTypes';

import * as api from '../api.js';

export const signIn = (formData, history) => async (dispatch) => {
    try {
        const {data} = await api.signIn(formData);
        dispatch({ type: AUTH , data });
        history.push('/map');
    } catch (error) {
        console.log(error.message);
    }
};
export const signUp = (formData, history) => async (dispatch) => {
    try {
        const {data} = await api.signUp(formData);
        dispatch({ type: AUTH , data });
        history.push('/map');
    } catch (error) {
        console.log(error.message);
    }
};