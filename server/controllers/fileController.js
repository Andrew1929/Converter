import fs from "fs";

export const converter = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'Файл обов’язковий для завантаження' });
        }

        const inputFilePath = req.file.path; // Шлях до завантаженого файлу
        const outputFilePath = inputFilePath.replace(/\.[^/.]+$/, '.png'); // Змінюємо розширення на .png

        // Емуляція конвертації (реально додай бібліотеку, якщо треба справжнє перетворення)
        fs.copyFileSync(inputFilePath, outputFilePath);

        // Відправка результату назад клієнту
        res.download(outputFilePath, err => {
            if (err) {
                console.error(err);
                res.status(500).json({ message: 'Помилка при завантаженні файлу' });
            }

            // Видалення тимчасових файлів після відправки
            fs.unlinkSync(inputFilePath);
            fs.unlinkSync(outputFilePath);
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Щось пішло не так' });
    }
}