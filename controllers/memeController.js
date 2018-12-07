const axios = require('axios')
const request = require('request')
const download = require('image-downloader')

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
                username: 'RobertArifin',
                password: '12345',
                text0: 'test',
                text1: 'tai'
            }
        })
        .then(response => {
            console.log(response.data, '---')
            res.status(200).json({
                response
            })
        })
        .catch(err => {
            console.log(err)
           res.status(500).json( {
               err: 'Please try again'
           })
        })
    },

    findMeme: (req,res) => {
        let options = {
            method: 'GET',
            url: 'http://version1.api.memegenerator.net//Instances_Search',
            headers: {
              'User-Agent': 'request'
            },
            qs: {
                q: req.body.value,
                apiKey: 'c68823d6-2cac-45cc-9af4-bbd3caaf22c6',
                pageSize: 25
            }
        }

        request(options, (error, response, body) => {
            if (error) {
                res.status(500).json( {
                    err: 'Pls try again'
                })
            } else {
                body = JSON.parse(body)
                let pos = Math.floor(Math.random() * 25)
                let randomMeme = body.result[pos]

                res.status(200).json( {
                    meme: randomMeme,
                    allMeme: body.result
                })
            }
        })
    },

    download: (req, res) => {
        options = {
            url: req.body.url,
            dest: './photo.jpg'
          }

          console.log('woi')
          console.log(options)
        download.image(options)
        .then(({ filename, image }) => {
            res.status(201).json( {
                msg: 'Image successfully download'
            })
        })
        .catch((err) => {
            console.log(err);
            
            res.status(500).json( {
                msg: 'Failed to save the image'
            })
        })
    }
}