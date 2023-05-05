const Posts = require('../models/postModel')


const posts = require('../models/posts')
const moreArticles = require('../models/moreArticleModel')


module.exports.index = async (req, res) => {
    try {
        const posts = await Posts.find().sort({ createdAt: 1 })
        res.status(200).json(posts)
    } catch(err) {
        res.status(400).json({ error: err.message })
    }
}

module.exports.delete = async (req, res) => {
    try {
        // first find the post, store it in a variable, then delete it from database
        const post = await moreArticles.findByIdAndDelete(req.params.id)
        // delete all comments where the comment id 
        await moreArticles.deleteMany({ _id: { 
            // equals/matches any comment ids in this array
            $in: post.comment 
        }})
        res.status(200).json({ message: 'deleted successfully' })
    } catch(err) {
        res.status(400).json({ error: err.message })
    }
}

module.exports.update = async (req, res) => {
    try {
        // add a third argument to the update { new: true } to return the new updated version of the document
        const updatedPost = await moreArticles.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(updatedPost)
    } catch(err) {
        res.status(400).json({ error: err.message })
    }
}

// module.exports.create = async (req, res) => {
//     try {
//         const post = await moreArticles.create(req.body)
//         res.status(200).json(post )
//     } catch(err) {
//         res.status(400).json({ error: err.message })
//     }
// }

module.exports.show = async (req, res) => {
    try {
        console.log("show",req.params.id)
        // populate replaces the ids with actual documents/objects we can use
        const post = await Posts.findById(req.params.id).populate('comments')
        res.status(200).json(post)
    } catch(err) {
        res.status(404).json({ error: err.message })
    }
}


