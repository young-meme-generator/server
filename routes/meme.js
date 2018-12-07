const router = require('express').Router()
const MemeController = require('../controllers/memeController')

router.get('/', MemeController.getOneMeme)


module.exports = router