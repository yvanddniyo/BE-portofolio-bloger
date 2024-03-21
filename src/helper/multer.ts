import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'assets/'); 
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); 
  },
});

const fileFilter = (req: any, file: any, cb: any) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false); 
  }
};

const upload = multer({ storage, fileFilter });

export default upload;