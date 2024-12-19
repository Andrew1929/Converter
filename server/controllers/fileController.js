import fs from "fs"; 
import sharp from "sharp";

export const converter = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "Файл обов’язковий для завантаження" });
        }

        const inputFilePath = req.file.path; // Шлях до завантаженого файлу
        const selectedFormat = req.body.format; // Формат, переданий із фронтенду

        if (!selectedFormat) {
            return res.status(400).json({ message: "Необхідно вибрати формат" });
        }

        const outputFilePath = inputFilePath.replace(/\.[^/.]+$/, `.${selectedFormat}`); // Використовуємо вибраний формат

        // Виконання конвертації
        await sharp(inputFilePath)
            .toFormat(selectedFormat)
            .toFile(outputFilePath);

        // Відправка результату назад клієнту
        res.download(outputFilePath, async (err) => {
            if (err) {
                console.error("Помилка при завантаженні файлу:", err);
                return res.status(500).json({ message: "Помилка при завантаженні файлу" });
            }

            try {
                // Переконаємось, що файли не використовуються
                setTimeout(async () => {
                    try {
                        // Видалення тимчасових файлів після того, як файл завантажений
                        if (fs.existsSync(inputFilePath)) {
                            fs.unlinkSync(inputFilePath);
                        }
                        if (fs.existsSync(outputFilePath)) {
                            fs.unlinkSync(outputFilePath);
                        }
                    } catch (unlinkError) {
                        console.error("Помилка при видаленні файлів:", unlinkError.message);
                    }
                }, 500); // Затримка перед видаленням файлів
            } catch (unlinkError) {
                console.error("Помилка при видаленні файлів:", unlinkError.message);
            }
        });
    } catch (error) {
        console.error("Щось пішло не так:", error);
        res.status(500).json({ message: "Щось пішло не так" });
    }
};
