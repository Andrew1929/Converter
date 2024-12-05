import { useForm, SubmitHandler, Form } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenNib, faAt, faLock } from '@fortawesome/free-solid-svg-icons';
import "../../style/AuthorizationComponentsStyle/LoginFormStyle.css";

export const LoginForm = () => {
    return (
        <form className="login-form">
            <div className="login-form__data-field">
                <FontAwesomeIcon className="data-field__icon" icon={faPenNib} />

                <input className="data-field__input" type="text" />

                <label className="data-field__label" htmlFor="">ім'я користувача</label>
            </div>

            <div className="login-form__email-field">
                <FontAwesomeIcon className="email-field__icon" icon={faAt} />

                <input className="data-field__input" type="text" />

                <label className="data-field__label" htmlFor="">електронна пошта</label>
            </div>

            <div className="login-form__data-field">
                <FontAwesomeIcon className="data-field__icon" icon={faLock} />

                <input className="data-field__input" type="text" />

                <label className="data-field__label" htmlFor="">пароль</label>
            </div>
        </form>
    )
}