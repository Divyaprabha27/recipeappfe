import {
    FETCH_BEVERAGES_RECIPES_REQUEST,FETCH_BEVERAGES_RECIPES_SUCCESS,
    FETCH_BEVERAGES_RECIPES_FAILURE
} from '../actions/beveragescategoryactions';

const initialState = {
    loading: false,
    beverages: [],
    error: ''
}

const beveragesReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_BEVERAGES_RECIPES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_BEVERAGES_RECIPES_SUCCESS:
            return {
                ...state,
                loading: false,
                beverages: action.payload,
                error: ''
            }
        case FETCH_BEVERAGES_RECIPES_FAILURE:
            return {
                ...state,
                loading: false,
                beverages: [],
                error: action.payload
            }
        default:
            return state;
    }
}

export default beveragesReducer;