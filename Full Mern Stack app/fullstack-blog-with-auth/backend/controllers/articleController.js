const article = require('../models/article');
const Article= require('../models/articleModel')

module.exports.seed = async (req, res) => {
    console.log("running")
    await Article.deleteMany({})
    await Article.create(article)
    res.redirect('/posts')
}

module.exports.addcomment = async (req, res) => {
    console.log(req.body)
    try {
      await Article.findByIdAndUpdate(req.params.articleid, {
        // push the req.body to the comments property/field of this post document
        $push: {
            comment: req.body
        }
    })
    res.redirect(`/posts/${req.params.articleid}`)
    } catch(err) { console.log(err.message)
        res.status(400).json({ error: err.message })
    }
}

module.exports.index = async (req, res) => {
    try {
        const article = await Article.find().sort({ createdAt: 1 })
        res.status(200).json(article)
    } catch(err) {
        res.status(400).json({ error: err.message })
    }
}



// module.exports.update = async (req, res) => {
//     try {
//         // add a third argument to the update { new: true } to return the new updated version of the document
//         const updatedPost = await Posts.findByIdAndUpdate(req.params.id, req.body, { new: true })
//         res.status(200).json(updatedPost)
//     } catch(err) {
//         res.status(400).json({ error: err.message })
//     }
// }

// module.exports.create = async (req, res) => {
//     try {
//         const post = await Posts.create(req.body)
//         res.status(200).json(post)
//     } catch(err) {
//         res.status(400).json({ error: err.message })
//     }
// }

// module.exports.show = async (req, res) => {
//     try {
//         // populate replaces the ids with actual documents/objects we can use
//         const post = await Article.findById(req.params.id).populate('comments')
//         res.status(200).json(post)
//     } catch(err) {
//         res.status(404).json({ error: err.message })
//     }
// }


