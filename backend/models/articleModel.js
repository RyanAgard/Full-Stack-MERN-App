const mongoose = require('mongoose')

const Schema = mongoose.Schema

const articleSchema = new Schema({
   title :{type: String, required: true},
   img: {type: String, required: true},
   paragraph:{type:String,required:true},
   user: { type: String, required: true },
   comment:[
      {
         user:{type:String},
         text:{type:String},
        
      }
   ] 
}, { timestamps: true })

const Article= mongoose.model('article', articleSchema)

module.exports = Article