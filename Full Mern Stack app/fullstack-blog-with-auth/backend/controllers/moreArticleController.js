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
        await article.deleteMany({ _id: { 
            // equals/matches any comment ids in this array
            $in: article.comments 
        }})
        res.status(200).json({ message: 'deleted successfully' })
    } catch(err) {
        res.status(400).json({ error: err.message })
    }
}
