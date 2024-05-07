import instance from '../../components/Services/instance';

export const FETCH_NONVEGETARIAN_RECIPES_REQUEST = 'FETCH_NONVEGETARIAN_RECIPES_REQUEST';
export const FETCH_NONVEGETARIAN_RECIPES_SUCCESS = 'FETCH_NONVEGETARIAN_RECIPES_SUCCESS';
export const FETCH_NONVEGETARIAN_RECIPES_FAILURE = 'FETCH_NONVEGETARIAN_RECIPES_FAILURE';

export const fetchNonVegetarianRecipes = () => {
    return async (dispatch) => {
        dispatch({ type: FETCH_NONVEGETARIAN_RECIPES_REQUEST });
        try {
            const response = await instance.protectedInstance.post('/recipes/nonvegetarian', {category: 'non-vegetarian'})
            dispatch({
                type: FETCH_NONVEGETARIAN_RECIPES_SUCCESS,
                payload: response.data
            })
        }catch(error) {
            dispatch({
                type: FETCH_NONVEGETARIAN_RECIPES_FAILURE,
                payload: error.message
            })
        }
    };
};
