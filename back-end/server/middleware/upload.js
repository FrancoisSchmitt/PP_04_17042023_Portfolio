const path = require('path')
const multer = require('multer')


const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, '../uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({
    storage: storage,
    fileFilter: function (req, file, callback) {
        if (
            file.mimetype == "image/png" ||
            file.mimetype == "image/jpg"
        ) {
            callback(null, true)
        }
        else {
            console.log("only jpg and png authorize")
            callback(null, false)
        }
    },
    limits:{
        fileSize: 1024 * 1024 * 2
    }
})

module.exports = upload 