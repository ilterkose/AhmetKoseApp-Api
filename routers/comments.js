const express = require('express')
const router = express.Router()
let Comment = require('../models/comment.model')


router.route('/').get(async (req,res) =>{
    try{
        const comments = await Comment.find()
        res.json(comments)
    }catch(e){
        res.status(400).send()
    }
})

router.route('/add').post( async (req,res) => {
    let username = req.body.username
    let comment = req.body.comment

    const newComment = new Comment({
        username,
        comment
    }) 

    try {
        await newComment.save()
        res.json('comment added')
    } catch(e) {
        res.status(400).json('Error' , error)
    }

})

module.exports = router