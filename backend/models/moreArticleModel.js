const mongoose = require('mongoose')

const Schema = mongoose.Schema

const moreArticleSchema = new Schema({
   title :{type: String, required: true},
   img: {type: String, required: true},
   paragraph:{type:String,required:true},
   user: { type: String, required: true },
   comment:[
      {
         user:{type:String},
         body:{type:String}
      }
   ] 
}, { timestamps: true })

const moreArticles= mongoose.model('moreArticle', moreArticleSchema)

module.exports = moreArticles