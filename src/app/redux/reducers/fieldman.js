import { FETCH_FIELD, CREATE_FIELD} from '../actionTypes';

export default (posts = [], action) => {
    switch (action.type) {
        // case FETCH:
        //     return action.payload;
        case FETCH_FIELD:
            return action.payload;
        // case LIKE:
        //     return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
        case CREATE_FIELD:
            return [...posts, action.payload];
        // case UPDATE:
        //     return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
        // case DELETE:
        //     return posts.filter((post) => post._id !== action.payload);
        default:
            return posts;
    }
};