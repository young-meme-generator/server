const router = require('express').Router()
const MemeController = require('../controllers/memeController')

router.get('/', MemeController.getOneMeme)
router.post('/', MemeController.create_caption)
router.post('/find', MemeController.findMeme)


module.exports = router