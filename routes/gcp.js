const router = require('express').Router();
const GcpController = require('../controllers/gcpController');
const upload = require('../middlewares/multer.js');
const {uploadSingle} = require('../middlewares/cloud.js');

router.post('/', upload.single('fileTarget'), uploadSingle, GcpController.uploadGcp);

module.exports = router;