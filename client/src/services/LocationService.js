import Client from './'

export const GetLocationList = async () => {
    try {
        const res = await Client.get(`/`)
        console.log(res.data)
        return res.data
    } catch (error) {
        throw error
    }
}

export const GetLocation = async (id) => {
    try {
        const res = await Client.get(`/${id}`)
        return res.data
    } catch (error) {
        throw error
    }
}

export const GetReviews = async (id) => {
    try {
        const res = await Client.get(`/${id}/reviews`)
        console.log(res)
        return res.data
    } catch (error) {
        throw error
    }
}

export const AddReview = async (id, postReview) => {
    try {
        const res = await Client.post(`/${id}`, postReview)
export const AddReview = async (id) => {
    try {
        const res = await Client.post(`/${id}`, {
            rating: rating,
            text: text,
            author: author 

        })
        console.log(res)
        return res.data
    } catch (error) {
        throw error
    }
}

