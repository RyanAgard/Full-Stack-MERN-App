import { customAxiosWithAuth } from './api'

export async function deleteCommentFromPost(commentId, postId) {
    console.log("delete")
    const axios = customAxiosWithAuth()
    try {
        await axios.delete(`/comments/${postId}/c/${commentId}`)
    } catch(err) {
        console.log(err.message)
    }
}

export async function createCommentForPost(comment,postId) {
    const axios = customAxiosWithAuth()
    try {
        console.log(comment)
        const response = await axios.post(`/moreArticle/${postId}`,comment)
        return response.data
    } catch(err) {
        console.log(err.message)
    }
}

export async function getCommentFromPost(commentId, postId) {
    const axios = customAxiosWithAuth()
    try {
        const response = await axios.get(`/comments/p/${postId}/c/${commentId}`)
        return response.data
    } catch(err) {
        console.log(err.message)
    }
}

export async function updateCommentOfIdFromPost(comment, commentId, postId) {
    const axios = customAxiosWithAuth()
    try {
        await axios.put(`/comments/p/${postId}/c/${commentId}`, comment)
    } catch(err) {
        console.log(err.message)
    }
}