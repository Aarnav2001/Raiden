import { GETTIS,UPDATETIS } from '../actionTypes';

export default (posts = [], action) => {
    switch (action.type) {
        case GETTIS:
            return action.payload;
        case UPDATETIS:
            return action.payload;
        default:
            return posts;
    }
};