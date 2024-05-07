import {
    FETCH_NONVEGETARIAN_RECIPES_REQUEST,FETCH_NONVEGETARIAN_RECIPES_SUCCESS,
    FETCH_NONVEGETARIAN_RECIPES_FAILURE
} from '../actions/nonvegcategoryactions';

const initialState = {
    loading: false,
    nonvegetarian: [],
    error: ''
}

const nonvegReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_NONVEGETARIAN_RECIPES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_NONVEGETARIAN_RECIPES_SUCCESS:
            return {
                ...state,
                loading: false,
                nonvegetarian: action.payload,
                error: ''
            }
        case FETCH_NONVEGETARIAN_RECIPES_FAILURE:
            return {
                ...state,
                loading: false,
                nonvegetarian: [],
                error: action.payload
            }
        default:
            return state;
    }
}

export default nonvegReducer;