const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
     username: {type:String, require:true },
     comment: {type: String, require:true},
     date: {type: Date,require:true}
    },{
        timestamps: true,
    })

const Comment = mongoose.model('Comments',commentSchema)

module.exports = Comment