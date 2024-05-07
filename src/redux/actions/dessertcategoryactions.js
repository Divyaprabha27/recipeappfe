import instance from '../../components/Services/instance';

export const FETCH_DESSERT_RECIPES_REQUEST = 'FETCH_DESSERT_RECIPES_REQUEST';
export const FETCH_DESSERT_RECIPES_SUCCESS = 'FETCH_DESSERT_RECIPES_SUCCESS';
export const FETCH_DESSERT_RECIPES_FAILURE = 'FETCH_DESSERT_RECIPES_FAILURE';

export const fetchDessertRecipes = () => {
    return async (dispatch) => {
        dispatch({ type: FETCH_DESSERT_RECIPES_REQUEST });
        try {
            const response = await instance.protectedInstance.post('/recipes/desserts', {category: 'desserts'})
            dispatch({
                type: FETCH_DESSERT_RECIPES_SUCCESS,
                payload: response.data
            })
        }catch(error) {
            dispatch({
                type: FETCH_DESSERT_RECIPES_FAILURE,
                payload: error.message
            })
        }
    };
};
