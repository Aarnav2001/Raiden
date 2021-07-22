import { GETTIS , UPDATETIS} from '../actionTypes';
import * as api from '../api.js';

export const getTIS = (id) => async (dispatch) => {
    try {
        const { data } = await api.getTIS(id);

        dispatch({ type: GETTIS, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const updateTIS = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updateTIS(id, post);

        dispatch({ type: UPDATETIS, payload: data });
    } catch (error) {
        console.log(error);
    }
};
