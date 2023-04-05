import { customAxios, customAxiosWithAuth } from './api'

export async function getAllPosts() {
    const axios = customAxios()
    try {
        const response = await axios.get('/posts')
        return response.data
    
    } catch(err) {   
        console.log(err.message)
        return []
    }
}

export async function getPost(id) {
    const axios = customAxios()

    try {
        console.log(id)
        const response = await axios.get(`/posts/${id}`)

        console.log(response.data)
        return response.data
    } catch(err) {
        console.log(err.message)
    }
}

export async function deletePost(id) {
    const axios = customAxiosWithAuth()
    try {
        await axios.delete(`/posts/${id}`)
    } catch(err) {
        console.log(err.message)
    }
}

// export async function createPost(post) {
//     const axios = customAxiosWithAuth()
//     try {
//         console.log(post)
//         const response = await axios.post('/posts', post)
//         return response.data
//     } catch(err) {
//         console.log(err.message)
//         alert(err.response?.data?.error)
//     }
// }

export async function updatePost(id, post) {
    console.log(id,post)
    const axios = customAxiosWithAuth()
    try {
        // await axios.put(`/posts/${id}`, post)
    } catch(err) {
        console.log(err.message)
    }
}