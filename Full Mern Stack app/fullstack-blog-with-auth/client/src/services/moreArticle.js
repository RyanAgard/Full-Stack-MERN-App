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
export async function deleteCommentFromPost(commentId, postId) {
    console.log(commentId,postId)
    
    const axios = customAxiosWithAuth()
    try {
        await axios.delete(`/moreArticle/c/${commentId}`)
    } catch(err) {
        console.log(err.message)
    }
}
export async function updateCommentOfIdFromPost(comment, commentId, postId) {
    const axios = customAxiosWithAuth()
    try {
        await axios.put(`/moreArticle/${postId}/c/${commentId}`, comment)
    } catch(err) {
        console.log(err.message)
    }
}
export async function updatePost(id, post) {
    console.log(id,post)
    const axios = customAxiosWithAuth()
    try {
        
        const result=await axios.put(`/moreArticle/${id}`, post)
        console.log( result)
    } catch(err) {
        console.log(err.message)
    }
}
export async function createPost(post) {
    const axios = customAxiosWithAuth()
    try {
        console.log(post)
        const response = await axios.post('/moreArticle', post)
        return response.data
    } catch(err) {
        console.log(err.message)
        alert(err.response?.data?.error)
    }
}