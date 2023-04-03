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
