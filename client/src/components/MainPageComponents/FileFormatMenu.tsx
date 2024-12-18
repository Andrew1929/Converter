import { useRef } from 'react';
import '../../style/MainPageComponentsStyle/FileFormatMenuStyle.css';

export const FileFormatMenu: React.FC <{onSelect: (format: string) => void}> = ({ onSelect }) => {
    const selectRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLUListElement>(null);
    const selectedRef = useRef<HTMLSpanElement>(null);

    const toggleMenu = () => {
        if (selectRef.current && menuRef.current) {
            selectRef.current.classList.toggle('select-clicked');
            menuRef.current.classList.toggle('menu-open');
        }
    };

    const handleSelect = (format: string) => {
        if (selectedRef.current) {
            selectedRef.current.textContent = format;
        }
        onSelect(format); 
        toggleMenu();
    };
    
    const formats = [
        // Фото
        'jpg', 'png', 'gif', 'bmp', 'webp', 'tiff', 'heic',
        // Документи
        'pdf', 'doc', 'docx', 'odt', 'rtf', 'txt', 'xls', 'xlsx', 'ppt', 'pptx',
        // Векторні зображення
        'svg', 'ai', 'eps', 'cdr', 'dxf',
        // Архіви
        'zip', 'rar', '7z', 'tar', 'gz',
        // Аудіо
        'mp3', 'wav', 'aac', 'flac', 'ogg',
        // Відео
        'mp4', 'avi', 'mov', 'mkv', 'wmv', 'webm',
        // Інші
        'json', 'xml', 'csv',
    ];

    return (
        <div className="dropdown-menu">
            <div className="dropdown-select" onClick={toggleMenu} ref={selectRef}>
                <span className="selected" ref={selectedRef}>
                    ...
                </span>
                <div className="caret"></div>
            </div>

            <ul className="dropdown-select-menu" ref={menuRef}>
                {formats.map((format, index) => (
                    <li key={index} onClick={() => handleSelect(format)}>
                        <p>{format}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};
