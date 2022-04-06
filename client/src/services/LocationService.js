import Client from './'

export const GetLocationList = async () => {
    try {
        const res = await Client.get(`/`)

        return res.data
    } catch (error) {
        throw error
    }
}

export const GetReviews = async (id) => {
    try {
        const res = await Client.get(`/${id}`)
        return res.data
    } catch (error) {
        throw error
    }
}