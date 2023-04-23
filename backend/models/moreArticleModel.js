const mongoose = require('mongoose')

const Schema = mongoose.Schema

const moreArticleSchema = new Schema({
   title :{type: String,},
   img: {type: String, },
   paragraph:{type:String,},
   user: { type: String, required: true },
   comment:[
      {
         user:{type:String,required: true},
         body:{type:String},
       
      }
   ] 
}, { timestamps: true })

const moreArticles= mongoose.model('moreArticle', moreArticleSchema)

module.exports = moreArticles