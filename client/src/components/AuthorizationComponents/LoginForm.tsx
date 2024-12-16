import { useAuth } from "../../hooks/auth.hook";
import { AppDispatch } from "../../store/store";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../../store/authSlice";
import { closeLoginModal } from "../../store/modalSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faAt, faLock, faXmark } from '@fortawesome/free-solid-svg-icons';
import "../../style/AuthorizationComponentsStyle/LoginFormStyle.css";


type Inputs = {
    email: string,
    password: string,
};

export const LoginForm = () => {
    const dispatch : AppDispatch = useDispatch();
    const {register ,handleSubmit} = useForm<Inputs>();
    const {request, saveTokenToStorage} = useAuth();

    const SubmitHandler : SubmitHandler<Inputs> = async (data) => {
        try {
            
            const response = await request(
                'http://localhost:5000/login', 
                'POST', 
                {email : data.email, password : data.password}
            )

            if (response?.token && response?.userId) {
                saveTokenToStorage(response.token, response.userId);
                dispatch(login({ token: response.token, userId: response.userId }));
                dispatch(closeLoginModal());
                alert('Вхід успішний');
            } else {
                alert('Щось пішло не так');
            }
        } catch (error) {}
    }  

    return (
        <div className="form__backdrop">
            <form className="login-form" onSubmit={handleSubmit(SubmitHandler)}>
                <p className="login-form__title">Увійти в акаунт</p>

                <button onClick={() => dispatch(closeLoginModal())} className="login-form__close-btn">
                    <FontAwesomeIcon className="close-btn__icon" icon={faXmark} />
                </button>

                <div className="login-form__data-field">
                    <FontAwesomeIcon className="data-field__icon" icon={faAt} />

                    <input className="data-field__input"  {...register('email')} required type="email" />

                    <label className="data-field__label" htmlFor="">електронна пошта</label>
                </div>

                <div className="login-form__data-field">
                    <FontAwesomeIcon className="data-field__icon" icon={faLock} />

                    <input className="data-field__input" {...register('password')} required type="password" />

                    <label className="data-field__label" htmlFor="">пароль</label>
                </div>

                <button type="submit" className="login-form__submit-btn">Увійти</button>
            </form>
        </div>
    )
}