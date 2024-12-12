import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFile} from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store.ts';
import { openLoginModal, openRegisterModel} from '../../store/modalSlice';
import { LoginForm } from '../AuthorizationComponents/LoginForm.tsx';
import { RegisterForm } from '../AuthorizationComponents/RegisterForm';
import '../../style/headerComponentStyle/headerStyle.css';

export const Header : React.FC = () => {
    const dispatch = useDispatch();
    const { isLoginFormOpen, isRegisterFormOpen} = useSelector((state : RootState) => state.modal);

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
                <button onClick={() => dispatch(openLoginModal())} className="header__logIn-button">Увійти</button>

                <button onClick={() => dispatch(openRegisterModel())} className="header__signUp-button">Створити</button>
            </div>

            {isLoginFormOpen && <LoginForm />}
            {isRegisterFormOpen && <RegisterForm />}
        </header>
    )
}