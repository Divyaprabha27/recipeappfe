import instance from '../../components/Services/instance';

export const FETCH_VEGETARIAN_RECIPES_REQUEST = 'FETCH_VEGETARIAN_RECIPES_REQUEST';
export const FETCH_VEGETARIAN_RECIPES_SUCCESS = 'FETCH_VEGETARIAN_RECIPES_SUCCESS';
export const FETCH_VEGETARIAN_RECIPES_FAILURE = 'FETCH_VEGETARIAN_RECIPES_FAILURE';

export const fetchVegetarianRecipes = () => {
    return async (dispatch) => {
        dispatch({ type: FETCH_VEGETARIAN_RECIPES_REQUEST });
        try {
            const response = await instance.protectedInstance.post('/recipes/vegetarian', {category: 'vegetarian'})
            dispatch({
                type: FETCH_VEGETARIAN_RECIPES_SUCCESS,
                payload: response.data
            })
        }catch(error) {
            dispatch({
                type: FETCH_VEGETARIAN_RECIPES_FAILURE,
                payload: error.message
            })
        }
    };
};
