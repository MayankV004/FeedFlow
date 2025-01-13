const multer = require('multer');
const crypto = require('crypto');
const path = require('path');
// disk Storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/uploads')
    },
    filename: function (req, file, cb) {
        crypto.randomBytes(12 , (err , buffer)=>{ // buffer is name of file
            const fn = buffer.toString("hex") + path.extname(file.originalname)
            cb(null, fn);
        })
    }
})

// Export upload Variable 
const upload = multer({ storage: storage })

module.exports = upload;