const initialState = {
    singlerecipeData: [],
};

const singlerecipereducer = (state = initialState,action) => {
    switch (action.type) {
        case 'FETCH_RECIPE_SUCCESS' :
            return {
                ...state,
                singlerecipeData: action.payload,
            }
        default: {
            return state;
        }
    }
}
export default singlerecipereducer;