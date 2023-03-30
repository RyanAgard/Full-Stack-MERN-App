const express = require('express')

const router = express.Router()

const Article = require('../models/articleModel')
const articlecontroller =require('../controllers/articleController')
const GamingData = require('../models/article')
// seed 

router.get('/seed', async(req, res)=>{
    
    const NewData =await Article.create(GamingData)
    res.json(NewData)
})


// index
router.get('/', articlecontroller.index)

// // delete
// router.delete('/:id', article.delete)

// // update
// router.put('/:id',  article.update)

// // create
// router.post('/',  article.create)

// // show
// router.get('/:id', article.show)

module.exports = router