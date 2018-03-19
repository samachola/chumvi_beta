import { GET_USER_CATEGORIES, NEW_CATEGORY_SUCCESS, EDIT_CATEGORY_SUCCESS } from "../types/types";

const categories = (state = {}, action = {}) => {
    switch(action.type){
        case GET_USER_CATEGORIES:
            return action.categories
        case NEW_CATEGORY_SUCCESS:
            return action.category
        case EDIT_CATEGORY_SUCCESS:
            return action.category
        default: return state;
    }
}

export default categories;
