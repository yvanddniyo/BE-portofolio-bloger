import multer from "multer"

const storage = multer.diskStorage({
    destination: function(req, res, cb) {
        cb(null, './uploads')
    },
    filename: function(req, file, cb)  {
        cb(null, new Date().toISOString() + '-' + file.originalname)
    }
})

// file validation

const fileFilter = (req:Request, file:any, cb:any) => {
if(file.mimetype === 'image/jpg' || file.mimetype ==='image/png') {
    cb(null, true)
}
else {
    cb({
        message: "Unsupport file format",
    },  false)

}
}

const upload:any = multer({
    storage: storage,
    limits: {fileSize:1024*1024},
    // fileFilter: fileFilter
})

export default upload