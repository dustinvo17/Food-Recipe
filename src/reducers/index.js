import {combineReducers} from 'redux'
const storeInput = (state = [], action) => {
    switch (action.type) {
        case "INPUT":
            return action.payload;
        default:
            return state
    }

}
const fetchRecipe = (state = [], action) => {
    switch (action.type) {
        case "FETCH_RECIPE":
            return action.payload.hits
        default:
            return state
    }
}
export default combineReducers({storeInput: storeInput, fetchRecipe: fetchRecipe})
