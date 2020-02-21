const express = require('express')
const router = express.Router()
let Comment = require('../models/comment.model')


router.route('/').get((req,res) =>{
    Comment.find()
    .then((comments) => res.json(comments))
    .catch((error) => res.status(400).json('Error' + error))
})

router.route('/add').post((req,res) => {
    let username = req.body.username
    let comment = req.body.comment

    const newComment = new Comment({
        username,
        comment
    }) 

    newComment.save()
    .then(()=>res.json('comment added'))
    .catch((error) => res.status(400).json('Error' + error))
})

module.exports = router