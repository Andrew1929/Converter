import { useRef } from 'react';
import '../../style/MainPageComponentsStyle/FileFormatMenuStyle.css';

export const FileFormatMenu: React.FC<{ onSelect: (format: string) => void }> = ({ onSelect }) => {
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
        onSelect(format); // Передати обраний формат наверх
        toggleMenu();
    };

    const formats = [
        'jpg', 'png', 'gif', 'bmp', 'webp', 'tiff', 'heic', 'pdf', 'doc', 'docx', // формати
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
