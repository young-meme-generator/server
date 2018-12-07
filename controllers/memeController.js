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
    }

}