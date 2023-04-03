import { customAxios, customAxiosWithAuth } from './api'

export async function getAllmoreArticle() {
    const axios = customAxios()
    try {
        const response = await axios.get('/moreArticle')
        return response.data
    } catch(err) {
        console.log(err.message)
        return []
    }
}

export async function getmoreArticle(id) {
    const axios = customAxios()
    try {
        const response = await axios.get(`/moreArticle/${id}`)
        return response.data
    } catch(err) {
        console.log(err.message)
    }
}
