import { Router } from "express";
import multer from "multer";
import { converter } from "../controllers/fileController.js";

const router = Router();

// Налаштування для зберігання файлів
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads'); // Директорія для завантаження
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // Унікальне ім'я файлу
    }
});

const upload = multer({ storage });

router.post(
    '/upload-file',
    upload.single('file'), 
    converter    
);

export default router;