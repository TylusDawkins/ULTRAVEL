const { ADD_AUTHOR, ADD_RATING, ADD_TEXT, ADD_LOCATION} = require('../types')
const iState = {
    author: '',
    rating: '',
    text: '',
    location: ''
}
const FormReducer = (state = iState, action) => {
    
    switch (action.type) {
        case ADD_AUTHOR:
            return { ...state, author: action.payload }
        case ADD_RATING:
            return { ...state, rating: action.payload }
        case ADD_TEXT:
            return { ...state, text: action.payload }
        case ADD_LOCATION:
            return { ...state, location: action.payload }
        default: 
            return { ...state }
    }
}
export default FormReducer