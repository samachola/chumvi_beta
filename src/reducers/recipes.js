import { GET_USER_RECIPES, NEW_RECIPE_SUCCESS, DELETE_RECIPE_SUCCESS } from "../types/types";

const recipes = (state = {}, action = {}) => {
    switch(action.type){
        case GET_USER_RECIPES:
            return action.recipes
        case NEW_RECIPE_SUCCESS:
            return action.recipe
        case DELETE_RECIPE_SUCCESS:
            return action.recipe
        default: return state;
    }
}

export default recipes;
