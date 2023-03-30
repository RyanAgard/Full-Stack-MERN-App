const express = require('express')

const router = express.Router()

const Article = require('../models/articleModel')
const articlecontroller =require('../controllers/articleController')
const GamingData = require('../models/article')
// seed 

router.get('/seed', async(req, res)=>{
    
 GamingData= [
  {  img: "https://gamingbolt.com/wp-content/uploads/2023/03/resident-evil-4-remake-1-1024x576.jpg" ,
  paragraph: "Resident Evil 4 Remake launched worldwide last week and was met with widespread acclaim from critics and players alike. Unsurprisingly, that level of success is being reflected in the game’s sales as well.",
     title:'Resident Evil 4 Remake Sold Over 3 Million Units in its First Two Days'}
    // {

    // }

];



  
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