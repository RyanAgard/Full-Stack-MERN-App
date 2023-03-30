const express = require('express')

const router = express.Router()

const Article = require('../models/articleModel')


// seed 
router.get('/seed', async(req, res)=>{
    
 GamingData = [
        {  img: "https://gamingbolt.com/wp-content/uploads/2020/04/ps5-xbox-series-x.jpg" ,
           paragraph: "In a year or two, when newer rendering approaches are developed, more rendering work will be expected to be pushed through the GPU pipelines, the developer says."
       },
    ];
    const NewData =await Article.create(GamingData)

    res.json(NewData)
})


// index
// router.get('/', article.index)

// // delete
// router.delete('/:id', article.delete)

// // update
// router.put('/:id',  article.update)

// // create
// router.post('/',  article.create)

// // show
// router.get('/:id', article.show)

module.exports = router