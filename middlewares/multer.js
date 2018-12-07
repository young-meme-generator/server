const multer = require('multer');
const upload = multer(
    {
        storage: multer.MemoryStorage,
    },
);

module.exports = upload;