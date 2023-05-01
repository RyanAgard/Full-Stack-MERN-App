const express = require('express')

const router = express.Router()

const moreArticle = require('../models/moreArticleModel')
const moreArticleController =require('../controllers/moreArticleController')
const GamingDatabase = require('../models/moreArticle')
const { authorize, confirmUserAccess } = require('../middleware/authMiddleware')
// seed 

router.get('/seed', async(req, res)=>{
    
    const NewData =await moreArticle.create(GamingDatabase)
    res.json(NewData)
})


// index
router.get('/', moreArticleController.index)

router.post("/:articleid",authorize,moreArticleController.addcomment)


router.put("/:id",authorize, confirmUserAccess,moreArticleController.updateArticle)

router.get('/:id', moreArticleController.show)


router.post('/', authorize, moreArticleController.createPost)


router.delete('/:id', authorize, confirmUserAccess, moreArticleController.delete)

router.delete('/:pid/c/:id', authorize, confirmUserAccess, moreArticleController.deleteComment)

module.exports = router