const jwt = require('jsonwebtoken')

const Post = require('../models/postModel')
const Comment = require('../models/commentModel')
const moreArticles = require('../models/moreArticleModel')

async function authorize(req, res, next) {
 console.log('authorize')
    try {
        // 1. Check if the request has a token
        let token = req.header("Authorization") // ->  "Bearer adshjh0249384la;sf"

        if (!token) { 
            throw new Error('No token provided')
        }

        token = token.replace("Bearer ", "") // -> "adshjh0249384la;sf"

        // 2. Check that the token is valid and not expired

        const payload = jwt.verify(token, process.env.JWT_SECRET)

        if (payload.error) {
            throw new Error(payload.error)
        }

        // 3. Attach the payload from the token to the request object (req)

        req.id = payload.id
        req.user = payload.user

        // 4. Move on to the requested route (next)

        next()

    } catch(err) {
        console.log(err)
        res.status(403).json({ error: err.message })
    }
}

async function confirmUserAccess(req, res, next) {
    console.log(req.user,req.params.id)
    try {
        console.log(req.baseUrl)
        let document;
        if (req.baseUrl.includes('post')) { 
            document = await Post.findOne({ _id: req.params.id, user: req.user })
        } else {
            document = await moreArticles.findOne({ _id: req.params.pid, user: req.user })
        }
      
        if (!document) {
            throw new Error('User did not create this document')
        }
        next()
    } catch(err) {
        console.log(err.message)
        res.status(403).json({ error: err.message })
    }
}

module.exports = {
    authorize,
    confirmUserAccess
}