import instance from '../../components/Services/instance';

export const FETCH_BEVERAGES_RECIPES_REQUEST = 'FETCH_BEVERAGES_RECIPES_REQUEST';
export const FETCH_BEVERAGES_RECIPES_SUCCESS = 'FETCH_BEVERAGES_RECIPES_SUCCESS';
export const FETCH_BEVERAGES_RECIPES_FAILURE = 'FETCH_BEVERAGES_RECIPES_FAILURE';

export const fetchBeveragesRecipes = () => {
    return async (dispatch) => {
        dispatch({ type: FETCH_BEVERAGES_RECIPES_REQUEST });
        try {
            const response = await instance.protectedInstance.post('/recipes/beverages', {category: 'beverages'})
            dispatch({
                type: FETCH_BEVERAGES_RECIPES_SUCCESS,
                payload: response.data
            })
        }catch(error) {
            dispatch({
                type: FETCH_BEVERAGES_RECIPES_FAILURE,
                payload: error.message
            })
        }
    };
};
