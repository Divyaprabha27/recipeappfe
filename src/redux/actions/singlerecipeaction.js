import instance from "../../components/Services/instance";
export const fetchRecipe = (id) => {
    return async (dispatch) => {
        try {
            const response = await instance.protectedInstance.get(`/recipes/${id}`);
            dispatch ({
                type: 'FETCH_RECIPE_SUCCESS',
                payload: response.data
            });
        }catch(error) {
            dispatch ({
                type: 'FETCH_RECIPE_FAILURE',
                payload: error.message
            })
        }
    }
}