import { 
    USER_LOGGED_IN, 
    USER_LOGGED_OUT, 
    USER_REGISTRATION_SUCCESS,
} from "../types/types";

const user = (state = {}, action = {}) => {
    switch(action.type){
        case USER_LOGGED_IN:
            return action.user;
        case USER_REGISTRATION_SUCCESS:
            return action.newuser
        case USER_LOGGED_OUT:
            return {};
        default: return state;
    }
}

export default user;
