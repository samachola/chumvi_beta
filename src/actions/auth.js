import { 
    USER_LOGGED_IN, 
    USER_LOGGED_OUT, 
    USER_RESET_PASSWORD,
    PASSWORD_RESET_SUCCESS,
    GET_USER_CATEGORIES, 
    GET_USER_RECIPES, 
    NEW_CATEGORY_SUCCESS,
    EDIT_CATEGORY_SUCCESS,
    DELETE_CATEGORY_SUCCESS,
    NEW_RECIPE_SUCCESS,
    EDIT_RECIPE_SUCCESS,
    DELETE_RECIPE_SUCCESS
    
} from '../types/types';
import api from '../api/api';
import setAuthorizationToken from '../utils/setAuthorizationToken';

export const userLoggedIn = (user) => ({
    type: USER_LOGGED_IN,
    user
});

export const userLoggedOut = () => ({
    type: USER_LOGGED_OUT
});

export const userRegistered = (newuser) => ({
    type: USER_LOGGED_OUT,
    newuser
});

export const userRequestReset = (user) => ({
    type: USER_RESET_PASSWORD,
    user
});

export const passwordReset = (user) => ({
    type: PASSWORD_RESET_SUCCESS,
    user
});

export const getCategories = (categories) => ({
    type: GET_USER_CATEGORIES,
    categories
});

export const addCategory = (category) => ({
    type: NEW_CATEGORY_SUCCESS,
    category
})

export const editCategory = (category) => ({
    type: EDIT_CATEGORY_SUCCESS,
    category
})

export const deleteCategory = (category) => ({
    type: DELETE_CATEGORY_SUCCESS,
    category
})

export const getRecipes = (recipes) => ({
    type: GET_USER_RECIPES,
    recipes
});

export const addRecipe = (recipe) => ({
    type: NEW_RECIPE_SUCCESS,
    recipe
});

export const editRecipe = (recipe) => ({
    type: EDIT_RECIPE_SUCCESS,
    recipe
});

export const deleteRecipe = (recipe) => ({
    type: DELETE_RECIPE_SUCCESS,
    recipe
});

export const loginRequest = credentials => dispatch =>
  api.user.login(credentials).then(user => {
    localStorage.token = user.token;
    setAuthorizationToken(user.token);
    dispatch(userLoggedIn(user));
  });

export const signup = credentials => dispatch =>
  api.user.register(credentials).then(newuser => {
    dispatch(userRegistered(newuser));
  });

export const logout = () => dispatch => {
    localStorage.removeItem('token');
    setAuthorizationToken()
    dispatch(userLoggedOut());
};

export const passwordRequest = user => dispatch => 
    api.user.forgot(user).then(resetURL => {
        dispatch(userRequestReset(resetURL));
    });

export const passwordResetRequest = (user, token) => dispatch => 
    api.user.reset(user, token).then(newpass => {
        dispatch(passwordRequest(newpass));
    });

export const getCategoriesRequest = () => dispatch =>
    api.categories.all().then(categories => {
        dispatch(getCategories(categories));
    });

export const addCategoryRequest = (data) => dispatch =>
    api.categories.add(data).then(category => {
        dispatch(addCategory(category));
    });

export const editCategoryRequest = (data, id) => dispatch =>
    api.categories.update(data, id).then(categories => {
        dispatch(getCategories(categories));
    });

export const deleteCategoryRequest = (id) => dispatch =>
    api.categories.delete(id).then(categories => {
        dispatch(deleteCategory(categories));
    });

export const getRecipesRequest = (page, q) => dispatch =>
    api.recipes.all(page, q).then(recipes => {
        dispatch(getRecipes(recipes));
    });

export const addRecipeRequest = (data) => dispatch =>
    api.recipes.add(data).then(recipe => {
        dispatch(addRecipe(recipe));
    });

export const editRecipeRequest = (data, id) => dispatch =>
    api.recipes.update(data, id).then(recipe => {
        dispatch(editRecipe(recipe));
    });

export const deleteRecipeRequest = (id) => dispatch =>
    api.recipes.delete(id).then(recipe => {
        dispatch(deleteRecipe(recipe));
    });


    