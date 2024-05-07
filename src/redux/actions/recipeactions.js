import axios from "axios"
import instance from "../../components/Services/instance"
export const fetchRecipeData = () => {
    return async (dispatch) => {
        try {
            const response = await instance.protectedInstance.get('/recipes/')
            const recipeData = response.data;

            dispatch({
                type: 'FETCH_SUCCESS',
                payload: recipeData,
            })
        }catch(error) {
            console.log('Error fetching data',error)
            dispatch({
                type: 'FETCH_FAILURE',
                payload: error.message,
            })
        }    

    }
}
