import Axios from 'axios'

const Client = Axios.create({ baseURL: `https://localhost:3001` })

export default Client