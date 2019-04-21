import api from '../api/api'
export const fetchRecipe = () => async(dispatch, getState) => {
    const userInput = getState().storeInput
    const response = await api.get('/search', {
        params: {
            q: userInput,
            app_id: "b9276d86",
            app_key: "d451446f8723e11ecf53c2b6384890c4"
        }
    })
    dispatch({type: "FETCH_RECIPE", payload: response.data})
}

export const storeInput = (userInput) => {
    return {type: "INPUT", payload: userInput}
}
