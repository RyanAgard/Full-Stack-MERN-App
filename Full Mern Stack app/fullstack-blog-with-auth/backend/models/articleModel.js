const mongoose = require('mongoose')

const Schema = mongoose.Schema

const articleSchema = new Schema({
   img: {type: String, required: true},
   paragraph:{type:String,required:true},
}, { timestamps: true })

const Article= mongoose.model('article', articleSchema)

module.exports = Article