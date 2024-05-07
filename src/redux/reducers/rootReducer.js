import { combineReducers } from "redux";
import userReducer from "./userReducer";
import recipeReducer from "./recipeReducer";
import singlerecipereducer from "./singlerecipereducer";
import postReducer from "./postReducer";
import vegcategoryReducer from "./vegcategoryReducer";
import nonvegcategoryReducer from "./nonvegcategoryReducer";
import dessertcategoryReducer from "./dessertcategoryReducer";
import beveragescategoryReducer from "./beveragescategoryReducer";
const rootReducer = combineReducers({
    user: userReducer,
    recipes: recipeReducer,
    singlerecipe: singlerecipereducer,
    veg: vegcategoryReducer,
    nonveg: nonvegcategoryReducer,
    dessert: dessertcategoryReducer,
    beverage: beveragescategoryReducer,
    posts: postReducer
});

export default rootReducer;