const initialState = {
    recipeData: [],
    error: null,
    
};

const recipeReducer = (state = initialState,action) => {
    switch(action.type) {
        case 'FETCH_SUCCESS':
            return {
                ...state,
                recipeData: action.payload,
                error: null,
            };
        case 'FETCH_FAILURE':
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
}
export default recipeReducer;