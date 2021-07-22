import { GET , CREATESITE ,CONFIRM,DONE} from '../actionTypes';

export default (posts = [], action) => {
    switch (action.type) {
        case GET:
            return action.payload;
        case CONFIRM:
            return {
                ...posts,
                post: action.payload
            }
        case DONE:
            return {
                ...posts,
                post: action.payload
            }
        case CREATESITE:
            return {
                ...posts,
                sites: [...posts.sites, action.payload]
            }
        default:
            return posts;
    }
};