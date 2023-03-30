const express = require('express')

const router = express.Router()

const articleControl = require('../controllers/articleController')


// seed 
router.get('/seed', articleControl.seed)

// index
router.get('/', articleControl.index)

// delete
router.delete('/:id', confirmUserAccess, articleControl.delete)

// update
router.put('/:id',  confirmUserAccess, articleControl.update)

// create
router.post('/',  articleControl.create)

// show
router.get('/:id', articleControl.show)

module.exports = router