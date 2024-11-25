import { FileFormatMenu } from './FileFormatMenu';
import {  useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faFileVideo, faFileInvoice } from '@fortawesome/free-solid-svg-icons';
import { faImage, faFilePdf, faFileZipper, faFileAudio, faFileCode } from '@fortawesome/free-regular-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import backgroundImg1 from '../../style/images/Group-21.png';
import backgroundImg2 from '../../style/images/Group-22.png';
import '../../style/MainPageComponentsStyle/BusinessCardStyle.css';

export const BusinessCard : React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null)
    const [selectedFileIcon, setSelectedFileIcon] = useState<IconProp | null>(null)

    const handleFileChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            setSelectedFile(file);
            const icon = handleFileIcon(file.type); 
            setSelectedFileIcon(icon);
        }
    }

    const handleFileIcon = (type: string): IconProp => {
        if (type.startsWith("image/")) {
            return faImage; 
        } else if (type === "application/pdf") {
            return faFilePdf;
        } else if (type.startsWith("video/")) {
            return faFileVideo; 
        } else if (type.startsWith("audio/")) {
            return faFileAudio; 
        } else if (type === "application/zip" || type === "application/x-zip-compressed") {
            return faFileZipper; 
        } else if (type.startsWith("text/") || type === "application/json") {
            return faFileCode; 
        } else {
            return faFileInvoice; 
        }
    };

    function formatFileSize(size: number): string {
        if (size < 1024) {
            return `${size} b`; 
        } else if (size < 1024 * 1024) {
            return `${(size / 1024).toFixed(2)} kb`; 
        } else if (size < 1024 * 1024 * 1024) {
            return `${(size / (1024 * 1024)).toFixed(2)} mb`;
        } else {
            return `${(size / (1024 * 1024 * 1024)).toFixed(2)} gb`; 
        }
    }

    const handleCloseForm = () => {
        setSelectedFile(null);
    }

    const handleUpdate = async () => {
        if(!selectedFile) {
            alert('Будь ласка, виберіть файл перед завантаженням!');
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const response = await fetch('http://localhost:5000/upload-file', {
                method: 'POST',
                body : formData,
            });

            if(!response.ok) {
                const error = await response.json();
                alert (`Помилка ${error.message}`);
                return;
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;

            link.download = selectedFile.name.replace(/\.[^/.]+$/, '.png');
            link.click();
            window.URL.revokeObjectURL(url);
            alert('Файл успішно конвертовано та завантажено!')
        } catch (error) {
            console.error('Error:', error);
            alert('Щось пішло не так!');
        }
    }
    
    return (
        <section className="business-card-section">
            <img id='business-card-section__first-img' src={backgroundImg1} alt="" />

            {selectedFile ? (  
                <div className='business-card-section__file-info'> 
                    <div className="business-card-section__file-info-container">
                        <FontAwesomeIcon className="business-card-section__file-icon" icon={selectedFileIcon!} />

                        <p className='business-card-section__file-name'>{selectedFile.name}</p>

                        <p className='business-card-section__file-info--text'>в</p>

                        <FileFormatMenu/>

                        <p className='business-card-section__file-info--text'>{formatFileSize(selectedFile.size)}</p>

                        <button onClick={handleCloseForm} className='business-card-section__close-btn'>
                            <FontAwesomeIcon  className='business-card-section__close-btn--icon' icon={faXmark} />
                        </button>
                    </div>

                    <button onClick={handleUpdate} className='business-card-section__converter-btn'>Конвертувати</button>
                </div>
            ) : (
                <div className="business-card-section__content">
                    <p className='business-card-section__content-title'>Конвертуй швидко та легко</p>

                    <p className='business-card-section__content-text'>  Завантажте ваш файл, оберіть формат, і отримайте результат за кілька секунд. 
                    <br/> Наш сервіс підтримує найпопулярніші формати файлів, забезпечуючи високу якість конверсії. 
                    <br/> Почніть просто зараз – це швидко, зручно і безкоштовно!</p>
                    
                    <div className="business-card-section__file-upload">
                        <label className='business-card-section__file-upload-label'>
                            <input 
                                name="file"
                                type="file"
                                onChange={handleFileChange}
                                className='business-card-section__file-upload-input'
                                placeholder='Виберіт файл'
                            />

                            <span className='business-card-section__file-upload-span'>Виберіть файл</span>
                        </label>
                    </div>
                </div>
            )}

            <img id='business-card-section__second-img' src={backgroundImg2} alt="" />
        </section>
    )
}