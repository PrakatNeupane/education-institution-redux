import axios from 'axios'

const apiEndPoint = 'http://universities.hipolabs.com/search?country=Australia'
export const fetchDataFromApi = () => {
    try {
        return axios.get(apiEndPoint).then(res => res.data)
    } catch (error) {
        return error.message
    }
}