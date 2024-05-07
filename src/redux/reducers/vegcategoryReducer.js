import {
    FETCH_VEGETARIAN_RECIPES_REQUEST,FETCH_VEGETARIAN_RECIPES_SUCCESS,
    FETCH_VEGETARIAN_RECIPES_FAILURE
} from '../actions/vegcategoryactions';

const initialState = {
    loading: false,
    vegetarian: [],
    error: ''
}

const vegReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_VEGETARIAN_RECIPES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_VEGETARIAN_RECIPES_SUCCESS:
            return {
                ...state,
                loading: false,
                vegetarian: action.payload,
                error: ''
            }
        case FETCH_VEGETARIAN_RECIPES_FAILURE:
            return {
                ...state,
                loading: false,
                vegetarian: [],
                error: action.payload
            }
        default:
            return state;
    }
}

export default vegReducer;