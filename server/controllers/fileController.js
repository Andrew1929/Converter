import fs from "fs"; // Імпортуємо звичайний модуль fs
import sharp from "sharp";

export const converter = async (req, res) => {
    try {
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ message: "Файли обов’язкові для завантаження" });
        }

        const selectedFormats = req.body.format; // Формати, передані із фронтенду

        if (!selectedFormats || selectedFormats.length !== req.files.length) {
            return res.status(400).json({ message: "Необхідно вибрати формат для кожного файлу" });
        }

        // Проходимо по кожному файлу та обробляємо
        const downloadLinks = [];

        for (let i = 0; i < req.files.length; i++) {
            const file = req.files[i];
            const selectedFormat = selectedFormats[i];

            const inputFilePath = file.path; // Шлях до завантаженого файлу
            const outputFilePath = inputFilePath.replace(/\.[^/.]+$/, `.${selectedFormat}`); // Використовуємо вибраний формат

            // Виконання конвертації
            await sharp(inputFilePath)
                .toFormat(selectedFormat)
                .toFile(outputFilePath);

            // Додаємо посилання на завантаження файлу
            downloadLinks.push(outputFilePath);
        }

        // Відправляємо файли на клієнт
        res.zip({
            files: downloadLinks.map((file) => ({ path: file, name: file.split('/').pop() })),
            saveTo: './downloads/converted-files.zip',
            onZipComplete: () => {
                // Після завершення архівації видаляємо тимчасові файли
                downloadLinks.forEach((filePath) => {
                    fs.unlinkSync(filePath);
                });

                // Архів готовий, відправляємо його
                res.download('./downloads/converted-files.zip', 'converted-files.zip', (err) => {
                    if (err) {
                        console.error("Помилка при завантаженні файлу:", err);
                        return res.status(500).json({ message: "Помилка при завантаженні файлу" });
                    }

                    // Видалення архіву після завантаження
                    fs.unlinkSync('./downloads/converted-files.zip');
                });
            }
        });
    } catch (error) {
        console.error("Щось пішло не так:", error);
        res.status(500).json({ message: "Щось пішло не так" });
    }
};


