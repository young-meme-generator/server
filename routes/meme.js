const router = require('express').Router()
const MemeController = require('../controllers/memeController')

router.get('/', MemeController.get_memes)


module.exports = router