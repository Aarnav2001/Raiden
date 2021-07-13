import { GET , CREATESITE} from '../actionTypes';

export default (posts = [], action) => {
    switch (action.type) {
        case GET:
            return action.payload;
        case CREATESITE:
            return {
                ...posts,
                sites: [...posts.sites, action.payload]
            }
        default:
            return posts;
    }
};