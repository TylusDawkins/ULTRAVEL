import {
    GetLocationList,
    GetReviews
} from '../../services/LocationService'
import { GET_LOCATION_LIST, GET_REVIEWS } from '../types'

export const LoadLocations = () => {
    return async (dispatch) => {
        try {
            const locations = await GetLocationList()
            dispatch({
                type: GET_LOCATION_LIST,
                payload: locations.results
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