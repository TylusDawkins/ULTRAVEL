const { LOCATION_LOADING_TYPE, GET_LOCATION_LIST} = require('../types')

const iState = {
    locationList: [],
    locationsLoading: ''
}

const LocationListReducer = (state = iState, action) => {
    switch (action.type) {
        case LOCATION_LOADING_TYPE:
            return {...state, locationsLoading: action.payload}
        case GET_LOCATION_LIST:
            return { ...state, locationList: action.payload}
        default:
            return { ...state }
    }
}

export default LocationListReducer
