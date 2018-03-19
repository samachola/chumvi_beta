import { combineReducers } from 'redux';
import user from './reducers/user';
import category from './reducers/categories';
import recipes from './reducers/recipes';

export default combineReducers({
    user,
    category,
    recipes
});
