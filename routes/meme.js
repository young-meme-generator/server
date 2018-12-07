const router = require('express').Router()
const MemeController = require('../controllers/memeController')

router.get('/', MemeController.get_memes)
router.post('/', MemeController.create_caption)


module.exports = router