import fs from "fs/promises";
import sharp from "sharp";

export const converter = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "Файл обов’язковий для завантаження" });
        }

        const inputFilePath = req.file.path;
        const selectedFormat = req.body.format;
        if (!selectedFormat) {
            return res.status(400).json({ message: "Необхідно вибрати формат" });
        }

        const outputFilePath = inputFilePath.replace(/\.[^/.]+$/, `.${selectedFormat}`);

        await sharp(inputFilePath)
            .toFormat(selectedFormat)
            .toFile(outputFilePath);

        console.log("Файл успішно конвертовано");

        res.download(outputFilePath, async (err) => {
            if (err) {
                console.error("Помилка при завантаженні файлу:", err);
                return res.status(500).json({ message: "Помилка при завантаженні файлу" });
            }

            try {
                if (await fileExists(inputFilePath)) {
                    await fs.unlink(inputFilePath);
                    console.log("Видалено:", inputFilePath);
                }

                if (await fileExists(outputFilePath)) {
                    await fs.unlink(outputFilePath);
                    console.log("Видалено:", outputFilePath);
                }
            } catch (unlinkError) {
                console.error("Помилка при видаленні файлів:", unlinkError.message);
            }
        });

    } catch (error) {
        console.error("Щось пішло не так:", error);
        res.status(500).json({ message: "Щось пішло не так" });
    }
};

const fileExists = async (path) => {
    try {
        await fs.access(path);
        return true;
    } catch {
        return false;
    }
};

