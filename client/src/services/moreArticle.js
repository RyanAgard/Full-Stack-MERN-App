import { customAxios, customAxiosWithAuth } from './api'

export async function getAllmoreArticle() {
    const axios = customAxios()
    try {
        const response = await axios.get('/moreArticle')
        return response.data
    } catch (err) {
        console.log(err.message)
        return []
    }
}

export async function getmoreArticle(id,) {
    const axios = customAxios()
    try {
        const response = await axios.get(`/moreArticle/${id}`,)
        return response.data
    } catch (err) {
        console.log(err.message)
    }
}

export async function updateCommentOfIdFromPost(comment, commentId, postId) {
    const axios = customAxiosWithAuth()
    try {
        await axios.put(`/moreArticle/${postId}/c/${commentId}`, comment)
    } catch (err) {
        console.log(err.message)
    }
}
export async function updatePost(id, post) {
    console.log(id, post)
    const axios = customAxiosWithAuth()
    try {

        const result = await axios.put(`/moreArticle/${id}`, post)
        console.log(result)
    } catch (err) {
        console.log(err.message)
    }
}
export async function createPost(post) {
    const axios = customAxiosWithAuth()
    try {
        console.log(post)
        const response = await axios.post('/moreArticle', post)
        return response.data
    } catch (err) {
        console.log(err.message)
        alert(err.response?.data?.error)
    }
}

export async function deleteArticle(id) {
    const axios = customAxiosWithAuth()
    try {
        await axios.delete(`/moreArticle/${id}`)
    } catch (err) {
        console.log(err.message)
    }
}
// export async function createCommentForPost(comment, postId) {
//     const axios = customAxiosWithAuth()
//     try {
//         console.log(comment)
//         const response = await axios.post(`/comments${postId}`,comment)
//         return response.data
//     } catch (err) {
//         console.log(err.message)
//     }
// }
export async function deleteCommentFromPost(commentId, postId) {
    console.log(commentId, postId)

    const axios = customAxiosWithAuth()
    try {
        await axios.delete(`/moreArticle/${postId}/c/${commentId}`)
    } catch (err) {
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
export async function addcomment(comment, postId) {
    const axios = customAxiosWithAuth()
    console.log(postId)
    try {
        console.log(comment)
        const response = await axios.post(`/moreArticle/${postId}`,comment)
        return response.data
    } catch (err) {
        console.log(err.message)
    }
}