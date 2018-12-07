const router = require('express').Router()
const MemeController = require('../controllers/memeController')

router.get('/', MemeController.getOneMeme)
router.post('/', MemeController.create_caption)


module.exports = router