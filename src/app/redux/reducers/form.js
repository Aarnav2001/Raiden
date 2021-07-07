import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../actionTypes';

export default (forms = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case LIKE:
            return forms.map((form) => (form._id === action.payload._id ? action.payload : form));
        case CREATE:
            return [...forms, action.payload];
        case UPDATE:
            return forms.map((form) => (form._id === action.payload._id ? action.payload : form));
        case DELETE:
            return forms.filter((form) => form._id !== action.payload);
        default:
            return forms;
    }
};