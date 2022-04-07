import {
    GetLocationList,
    GetReviews,
    AddReview
} from '../../services/LocationService'
import { ADD_REVIEW, GET_LOCATION_LIST, GET_REVIEWS } from '../types'

export const LoadLocations = () => {
    return async (dispatch) => {
        try {
            const locations = await GetLocationList()
            dispatch({
                type: GET_LOCATION_LIST,
                payload: locations.locations
            })
        } catch (error) {
            throw error
        }
    }
}
export const LoadReviews = (id) => {
    return async (dispatch) => {
        try {
            const reviews = await GetReviews(id)
            dispatch({
                type: GET_REVIEWS,
                payload: reviews
            })
        } catch (error) {
            throw error
        }
    }
}

export const WriteReview = (id) => {
    return async (dispatch) => {
        try {
            const review = await AddReview(id)
            dispatch({
                type: ADD_REVIEW,
                payload: review
            })
        } catch (error) {
            throw error
        }
    }
}
