import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import LocationListReducer from './reducers/LocationListReducer'
import ReviewsReducer from './reducers/ReviewsReducer'

const store = createStore(
    combineReducers({
        locationState: LocationListReducer,
        reviewsState: ReviewsReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))
)

export default store