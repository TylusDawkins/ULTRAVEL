const { ADD_REVIEW } = require('../types')
const iState = {
    userReview: {}
    
}
const FormReducer = (state = iState, action) => {
    switch (action.type) {
        case ADD_REVIEW:
            return { ...state, reviews: action.payload }
        default: 
            return { ...state }
    }
}
export default FormReducer