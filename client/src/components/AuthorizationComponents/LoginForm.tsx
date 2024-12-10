import { useAuth } from "../../hooks/auth.hook";
import { AuthContext } from "../../contex/authContex.ts";
import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeLoginModal } from "../../store/modalSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faAt, faLock, faXmark } from '@fortawesome/free-solid-svg-icons';
import "../../style/AuthorizationComponentsStyle/LoginFormStyle.css";

type Inputs = {
    email: string,
    password: string,
};

export const LoginForm = () => {
    const auth = useContext(AuthContext)
    const dispatch = useDispatch();
    const {register ,handleSubmit} = useForm<Inputs>();
    const {request, error} = useAuth();

    const SubmitHandler : SubmitHandler<Inputs> = async (data) => {
        try {
            const response = await request(
                'http://localhost:5000/login', 
                'POST', 
                {email : data.email, password : data.password}
            )

            // auth.login(response.token, response.userId)
            // auth.userId(response.userId)

            if (!error) {
                alert('Вхід успішний');
                dispatch(closeLoginModal())
            }
        } catch (error) {}
    }  

    return (
        <form className="login-form" onSubmit={handleSubmit(SubmitHandler)}>
            <button onClick={() => dispatch(closeLoginModal())} className="login-form__close-btn">
                <FontAwesomeIcon className="close-btn__icon" icon={faXmark} />
            </button>

            <div className="login-form__email-field">
                <FontAwesomeIcon className="email-field__icon" icon={faAt} />

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
    )
}