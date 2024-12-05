import { useForm, SubmitHandler, Form } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faLock } from '@fortawesome/free-solid-svg-icons';
import '../../style/AuthorizationComponentsStyle/RegisterFormStyle.css';

export const RegisterForm = () => {
    return (
        <form className="register-form">
            <div className="register-form__email-field">
                <FontAwesomeIcon className="email-field__icon" icon={faAt} />

                <input className="data-field__input" type="text" />

                <label className="data-field__label" htmlFor="">електронна пошта</label>
            </div>

            <div className="register-form__data-field">
                <FontAwesomeIcon className="data-field__icon" icon={faLock} />

                <input className="data-field__input" type="text" />

                <label className="data-field__label" htmlFor="">пароль</label>
            </div>
        </form>
    )
}