import {
    FETCH_DESSERT_RECIPES_REQUEST,FETCH_DESSERT_RECIPES_SUCCESS,
    FETCH_DESSERT_RECIPES_FAILURE
} from '../actions/dessertcategoryactions';

const initialState = {
    loading: false,
    desserts: [],
    error: ''
}

const dessertReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DESSERT_RECIPES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_DESSERT_RECIPES_SUCCESS:
            return {
                ...state,
                loading: false,
                desserts: action.payload,
                error: ''
            }
        case FETCH_DESSERT_RECIPES_FAILURE:
            return {
                ...state,
                loading: false,
                desserts: [],
                error: action.payload
            }
        default:
            return state;
    }
}

export default dessertReducer;