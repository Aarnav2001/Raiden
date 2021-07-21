import { GET_DATA} from '../actionTypes';

export default (posts = [], action) => {
    switch (action.type) {
        case GET_DATA:
            return action.payload;
        default:
            return posts;
    }
};