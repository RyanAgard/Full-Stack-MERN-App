const express = require('express')

const router = express.Router()

const moreArticle = require('../models/moreArticleModel')
const moreArticleController =require('../controllers/moreArticleController')
const GamingDatabase = require('../models/moreArticle')
// seed 

router.get('/seed', async(req, res)=>{
    
    const NewData =await moreArticle.create(GamingDatabase)
    res.json(NewData)
})


// index
router.get('/', moreArticleController.index)


router.get('/:id', moreArticleController.show)

module.exports = router