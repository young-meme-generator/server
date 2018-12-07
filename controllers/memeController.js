const axios = require('axios')


module.exports = {
    getOneMeme: (req, res) => {
        axios({
            method: 'GET',
            url: 'https://api.imgflip.com/get_memes'
        })
        .then(function (response) {
            let pos = Math.floor(Math.random() * 100)
            let meme = response.data.data.memes[pos]

            res.status(200).json({
                meme: meme
            })
        })
        .catch(err => {
            res.status(400).json({
                msg: err.messsage
            })
        })
    },
    create_caption: (req, res) => {
        axios({
            method: 'POST',
            url: 'https://api.imgflip.com/caption_image',
            data: {
                template_id: req.body.templateId,
                username: req.body.username,
                password: req.body.password,
                text0: req.body.caption
            }
        })
            .then(response => {
                res.status(200).json({
                    response
                })
            })
            .catch(err => {
                errors: err.messsage
            })
    }
}