import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faFileVideo, faFileInvoice } from '@fortawesome/free-solid-svg-icons';
import { faImage, faFilePdf, faFileZipper, faFileAudio, faFileCode } from '@fortawesome/free-regular-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import backgroundImg1 from '../../style/images/Group-21.png';
import backgroundImg2 from '../../style/images/Group-22.png';
import { FileFormatMenu } from './FileFormatMenu';
import '../../style/MainPageComponentsStyle/BusinessCardStyle.css';

interface FileItem {
  file: File;
  icon: IconProp;
  format: string;
}

export const BusinessCard: React.FC = () => {
  const [files, setFiles] = useState<FileItem[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newFiles = Array.from(event.target.files).map((file) => ({
        file,
        icon: handleFileIcon(file.type),
        format: 'png', // Формат за замовчуванням
      }));
      setFiles((prevFiles) => [...prevFiles, ...newFiles]); // Додаємо нові файли до існуючих
    }
  };

  const handleFileIcon = (type: string): IconProp => {
    if (type.startsWith('image/')) {
      return faImage;
    } else if (type === 'application/pdf') {
      return faFilePdf;
    } else if (type.startsWith('video/')) {
      return faFileVideo;
    } else if (type.startsWith('audio/')) {
      return faFileAudio;
    } else if (type === 'application/zip' || type === 'application/x-zip-compressed') {
      return faFileZipper;
    } else if (type.startsWith('text/') || type === 'application/json') {
      return faFileCode;
    } else {
      return faFileInvoice;
    }
  };

  const formatFileSize = (size: number): string => {
    if (size < 1024) {
      return `${size} b`;
    } else if (size < 1024 * 1024) {
      return `${(size / 1024).toFixed(2)} kb`;
    } else if (size < 1024 * 1024 * 1024) {
      return `${(size / (1024 * 1024)).toFixed(2)} mb`;
    } else {
      return `${(size / (1024 * 1024 * 1024)).toFixed(2)} gb`;
    }
  };

  const handleFormatChange = (index: number, newFormat: string) => {
    setFiles((prevFiles) =>
      prevFiles.map((fileItem, i) =>
        i === index ? { ...fileItem, format: newFormat } : fileItem
      )
    );
  };

  const handleRemoveFile = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const handleUpdate = async () => {
    if (files.length === 0) {
      alert('Будь ласка, виберіть файли перед завантаженням!');
      return;
    }

    for (const fileItem of files) {
      const formData = new FormData();
      formData.append('file', fileItem.file);
      formData.append('format', fileItem.format);

      try {
        const response = await fetch('http://localhost:5000/upload-file', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          const error = await response.json();
          alert(`Помилка: ${error.message}`);
          continue;
        }

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = fileItem.file.name.replace(/\.[^/.]+$/, `.${fileItem.format}`);
        link.click();
        window.URL.revokeObjectURL(url);
      } catch (error) {
        console.error('Error:', error);
        alert('Щось пішло не так!');
      }
    }

    alert('Файли успішно конвертовано та завантажено!');
    setFiles([]); // Очищаємо список файлів після завантаження
  };

  return (
    <section className="business-card-section">
      <img id="business-card-section__first-img" src={backgroundImg1} alt="" />

      {files.length > 0 ? (
        <div className="business-card-section__file-info">
            
            <div className="business-card-section__title-and-description">
                <p className='business-card-section__title'>Конвертер файлів</p>

                <p className='business-card-section__description'>Конвертуйте файли в будь-який формат</p>
            </div>

            <div className="business-card-section__file-info-container">
                {files.map((fileItem, index) => (
                <div key={index} className="file-info-container">
                    <FontAwesomeIcon
                        className="file-info-container__icon"
                        icon={fileItem.icon}
                    />

                    <p className="file-info-container__name">{fileItem.file.name}</p>

                    <p className="file-info-container__text">в</p>

                    <FileFormatMenu
                        onSelect={(format) => handleFormatChange(index, format)}
                    />

                    <p className="file-info-container__text">
                        {formatFileSize(fileItem.file.size)}
                    </p>

                    <button
                        onClick={() => handleRemoveFile(index)}
                        className="file-info-container__close-btn"
                    >
                        <FontAwesomeIcon
                        className="file-info-container__close-btn--icon"
                        icon={faXmark}
                        />
                    </button>
                </div>
                ))}
            </div>

          <button onClick={handleUpdate} className="file-info-container__converter-btn">
            Конвертувати
          </button>
        </div>
      ) : (
        <div className="business-card-section__content">
          <p className="business-card-section__content-title">Конвертуй швидко та легко</p>

          <p className="business-card-section__content-text">
            Завантажте ваші файли, оберіть формати, і отримайте результат за кілька секунд.
            <br /> Наш сервіс підтримує найпопулярніші формати файлів, забезпечуючи високу якість
            конверсії.
            <br /> Почніть просто зараз – це швидко, зручно і безкоштовно!
          </p>

          <div className="business-card-section__file-upload">
            <label className="business-card-section__file-upload-label">
              <input
                name="file"
                type="file"
                onChange={handleFileChange}
                className="business-card-section__file-upload-input"
                placeholder="Виберіть файли"
                multiple 
              />
              <span className="business-card-section__file-upload-span">Виберіть файли</span>
            </label>
          </div>
        </div>
      )}

      <img id="business-card-section__second-img" src={backgroundImg2} alt="" />
    </section>
  );
};
