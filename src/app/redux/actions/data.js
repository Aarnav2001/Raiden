import { GET_DATA} from '../actionTypes';
import * as api from '../api.js';

export const getdata = () => async (dispatch) => {
    try {
        const { data } = await api.getdata();

        dispatch({ type: GET_DATA, payload: data });
    } catch (error) {
        console.log(error);
    }
};