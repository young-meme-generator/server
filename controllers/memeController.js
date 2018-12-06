const axios = require('axios')


module.exports = {
    get_memes: (req, res) => {
        axios({
            method: 'GET',
            url: 'https://api.imgflip.com/get_memes'
        })
            .then(function (response) {
                console.log(response.data.data)
                res.status(200).json({
                    data: response.data.data
                })
            })
            .catch(err => {
                res.status(400).json({
                    msg: err.messsage
                })
            })
    }

}