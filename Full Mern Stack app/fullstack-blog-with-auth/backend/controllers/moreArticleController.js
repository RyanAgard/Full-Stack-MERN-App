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

