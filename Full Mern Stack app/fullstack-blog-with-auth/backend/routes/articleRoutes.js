const express = require('express')

const router = express.Router()

const Article = require('../models/articleModel')
const articlecontroller =require('../controllers/articleController')
const GamingData = require('../models/article')
// seed 

router.get('/seed',articlecontroller.seed)


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

router.post("/:articleid",articlecontroller.addcomment)

module.exports = router