import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store.ts';
import { openLoginModal, openRegisterModel} from '../../store/modalSlice';
import { logout } from '../../store/authSlice.ts';
import { LoginForm } from '../AuthorizationComponents/LoginForm.tsx';
import { RegisterForm } from '../AuthorizationComponents/RegisterForm';
import '../../style/headerComponentStyle/headerStyle.css';

export const Header : React.FC = () => {
    const dispatch = useDispatch();
    const { isLoginFormOpen, isRegisterFormOpen} = useSelector((state : RootState) => state.modal);
    const { isAuthenticated, userName } = useSelector((state: RootState) => state.auth);
    
    const logoutHandler = () => {
        dispatch(logout());
         
    }
    return (
        <header className="header">
            { isAuthenticated ? (
                <>
                    <div className="header__logo">
                        <Link className="header__logo-link" to='/головна'>
                            <FontAwesomeIcon className='header__logo-icon' icon={faFile} />

                            <p className='header__logo-text'>Конвентор</p>
                        </Link>
                    </div>
                    
                    
                    <nav className="header__nav">
                        <ul className="header__nav-list">
                            <Link className="header__nav-link" to='/головна'>
                                <li className="header__nav-item">Головна</li>
                            </Link>

                            <Link className="header__nav-link" to='/про_нас'>
                                <li className="header__nav-item">Про нас</li>
                            </Link>

                            <Link className="header__nav-link" to='/контакти'>
                                <li className="header__nav-item">Контакти</li>
                            </Link>
                        </ul>
                    </nav>

                    <div onClick={() => logoutHandler()} className="header__user-panel">
                        <Link className="header__nav-link" to='/профіль'>
                            <FontAwesomeIcon className='user-panel__icon' icon={faUser} />
                        </Link>
                        
                        <p className='user-panel__username'>{userName}</p>
                    </div>
                </>
            ) : (
                <>
                    <div className="header__logo">
                        <Link className="header__logo-link" to='/головна'>
                            <FontAwesomeIcon className='header__logo-icon' icon={faFile} />

                            <p className='header__logo-text'>Конвентор</p>
                        </Link>
                    </div>

                    <nav className="header__nav">
                        <ul className="header__nav-list">
                            <Link className="header__nav-link" to='/головна'>
                                <li className="header__nav-item">Головна</li>
                            </Link>

                            <Link className="header__nav-link" to='/про_нас'>
                                <li className="header__nav-item">Про нас</li>
                            </Link>

                            <Link className="header__nav-link" to='/контакти'>
                                <li className="header__nav-item">Контакти</li>
                            </Link>
                        </ul>
                    </nav>

                    <div className="header__login-buttons">
                        <button onClick={() => dispatch(openLoginModal())} className="header__logIn-button">Увійти</button>

                        <button onClick={() => dispatch(openRegisterModel())} className="header__signUp-button">Створити</button>
                    </div>

                    {isLoginFormOpen && <LoginForm />}
                    {isRegisterFormOpen && <RegisterForm />}
                </>
            )}
            
        </header>
    )
}