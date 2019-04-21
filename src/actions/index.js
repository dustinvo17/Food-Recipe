import api from '../api/api'
export const fetchRecipe = () => async(dispatch, getState) => {
    const userInput = getState().storeInput
    const response = await api.get('/search', {
        params: {
            q: userInput,
            app_id: "78135600",
            app_key: "6d0c8af40ccb3cd8b3fa80098dbfbf27"
        }
    })
    dispatch({type: "FETCH_RECIPE", payload: response.data})
}

export const storeInput = (userInput) => {
    return {type: "INPUT", payload: userInput}
}
