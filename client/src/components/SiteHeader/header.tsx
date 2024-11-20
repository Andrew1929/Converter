import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFile} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import '../../style/headerComponentStyle/headerStyle.css';

export const Header : React.FC = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <FontAwesomeIcon className='header__logo-icon' icon={faFile} />

                <p className='header__logo-text'>Конвентор</p>
            </div>

            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li className="header__nav-item">Головна</li>

                    <li className="header__nav-item">Головна</li>

                    <li className="header__nav-item">Головна</li>
                </ul>
            </nav>

            <div className="header__login-buttons">
                <button className="header__logIn-button">Увійти</button>

                <button className="header__signUp-button">Створити</button>

                <FontAwesomeIcon className='header__user-icon' icon={faUser} />
            </div>
        </header>
    )
}