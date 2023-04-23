const moreArticle = require('../models/moreArticle');
const moreArticles= require('../models/moreArticleModel')

module.exports.seed = async (req, res) => {
    await moreArticles.deleteMany({})
    await moreArticles.create(moreArticle)
    res.redirect('/posts')
}


module.exports.index = async (req, res) => {
    try {
        const morearticle = await moreArticles.find().sort({ createdAt: 1 })
        res.status(200).json(morearticle)
    } catch(err) {
        res.status(400).json({ error: err.message })
    }
}

module.exports.show = async (req, res) => {
    console.log(req.params)
    try {
        // populate replaces the ids with actual documents/objects we can use
        const article = await moreArticles.findById(req.params.id)
        res.status(200).json(article)
    } catch(err) {
        console.log(err)
        res.status(404).json({ error: err.message })
    }
}
module.exports.delete = async (req, res) => {
    try {
        // first find the post, store it in a variable, then delete it from database
        const article = await moreArticles.findByIdAndDelete(req.params.id)
        // delete all comments where the comment id 
        await moreArticles.deleteMany({ _id: { 
            // equals/matches any comment ids in this array
            $in: article.comment
        }})
        res.status(200).json({ message: 'deleted successfully' })
    } catch(err) {
        res.status(400).json({ error: err.message })
    }

}
module.exports.addcomment = async (req, res) => {
    console.log(req.params)
    console.log(req.body)
    try {
      const updateArticle = await moreArticles.findByIdAndUpdate(req.params.articleid, {
        // push the req.body to the comments property/field of this post document
        $push: {
            comment: req.body
        }
    })
    console.log(updateArticle)
    res.status(200).json(updateArticle)
    } catch(err) { console.log(err.message)
        res.status(400).json({ error: err.message })
    }
}


module.exports.deleteComment = async (req, res) => {
    console.log(req.params.id)
    try {
        // first use the id to delete the comment from the comments collection
        await comment.findByIdAndDelete(req.params.id)
        // then use the post's id to find the post
        await moreArticles.findByIdAndUpdate(req.params.pid, {
            // and pull/remove the reference id (to the comment) from
            $pull: {
                // the comments array
                comment: req.params.id
            }
        })
        res.json({ message: 'deleted successfully' })
    } catch(err) {
        res.status(400).json({ error: err.message })
    }
}


module.exports.updateArticle = async (req, res) => {
    try { console.log("update")
        // add a third argument to the update { new: true } to return the new updated version of the document
        const updatedPost = await moreArticles.findByIdAndUpdate(req.params.id, req.body, { new: true })
        console.log(updatedPost,"yo")
        res.status(200).json(updatedPost)
    } catch(err) {
        res.status(400).json({ error: err.message })
    }
}



module.exports.createPost= async (req, res) => {
    try {console.log("post")
         await moreArticles.create(req.body)
    } catch(err) {
        console.log(err.message)
       
    }
}
module.exports.createComment = async (req, res) => {
    try {
        // create a document in our comments collection
        const comment = await Co.create(req.body)
        // find the post 
        await Posts.findByIdAndUpdate(req.params.pid, {
            // and push the new comment document's id
            $push: {
                // to the post's comments field/property
                comments: comment._id
            }
        })
        res.status(200).json(comment)
    } catch(err) {
        res.status(400).json({ error: err.message })
    }
}

module.exports.deleteComment = async (req, res) => {
    console.log(req.params.id,"hey")
    try {
        // first use the id to delete the comment from the comments collection
        await moreArticles.findByIdAndDelete(req.params.id)
        // then use the post's id to find the post
      const result =await moreArticles.findByIdAndUpdate(req.params.pid, {
            // and pull/remove the reference id (to the comment) from
            $pull: {
                // the comments array
                comment: {_id:req.params.id}
            }
        })
        console.log(result)
        res.json({ message: 'deleted successfully' })
    } catch(err) {
        console.log(err.message)
        res.status(400).json({ error: err.message })
    }
}

module.exports.indexComment = async (req, res) => {
    try {
        // target the comments property 
        const post = await Posts.findById(req.params.pid).populate('comments')
        res.json(post.comments)
    } catch(err) {
        res.status(400).json({ error: err.message })
    }
}

module.exports.showComment = async (req, res) => {
    try {
        // find the post and filter it's comments property array
        const comment = await moreArticles.findById(req.params.id)
        res.json(comment)
    } catch(err) {
        res.status(400).json({ error: err.message })
    }
}

module.exports.updateComment = async (req, res) => {
    try {
        // update a comment by updating an item in the comments property in post
        await moreArticles.findByIdAndUpdate(req.params.id, req.body)
        res.json({ message: 'updated successfully' })
    } catch(err) {
        res.status(400).json({ error: err.message })
    }
}